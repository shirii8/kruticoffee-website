import foodModel from "../models/foodModel.js";

// foodController.js
const addFood = async(req, res) => {
    // req.file.filename comes from Multer local storage
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
// @desc    Add food item to Cloudinary & MongoDB
// const addFood = async (req, res) => {
//     try {
//         // If you used the Multer-Cloudinary storage as discussed, 
//         // req.file.path is the FULL URL of the image on the cloud.
//         const image_url = req.file.path;

//         const food = new foodModel({
//             name: req.body.name,
//             description: req.body.description,
//             price: req.body.price,
//             category: req.body.category,
//             image: image_url, // Storing the global link directly
//         });

//         await food.save();
//         res.json({ success: true, message: "Food added to the Cloud Gallery" });
//     } catch (error) {
//         console.error("Upload Error:", error);
//         res.json({ success: false, message: "Failed to upload to Cloud" });
//     }
// };

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

// @desc    Remove food item (Note: Clean up in DB)
const removeFood = async (req, res) => {
    try {
        // We find the item first to ensure it exists
        const food = await foodModel.findById(req.body.id);
        
        if (!food) {
            return res.json({ success: false, message: "Food not found" });
        }

        // NOTE: With Cloudinary, you don't use fs.unlink (that's for local files).
        // You would use cloudinary.uploader.destroy(public_id) if you wanted 
        // to delete from the cloud too, but for now, let's clean the DB.
        
        await foodModel.findByIdAndDelete(req.body.id);
        res.json({ success: true, message: "Item removed from collection" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error during removal" });
    }
};

export { addFood, listFood, removeFood };

// import foodModel from "../models/foodModel.js";
// import fs from "fs" //pre built in node.js

// //add food item

// const addFood = async(req, res)=>{
//     let image_filename= `${req.file.filename}`;

//     const food= new foodModel({
//         name: req.body.name,
//         description: req.body.description,
//         price: req.body.price,
//         category: req.body.category,
//         image: image_filename,
//     })

//     try{
//         await food.save();
//         res.json({success:true, message: "Food added"})
//     } catch(error){
//         console.log(error)
//         res.json({success:false, message: "Error"})
//     }
// }

// //all food list
// const listFood= async(req, res)=>{
//     try{
//         const foods= await foodModel.find({})
//         res.json({success:true, data: foods})
//     } catch(error){
//         console.log(error)
//         res.json({success:false, message:"Error"})
//     }
// }

// //remove food item
// const removeFood=async(req, res)=>{
//     try{
//         const food = await foodModel.findById(req.body.id);
//         fs.unlink(`uploads/$food.image`, ()=>{})

//         await foodModel.findByDelete(req.body.id);
//         res.json({success:true, message:"Food Removed"})
//     }catch (error){
//         console.log(error);
//         res.json({success:false, message: "Error"});
//     }
// }

// export  {addFood, listFood, removeFood}