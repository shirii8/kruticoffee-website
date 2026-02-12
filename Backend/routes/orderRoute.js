import express from "express"
import authMiddleware from "../middleware/authMiddleware" 
import { placeOrder } from "../controllers/orderController"

const orderRouter = express.Router();

orderRouter.post("/place", authMiddleware, placeOrder);

export default orderRouter;