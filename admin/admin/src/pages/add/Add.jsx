import React, { useEffect, useState } from "react";
import { assets } from "../../assets/assets";
import axios from "axios";
import { toast, ToastContainer } from 'react-toastify';

const Add = () => {
    const url="http://localhost:4000";
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "Cake",
  });


  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  //to check if its working and is saved

  useEffect(() => {
    console.log(data);
  }, [data]);

  const onSubmitHandler = async (event)=>{
    event.preventDefault(); //TO PREVENT FROM AUTO RELOADS
    const formData = new FormData();
    formData.append("name", data.name)
    formData.append("description", data.description)
    formData.append("price", Number(data.price))
    formData.append("category", data.category);
    formData.append("image", image);
   console.log("Submitted data:", {
    ...data,
    image
  });

  try {
    const response = await axios.post(`${url}/api/food/add`, formData);
    if (response.data.success) {
      setData({
        name: "",
        description: "",
        price: "",
        category: "Cake", // set back to default
      });
      setImage(false);
      toast.success(response.data.message)

      console.log("Backend responded:", response.data);
    } else {
        toast.error(response.data.message)
      console.log("Backend error:", response.data);
    }
  } catch (err) {
    console.error("Posting error:", err);
  }
};

  return (
    <div className="add w-full max-w-lg mx-auto rounded-xl shadow-xl bg-[#36211d]  text-white font-serif">
  <form className="flex flex-col gap-8" onSubmit={onSubmitHandler}>
    
    {/* Image Upload */}
    <div className="add-img-upload flex flex-col items-center gap-3">
      <p className="text-lg font-semibold text-[#e3c7a0] tracking-wide">Upload Image</p>
      <label
        htmlFor="image"
        className=" rounded-lg border-2 border-[#b49e94] flex items-center justify-center hover:bg-[#3c2417] cursor-pointer transition"
      >
        <img
          className="max-h-24 max-w-24 object-cover rounded-md"
          src={image ? URL.createObjectURL(image) : assets.upload_area}
          alt="Upload preview"
        />
      </label>
      <input
        type="file"
        id="image"
        hidden
        required
        onChange={(e) => setImage(e.target.files[0])}
      />
    </div>

    {/* Product Name */}
    <div className="add-product-name flex flex-col gap-2">
      <p className="text-base font-bold text-[#e3c7a0]">Product Name</p>
      <input
        onChange={onChangeHandler}
        value={data.name}
        type="text"
        name="name"
        placeholder="Type here"
        className="px-4 py-2 rounded-lg bg-[#241711] text-white placeholder-[#ad8656] border border-[#b49e94] focus:outline-none focus:ring-2 focus:ring-[#ad8656] transition"
      />
    </div>

    {/* Product Description */}
    <div className="add-product-description flex flex-col gap-2">
      <p className="text-base font-bold text-[#e3c7a0]">Product Description</p>
      <textarea
        className="px-4 py-2 rounded-lg border-2 border-[#b49e94] bg-[#241711] text-white placeholder-[#ad8656] resize-none focus:outline-none focus:ring-2 focus:ring-[#ad8656] transition"
        onChange={onChangeHandler}
        value={data.description}
        name="description"
        rows={5}
        placeholder="Write content here"
        required
      />
    </div>

    {/* Category & Price */}
    <div className="add-category-price flex gap-6">
      <div className="add-category flex flex-col gap-2 w-1/2">
        <p className="text-base font-bold text-[#e3c7a0]">Category</p>
        <select
          onChange={onChangeHandler}
          value={data.category}
          name="category"
          className="px-4 py-2 rounded-lg bg-[#241711] text-white border border-[#b49e94] focus:outline-none focus:ring-2 focus:ring-[#ad8656] transition"
        >
          <option className="text-white" value="Salad">Salad</option>
          <option className="text-white" value="Rolls">Rolls</option>
          <option className="text-white" value="Desert">Desert</option>
          <option className="text-white" value="Sandwich">Sandwich</option>
          <option className="text-white" value="Cake">Cake</option>
          <option className="text-white" value="Pure Veg">Pure Veg</option>
          <option className="text-white" value="Pasta">Pasta</option>
          <option className="text-white" value="Noodles">Noodles</option>
        </select>
      </div>
      <div className="add-price flex flex-col gap-2 w-1/2">
        <p className="text-base font-bold text-[#e3c7a0]">Price</p>
        <input
          onChange={onChangeHandler}
          value={data.price}
          type="number"
          name="price"
          placeholder="$20"
          className="px-4 py-2 rounded-lg bg-[#241711] text-white border border-[#b49e94] placeholder-[#ad8656] focus:outline-none focus:ring-2 focus:ring-[#ad8656] transition"
        />
      </div>
    </div>

    {/* Submit Button */}
    <button
      type="submit"
      className="absolute bottom-8 right-8 mt-6 font-bold text-lg tracking-wider px-4 py-2 rounded-full bg-[#ad8656] text-[#36211d] shadow-md hover:bg-[#e3c7a0] transition"
    >
      ADD
    </button>
  </form>
</div>

  );
};

export default Add;
