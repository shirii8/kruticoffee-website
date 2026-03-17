import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const Login = ({ setToken, url }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false); // UI feedback

  const onLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Debugging: Check if URL is correct in console
    console.log("Attempting login to:", `${url}/api/admin/login`);

    try {
      const response = await axios.post(`${url}/api/admin/login`, { email, password });
      
      if (response.data.success) {
        const receivedToken = response.data.token;
        
        // 1. Set state to update UI immediately
        setToken(receivedToken);
        
        // 2. Save to localStorage so login persists on refresh
        localStorage.setItem("token", receivedToken);
        
        toast.success("Welcome back, Admin");
      } else {
        toast.error(response.data.message || "Invalid Credentials");
      }
    } catch (error) {
      console.error("Login Error:", error);
      toast.error(error.response?.data?.message || "Server connection failed. Is your Backend running?");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#36211d]">
      <div className="bg-[#1a0f0b] p-10 rounded-2xl border border-white/10 shadow-2xl w-full max-w-md">
        <h2 className="text-2xl font-serif italic text-[#b49e94] mb-6 text-center">Kruti Coffee Admin</h2>
        
        <form onSubmit={onLogin} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label className="text-[10px] uppercase tracking-widest text-white/40 ml-2">Email Address</label>
            <input 
              onChange={(e) => setEmail(e.target.value)} 
              value={email} 
              type="email" 
              placeholder="admin@kruticoffee.com" 
              className="bg-white/5 border border-white/10 p-3 rounded-xl text-white focus:outline-none focus:border-[#b49e94] transition-colors" 
              required 
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-[10px] uppercase tracking-widest text-white/40 ml-2">Password</label>
            <input 
              onChange={(e) => setPassword(e.target.value)} 
              value={password} 
              type="password" 
              placeholder="••••••••" 
              className="bg-white/5 border border-white/10 p-3 rounded-xl text-white focus:outline-none focus:border-[#b49e94] transition-colors" 
              required 
            />
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className={`mt-4 bg-[#b49e94] text-[#1a0f0b] py-3 rounded-xl font-black uppercase tracking-widest transition-all hover:bg-white active:scale-95 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {loading ? "Verifying..." : "Login to Dashboard"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;