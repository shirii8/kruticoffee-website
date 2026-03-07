import jwt from "jsonwebtoken"

const authMiddleware = async (req, res, next)=>{
    //connect it with cartRoute
    //get the token from the users uasing headers
    const {token}=req.headers;
    if(!token){
        return res.json({
            success: false,
            message:"Authorization failed! Please Login again."
        })
    }
    try{
        const token_decode=jwt.verify(token, process.env.JWT_SECRET);
        //in create token in userController we had set one id while parsing the password
        req.body.userId=token_decode.id;
        next();
    } catch(error){
        console.log(error);
        res.json({
            success: false,
            message:"Error"
        })
    }
}

// middleware takes the token and converts it into an user id and using that id we can add remove or edit data from the cart

export default authMiddleware;