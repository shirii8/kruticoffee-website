import jwt from "jsonwebtoken";
import adminModel from "../models/adminModel.js";

const adminLogin = async (req, res) => {
    const { email, password } = req.body;

    try {
        // 1. HARDCODED FALLBACK (For your initial test)
        const MASTER_EMAIL = "admin@kruticoffee.com";
        const MASTER_PASS = "coffee_master_2026";

        if (email === MASTER_EMAIL && password === MASTER_PASS) {
            const token = jwt.sign(email + password, process.env.JWT_SECRET || "secret_key");
            return res.json({ success: true, token });
        }

        // 2. DATABASE CHECK (For when you add real admin users later)
        const admin = await adminModel.findOne({ email });
        if (!admin) {
            return res.json({ success: false, message: "Admin does not exist" });
        }

        if (password === admin.password) { // Use bcrypt.compare here later for security
            const token = jwt.sign(admin._id, process.env.JWT_SECRET || "secret_key");
            res.json({ success: true, token });
        } else {
            res.json({ success: false, message: "Invalid credentials" });
        }

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Server Error" });
    }
};

export { adminLogin };