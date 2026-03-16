import express from "express";
import { addFood, listFood, removeFood } from "../controllers/foodController.js";
import upload from "../middleware/multer.js"; // This should now be your Cloudinary-linked config

const foodRouter = express.Router();

/**
 * CLOUDINARY LOGIC:
 * The 'upload.single("image")' middleware now intercepts the file,
 * uploads it to Cloudinary, and attaches the URL to 'req.file.path'.
 */
foodRouter.post("/add", upload.single("image"), addFood);

foodRouter.get("/list", listFood);

// Standard removal route
foodRouter.post("/remove", removeFood);

/* // OLD LOCAL STORAGE LOGIC (COMMENTED)
// In the old version, 'upload' was configured with multer.diskStorage.
// It saved files to an '/uploads' folder on your hard drive.

import uploadLocal from "../middleware/multerLocal.js"; 

foodRouter.post("/add-local", uploadLocal.single("image"), addFood);
*/

export default foodRouter;