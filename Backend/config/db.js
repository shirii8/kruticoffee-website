// import mongoose from "mongoose";

// //build the logic

// export const connectDB = async()=>{
//     (await mongoose.connect('mongodb+srv://shiri8:2oLrA2TaLmsTaabn@cluster0.8sa7sua.mongodb.net/kruticoffee')).isObjectIdOrHexString(()=>console.log("DB connected"));
// }

import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1);
  }
};
