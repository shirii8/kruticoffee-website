import foodModel from "../models/foodModel.js";
// import fs from "fs"; // No longer needed for Cloudinary, but kept for reference

// @desc    Add food item to Cloudinary & MongoDB
const addFood = async (req, res) => {
    try {
        // This is now a full URL: https://res.cloudinary.com/...
        const image_url = req.file.path; 

        const food = new foodModel({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            category: req.body.category,
            image: image_url, // We save the link, not just the name
        });

        await food.save();
        res.json({ success: true, message: "Food Added Successfully" });
    } catch (error) {
        console.error(error);
        res.json({ success: false, message: "Error adding food" });
    }
}

/* // LOCALLY SAVED FILES LOGIC (OLD)
const addFoodLocal = async(req, res) => {
    let image_filename = `${req.file.filename}`; 

    const food = new foodModel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        image: image_filename, 
    });

    try {
        await food.save();
        res.json({success: true, message: "Food added locally"});
    } catch(error) {
        console.log(error);
        res.json({success: false, message: "Error saving to local DB"});
    }
}
*/



// @desc    List all food items
const listFood = async (req, res) => {
    try {
        const foods = await foodModel.find({});
        res.json({ success: true, data: foods });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error fetching menu" });
    }
};

// @desc    Remove food item from MongoDB
const removeFood = async (req, res) => {
    try {
        const food = await foodModel.findById(req.body.id);
        
        if (!food) {
            return res.json({ success: false, message: "Food not found" });
        }

        /**
         * CLOUDINARY NOTE:
         * We do NOT use fs.unlink here because the image isn't on our server.
         * To delete from Cloudinary as well, you would use:
         * cloudinary.v2.uploader.destroy(public_id)
         */

        await foodModel.findByIdAndDelete(req.body.id);
        res.json({ success: true, message: "Food removed from database" });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error during removal" });
    }
};

/* // REMOVE FOOD LOCAL LOGIC (OLD)
const removeFoodLocal = async(req, res)=>{
    try{
        const food = await foodModel.findById(req.body.id);
        fs.unlink(`uploads/${food.image}`, ()=>{}) // Deleting local file

        await foodModel.findByIdAndDelete(req.body.id);
        res.json({success:true, message:"Food Removed Locally"})
    }catch (error){
        console.log(error);
        res.json({success:false, message: "Error"});
    }
}
*/

export { addFood, listFood, removeFood };