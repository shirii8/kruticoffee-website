import express from "express";
import { addFood, listFood, removeFood } from "../controllers/foodController.js";
import upload from "../middleware/multer.js"; // Import your Cloudinary config here

const foodRouter = express.Router();

// Now use the Cloudinary-linked upload middleware
// The 'image' string must match the field name used in your Admin panel's FormData
foodRouter.post("/add", upload.single("image"), addFood);

foodRouter.get("/list", listFood);

// Changed to POST/DELETE for security; many Admin panels use POST for removal
foodRouter.post("/remove", removeFood); 

export default foodRouter;