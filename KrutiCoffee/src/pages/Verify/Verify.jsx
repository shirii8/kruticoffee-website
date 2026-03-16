import React, { useContext, useEffect, useCallback } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';
import { motion } from 'framer-motion';

const Verify = () => {
  const [searchParams] = useSearchParams();
  const success = searchParams.get("success");
  const orderId = searchParams.get("orderId");

  const { url } = useContext(StoreContext);
  const navigate = useNavigate();

  /**
   * Memoized verification function to prevent unnecessary re-renders
   * and ensure stable dependency tracking.
   */
  const verifyPayment = useCallback(async () => {
    try {
      // Small artificial delay to let the artistic loader breathe
      await new Promise(resolve => setTimeout(resolve, 2000));

      const response = await axios.post(`${url}/api/order/verify`, { success, orderId });
      
      if (response.data.success) {
        navigate("/myorders");
      } else {
        navigate("/");
      }
    } catch (error) {
      console.error("Payment Verification Error:", error);
      // Industry standard: Redirect to home or a dedicated error page on failure
      navigate("/");
    }
  }, [url, success, orderId, navigate]);

  useEffect(() => {
    if (url && success && orderId) {
      verifyPayment();
    } else if (!success || !orderId) {
      // Fail-fast if params are missing
      navigate("/");
    }
  }, [verifyPayment, url, success, orderId, navigate]);

  return (
    <div className="min-h-screen bg-[#1a0f0b] flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background Heritage Polish */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#4c2b23] rounded-full blur-[120px] opacity-20" />
      </div>

      <div className="relative z-10 flex flex-col items-center">
        {/* Artistic Loader: The "Rising Steam" Effect */}
        <div className="relative w-24 h-24 mb-12">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ 
                opacity: [0, 0.5, 0], 
                y: [-20, -100], 
                scale: [0.8, 1.2, 1.5] 
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                delay: i * 0.6,
                ease: "easeOut" 
              }}
              className="absolute inset-0 border-2 border-[#b49e94] rounded-full opacity-20"
            />
          ))}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 border-t-2 border-b-2 border-[#b49e94] rounded-full animate-spin" />
          </div>
        </div>

        {/* Themed Narrative Text */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <h2 className="text-white font-serif italic text-2xl tracking-wide mb-2">
            Verifying Your Selection
          </h2>
          <p className="text-[#b49e94] font-sans text-xs uppercase tracking-[0.4em] opacity-60">
            Finalizing the architecture of your order
          </p>
        </motion.div>
      </div>

      {/* Decorative Tribal Iconography */}
      <div className="absolute bottom-10 opacity-[0.03] select-none pointer-events-none">
        <h1 className="text-[10vw] font-black text-white tracking-tighter">AUTHENTIC</h1>
      </div>
    </div>
  );
};

export default Verify;

// import React, { useContext, useEffect } from 'react'
// import { useNavigate, useSearchParams } from 'react-router-dom'
// import { StoreContext } from '../../context/StoreContext';

// const Verify = () => {
//     const [searchParams, setSearchParams]=useSearchParams();
//     const success=searchParams.get("success")
//     const orderId=searchParams.get("orderId")

//     //to check
//     // console.log(success, orderId);

//     const {url}=useContext(StoreContext);
//     const navigate=useNavigate()

//     const verifyPayment= async() =>{
//         const response= await axios.post(url+"/api/order/verify", {success, orderId});
//         if(response.data.success){
//             navigate("/myorders");
//         }
//         else{
//             navigate("/")
//         }
//     }

//     useEffect(()=>{
//         verifyPayment()
//     },[])
//   return (
//     <div className='verify'>
//         <div className="spinner"></div>
//     </div>
//   )
// }

// export default Verify