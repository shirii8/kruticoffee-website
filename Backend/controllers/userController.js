import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import validator from "validator"

//login user
const loginUser=async(req,res)=>{
    const {email,password}=req.body;
    try{
        const user= await userModel.findOne({email});
        if(!user){
            return res.json({success: false, message: " User doesnot exist"})
        }

        const isMatch=await bcrypt.compare(password, user.password);

        if(!isMatch){
            return res.json({success: false, message:"Invalid credentials"})
        }

        const token=createToken(user._id);
        res.json({success:true, token})
    } catch(error){
        console.log("error");
        res.json({success: false, message:"Error"})
    }
}

const createToken = (id)=>{
    return jwt.sign({id}, proccess.env.JWT_SECRET) //taken users id, used as data and then generated one token
}

//register user
const registerUser = async (req, res)=>{
        const {name, password, email}=req.body; //deconstructing. basically in these variables our respective data will be stored
       
        try{
            //if user already available with mail id
            const exists = await userModel.findOne({email})
            if(exists){
                return res.json({success: false, message:"User already exists"}) //object property
            }

             //validating email and strong password
             if(!validator.isEmail(email)){
                return res.json({success: false, message:"Please enter valid email"})
             }


             //check password length > 8 digit or not
             if(password.length<8){
                return res.json({success: false, message:"Please enter a strong password"})
             }

             // hashing user password
             const salt=await bcrypt.genSalt(10) //genSalt(10) higher the number stronger is the password encryption(give range from 5-15, 15 takes a longer time to encrypt)
            const hashedPassword= await bcrypt.hash(password,salt) //now password has been hashed
             
            
            //if all are valid create one account
            const newUser=new userModel({
                name:name, //from req.body
                email:email,
                password: hashedPassword
            })

            //save user in database
           const user = await newUser.save()
           const token=createToken(user._id)
           res.json({success: true, token})
        } catch(error){
            console.log(error);
            res.json({success: false, message:"Error"})
        }
}

export {loginUser,registerUser}