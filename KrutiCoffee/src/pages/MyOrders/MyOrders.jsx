import React, { useContext, useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import { StoreContext } from '../../context/StoreContext';
import { motion } from 'framer-motion';

const MyOrders = () => {
    const { url, token } = useContext(StoreContext);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    /**
     * Logic to fetch orders from the backend.
     * Includes authentication headers and state handling.
     */
    const fetchOrders = useCallback(async () => {
        setLoading(true);
        try {
            const response = await axios.post(
                `${url}/api/order/userorders`, 
                {}, 
                { headers: { token } }
            );
            if (response.data.success) {
                setData(response.data.data);
            }
        } catch (error) {
            console.error("Error fetching orders:", error);
        } finally {
            setLoading(false);
        }
    }, [url, token]);

    useEffect(() => {
        if (token) {
            fetchOrders();
        }
    }, [token, fetchOrders]);

    return (
        <div className="min-h-screen bg-[#1a0f0b] py-24 px-6 lg:px-24 selection:bg-[#4c2b23] selection:text-white">
            {/* Background Texture & Blur */}
            <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-0" 
                 style={{ backgroundImage: `url('https://www.transparenttextures.com/patterns/asfalt-dark.png')` }} />
            
            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Header Section */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-16"
                >
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-[1px] bg-[#4c2b23]" />
                        <span className="font-sans text-[10px] tracking-[0.8em] uppercase text-[#b49e94] opacity-60">Account</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold text-white leading-none tracking-tighter">
                        MY <span className="italic font-light text-[#b49e94]">JOURNEY.</span>
                    </h1>
                </motion.div>

                {/* Orders List */}
                <div className="space-y-6">
                    {loading ? (
                        <div className="py-20 text-center font-serif italic text-[#b49e94] opacity-40 animate-pulse">
                            Recalling your selections...
                        </div>
                    ) : data.length === 0 ? (
                        <div className="py-20 border border-dashed border-white/10 rounded-3xl text-center">
                            <p className="font-sans text-[#b49e94] opacity-50 uppercase tracking-widest text-xs">No orders found yet</p>
                        </div>
                    ) : (
                        data.map((order, index) => (
                            <motion.div 
                                key={order._id}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="group bg-white/[0.02] hover:bg-white/[0.04] backdrop-blur-md border border-white/5 rounded-3xl p-8 flex flex-col md:flex-row items-center gap-8 transition-all duration-500"
                            >
                                {/* Coffee Icon/Graphic */}
                                <div className="w-16 h-16 bg-[#221512] rounded-full flex items-center justify-center border border-[#4c2b23]">
                                    <img src="https://kruticoffee.com/cdn/shop/files/Processing_icon.png" className="w-10 invert opacity-40" alt="Order Icon" />
                                </div>

                                {/* Order Items Summary */}
                                <div className="flex-1 text-center md:text-left">
                                    <p className="text-white font-medium mb-1">
                                        {order.items.map((item, i) => (
                                            <span key={i}>
                                                {item.name} x {item.quantity}{i === order.items.length - 1 ? "" : ", "}
                                            </span>
                                        ))}
                                    </p>
                                    <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-2">
                                        <span className="text-[10px] font-sans uppercase tracking-widest text-[#b49e94] opacity-50">₹{order.amount}.00</span>
                                        <span className="text-[10px] font-sans uppercase tracking-widest text-[#b49e94] opacity-50">Items: {order.items.length}</span>
                                    </div>
                                </div>

                                {/* Order Status */}
                                <div className="flex flex-col items-center md:items-end gap-4">
                                    <div className="flex items-center gap-2">
                                        <div className={`w-2 h-2 rounded-full ${order.status === "Food Processing" ? "bg-amber-500" : "bg-[#4c2b23]"}`} />
                                        <p className="text-xs font-sans uppercase tracking-widest text-white">{order.status}</p>
                                    </div>
                                    <button 
                                        onClick={fetchOrders}
                                        className="px-6 py-2 border border-[#4c2b23] hover:bg-[#4c2b23] text-white text-[10px] uppercase tracking-widest rounded-full transition-all duration-300"
                                    >
                                        Track Order
                                    </button>
                                </div>
                            </motion.div>
                        ))
                    )}
                </div>
            </div>

            {/* Tribal Art Watermark */}
            <div className="fixed bottom-0 right-0 opacity-[0.02] pointer-events-none p-10 select-none">
                <img src="https://kruticoffee.com/cdn/shop/files/Artboard_1_400x.png" className="w-[30vw] rotate-12" alt="Tribal Art" />
            </div>
        </div>
    );
};

export default MyOrders;