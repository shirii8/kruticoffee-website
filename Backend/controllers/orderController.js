import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const placeOrder = async (req, res) => {
    // In production, use environment variables for your URL
    const frontend_url = process.env.FRONTEND_URL || "http://localhost:5173";
    
    try {
        // 1. Create and Save Order
        // Note: Ensure userId comes from your auth middleware (req.userId) 
        // rather than req.body to prevent users from ordering for others.
        const newOrder = new orderModel({
            userId: req.body.userId, 
            items: req.body.items,
            amount: req.body.amount,
            address: req.body.address
        });
        await newOrder.save();

        // 2. Prepare Stripe Line Items
        const line_items = req.body.items.map((item) => ({
            price_data: {
                currency: "inr",
                product_data: {
                    name: item.name
                },
                // Stripe expects amounts in the smallest currency unit (paise for INR).
                // Careful: item.price * 100 * 80 assumes price is in USD and 
                // you're hardcoding a conversion rate. Better to use fixed INR prices.
                unit_amount: item.price * 100 
            },
            quantity: item.quantity
        }));

        // Add Delivery Charges (e.g., ₹40 delivery)
        line_items.push({
            price_data: {
                currency: "inr",
                product_data: {
                    name: "Delivery Charges",
                },
                unit_amount: 40 * 100, 
            },
            quantity: 1
        });

        // 3. Create Stripe Session
        const session = await stripe.checkout.sessions.create({
            line_items: line_items,
            mode: 'payment',
            success_url: `${frontend_url}/verify?success=true&orderId=${newOrder._id}`,
            cancel_url: `${frontend_url}/verify?success=false&orderId=${newOrder._id}`,
        });

        res.json({
            success: true,
            session_url: session.url 
        });

    } catch (error) {
        console.error("Stripe Session Error:", error);
        res.status(500).json({
            success: false,
            message: "Initialization failed"
        });
    }
}

const verifyOrder = async (req, res) => {
    const { orderId, success } = req.body;
    try {
        if (success === "true" || success === true) {
            // Update order status
            await orderModel.findByIdAndUpdate(orderId, { payment: true });
            
            // Clear user cart only after confirmed payment
            const order = await orderModel.findById(orderId);
            await userModel.findByIdAndUpdate(order.userId, { cartData: {} });

            res.json({ success: true, message: "Payment verified successfully" });
        } else {
            // If payment failed/cancelled, we delete the pending order
            await orderModel.findByIdAndDelete(orderId);
            res.json({ success: false, message: "Payment cancelled" });
        }
    } catch (error) {
        console.error("Verification Error:", error);
        res.status(500).json({ success: false, message: "Verification failed" });
    }
}

const userOrders = async (req, res) => {
    try {
        const orders = await orderModel.find({ userId: req.body.userId });
        res.json({ success: true, data: orders });
    } catch (error) {
        console.error("Fetch Orders Error:", error);
        res.status(500).json({ success: false, message: "Could not retrieve orders" });
    }
}

export { placeOrder, verifyOrder, userOrders };