import express from "express";
import { addToCart, removeFromCart, getCart } from "../controllers/cartController.js"; // Added missing imports
import authMiddleware from "../middleware/authMiddleware.js";

const cartRouter = express.Router();

cartRouter.post("/add", authMiddleware, addToCart);
cartRouter.post("/remove", authMiddleware, removeFromCart); // Changed "/post" to "/remove"
cartRouter.post("/get", authMiddleware, getCart);

export default cartRouter;