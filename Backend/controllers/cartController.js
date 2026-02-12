import userModel from "../models/userModel.js"

//add to cart. add itsm to user cart
const addToCart=async(req, res)=>{
    try{
        let userData= await userModel.findById(req.body.userId);
        let cartData= await userData.cartData;
        if(!cartData[req.body.itemId]){
            cartbody[req.body.itemId]=1;
        }
        else{
            cartData[req.body.itemId]+=1;
        }
        await userModel.findByIdAndUpdate(req.body.userId, {cartData});
        req.json({
            success: true,
            message:"Added to cart"
        });
    } catch(error){
        console.log(error);
         req.json({
            success: false,
            message:"Error"
        });
    }
} 


// Remove from user cart
const removeFromCart = async (req, res) => {
    try {
        let userData = await userModel.findById(req.body.userId);
        let cartData = await userData.cartData;

        // Corrected the bracket logic here
        if (cartData[req.body.itemId] > 0) {
            cartData[req.body.itemId] -= 1;
        }

        await userModel.findByIdAndUpdate(req.body.userId, { cartData });
        
        res.json({
            success: true,
            message: "Removed from Cart"
        }); // Removed the extra ")"
        
    } catch (error) {
        console.log(error);
        res.json({ 
            success: false,
            message: "Error"
        });
    }
};

//get cart. fetch user cart data
const getCart=async (req,res)=>{
    try{
        let userData= await userModel.findById(req.body.userId);
        let cartData= await userData.cartData;
         res.json({ 
            success: true,
            cartData
        });
    } catch(error){
        console.log("Error");
         res.json({ 
            success: false,
            message: "Error"
        });
    }
}

export {addToCart, removeFromCart, getCart}