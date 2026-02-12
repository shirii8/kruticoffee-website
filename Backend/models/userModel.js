import mongoose from "mongoose";
const userSchema= new mongoose.Schema({
    name:{type:String, required: true},
    email:{type:String, required: true, unique:true},
    password:{type:String, required: true},
    cartData:{type:Object, default:{}},
},{minimise:false}) //minimise is added so that the cartdata is formed even without any data

const userModel=mongoose.models.user || mongoose.model("user", userSchema);
//if model schema is created it will use otherwise create one
export default userModel;