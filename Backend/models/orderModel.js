//can save the order in database
import mongoose from "mongoose";
import { object } from "motion/react-client";

const orderSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    items: { type: Array, required: true },
    amount: { type: Number, required: true }, // Changed object to Number
    address: { type: Object, required: true }, // Changed object to Object
    status: { type: String, default: "Food Processing" },
    date: { type: Date, default: Date.now }, // Fixed "data" to "date" and removed ()
    payment: { type: Boolean, default: false }
});

const orderModel = mongoose.models.order || mongoose.model("order", orderSchema);
export default orderModel;