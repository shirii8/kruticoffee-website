//can save the order in database
import mongoose from "mongoose";
import { object } from "motion/react-client";

const orderSchema= new mongoose.Schema({
    userId:{type:String, required: true},
    items:{type:Array, required: true},
    amount:{type:object, required: true},
    address:{type:object, required: true},
    status:{type:String, default: "Food Processing"},
    data:{type: Date, default: Date.now()},
    payment:{type: Boolean, default: false}
})

const orderModel = mongoose.models.order || mongoose.model("order", orderSchema);
export default orderModel;