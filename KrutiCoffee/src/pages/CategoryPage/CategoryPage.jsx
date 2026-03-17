import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

const CategoryPage = () => {
  const { category } = useParams();
  const { Shop_list, url } = useContext(StoreContext);

  // Filter products where the category matches the URL parameter
  // Note: Ensure your database category names match these strings or slugify them
  // IMPORTANT: If Shop_list is undefined (context not ready), return null to prevent crash
  if (!Shop_list) return null;

  // Filter using Shop_list (your local JSON)
  const displayProducts = Shop_list.filter(item => {
    const slug = item.category.toLowerCase().replace(/\s+/g, '-');
    return slug === category;
  });

 return (
    <div className="min-h-screen bg-[#1a0f0a] text-[#f4e3d8] ml-[60px] p-20">
      <h1 className="font-serif italic text-6xl capitalize mb-12">
        {category.replace('-', ' ')}
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {displayProducts.length > 0 ? (
          displayProducts.map((item) => (
            <div key={item._id} className="bg-white/5 backdrop-blur-md p-6 border border-white/5 rounded-2xl hover:border-[#b49e94]/50 transition-all">
              {/* Note: If these are local images, ensure the path is correct. 
                  If they are from the backend, use 'url'. 
                  Since they are in shopJson, you might need to import them differently */}
              <img src={item.image} alt={item.name} className="w-full aspect-square object-contain mb-4" />
              <h2 className="font-sans font-bold text-xs tracking-widest uppercase text-[#b49e94]">{item.name}</h2>
              <p className="font-serif italic text-xl mt-2">₹{item.price}</p>
              <p className="text-xs text-[#f4e3d8]/60 mt-2 line-clamp-2">{item.description}</p>
            </div>
          ))
        ) : (
          <p className="opacity-40">No products found in this collection.</p>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;