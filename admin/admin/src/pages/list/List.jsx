import axios from 'axios';
import { div } from 'motion/react-client';
import React,{useState, useEffect} from 'react'
import { toast } from 'react-toastify';

const List = () => {

        const url="http://localhost:4000"
    const[list,setList] =useState([]);

    const fetchList= async()=>{
        const response = await axios.get(`${url}/api/food/list`);

        if(response.data.success){
            setList(response.data.data);
            console.log(response.data);
        }
        else{
            toast.error("Error");
        }
    }

    useEffect(()=>{
        fetchList();
    },[])

  return (
    <div className="list mt-10 add px-8 py-8 w-full max-w-4xl mx-auto rounded-xl bg-[#36211d] border border-white shadow-lg text-white font-[serif]">
  <p className="text-2xl font-bold mb-6 tracking-wide text-[#e3c7a0]">All Food List</p>
  
  <div className="list-table w-full">
    {/* Table Header */}
    <div className="list-table-format grid grid-cols-5 items-center py-3 border-b border-[#b49e94] text-[#e3c7a0] font-semibold">
      <span className="pl-2">Image</span>
      <span>Name</span>
      <span>Category</span>
      <span>Price</span>
      <span className="text-center">Action</span>
    </div>
    
    {/* Table Rows */}
    {list.map((item, index) => (
      <div 
        key={index}
        className="list-table-format grid grid-cols-5 items-center py-4 border-b border-[#4d352a] hover:bg-[#2b1a15] transition"
      >
        <img
          className="h-14 w-14 object-cover rounded-lg border border-[#b49e94] mx-auto"
          src={`${url}/images/${item.image}`}
          alt={item.name}
        />
        <p className="truncate px-2">{item.name}</p>
        <p className="capitalize px-2">{item.category}</p>
        <p className="px-2 font-medium">${item.price}</p>
        <button
          className="text-[#ad8656] hover:text-[#e3c7a0] p-2 rounded-full border border-[#ad8656] hover:bg-[#2b1a15] mx-auto font-bold transition"
          title="Delete Item"
        >
          X
        </button>
      </div>
    ))}
  </div>
</div>

  )
}

export default List