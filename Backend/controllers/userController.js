import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";

// Helper to create JWT
const createToken = (id) => {
    // Ensure JWT_SECRET is loaded; otherwise, signing will fail and throw an error
    return jwt.sign({ id }, process.env.JWT_SECRET);
};

// LOGIN USER
const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(404).json({ success: false, message: "User does not exist" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ success: false, message: "Invalid credentials" });
        }

        const token = createToken(user._id);
        res.status(200).json({ success: true, token });
    } catch (error) {
        console.error("Login Error:", error); // Log actual error to console
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};

// REGISTER USER
const registerUser = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        // 1. Check if user already exists
        const exists = await userModel.findOne({ email });
        if (exists) {
            return res.status(409).json({ success: false, message: "User already exists" });
        }

        // 2. Validate email format
        if (!validator.isEmail(email)) {
            return res.status(400).json({ success: false, message: "Please enter a valid email" });
        }

        // 3. Validate password strength
        if (password.length < 8) {
            return res.status(400).json({ success: false, message: "Password must be at least 8 characters" });
        }

        // 4. Hashing password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // 5. Create and Save User
        const newUser = new userModel({
            name,
            email,
            password: hashedPassword
        });

        const user = await newUser.save();
        const token = createToken(user._id);

        res.status(201).json({ success: true, token });
    // } catch (error) {
    //     console.error("Registration Error Detail:", error); // This will tell you if it's a DB or JWT error
    //     res.status(500).json({ success: false, message: error.message || "Registration failed" });
    // }
    } catch (error) {
    console.error("DEBUG ERROR:", error.message);
    // Change this temporarily so you can see the REAL error in Thunder Client
    res.status(500).json({ success: false, message: error.message }); 
}

};

export { loginUser, registerUser };