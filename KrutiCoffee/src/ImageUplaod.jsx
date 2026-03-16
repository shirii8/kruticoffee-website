import { useState } from "react";

const ImageUploader = () => {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState("");

  const uploadImage = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "Cafe menu images"); // Replace with yours

    setLoading(true);

    try {
      const res = await fetch(
        `https://api.cloudinary.com/v1_1/dttnc62hp/image/upload`, // Replace with your cloud name
        {
          method: "POST",
          body: data,
        }
      );

      const file = await res.json();
      setImageUrl(file.secure_url); // This is your link!
      setLoading(false);
    } catch (err) {
      console.error("Error uploading image:", err);
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h3>Upload Project Image</h3>
      <input type="file" onChange={uploadImage} />
      
      {loading ? (
        <p>Uploading...</p>
      ) : (
        imageUrl && (
          <div>
            <p>Success! Your link:</p>
            <a href={imageUrl} target="_blank">{imageUrl}</a>
            <img src={imageUrl} alt="Uploaded" style={{ width: "200px", display: "block", marginTop: "10px" }} />
          </div>
        )
      )}
    </div>
  );
};

export default ImageUploader;