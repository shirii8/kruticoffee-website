import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';
dotenv.config();

// Configure using your .env keys
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadLocalImages = async () => {
  // Path to your local images (Adjust this to your local machine path)
  const directoryPath = './uploads'; 

  try {
    const files = fs.readdirSync(directoryPath);

    for (const file of files) {
      const filePath = path.join(directoryPath, file);
      
      const result = await cloudinary.uploader.upload(filePath, {
        folder: "kruti_coffee",
        use_filename: true
      });

      console.log(`Uploaded ${file}: ${result.secure_url}`);
      // PRO TIP: You would then update your MongoDB with this new URL
    }
  } catch (err) {
    console.error("Migration failed:", err);
  }
};

uploadLocalImages();