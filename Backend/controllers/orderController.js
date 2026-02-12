import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const placeOrder = async (req, res) => {
    const frontend_url = "http://localhost:5173";
    try {
        // 1. Create and Save Order
        const newOrder = new orderModel({
            userId: req.body.userId, // Added missing comma
            items: req.body.items,
            amount: req.body.amount,
            address: req.body.address
        });
        await newOrder.save();

        // Note: I recommend clearing the cart only AFTER successful payment 
        // in your /verify route, but keeping your logic here for now:
        await userModel.findByIdAndUpdate(req.body.userId, { cartData: {} });

        // 2. Prepare Stripe Line Items
        const line_items = req.body.items.map((item) => ({ // Added parentheses for implicit return
            price_data: {
                currency: "inr",
                product_data: {
                    name: item.name
                },
                unit_amount: item.price * 100 * 80 // Be careful with this multiplier logic
            },
            quantity: item.quantity // Removed semicolon
        }));

        // Add Delivery Charges
        line_items.push({
            price_data: {
                currency: "inr",
                product_data: {
                    name: "Delivery charges",
                },
                unit_amount: 2 * 100 * 80 
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

        // 4. Send the session URL back to frontend
        res.json({
            success: true,
            session_url: session.url // Fixed variable name
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({ // Good practice to use status codes
            success: false,
            message: "Error processing payment"
        });
    }
}

export { placeOrder };