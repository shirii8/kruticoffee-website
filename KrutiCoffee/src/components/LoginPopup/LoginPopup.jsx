import { useState } from "react"
import React from 'react'
import crossIcon from "../../assets/frontend_assets/cross_icon.png";

const LoginPopup = ({setShowLogin}) => {

      const [currState, setCurrState]=useState("Sign Up")
      


  return (
    <div className="fixed inset-0 z-50 bg-[#00000090]  flex justify-center items-center" style={{animation: "fadeIn 0.8s" }}>
  <form className="relative bg-[#221512] shadow-2xl border border-[#4c2b23] p-8 rounded-lg w-96 shadow-lg text-[#fff]">
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-2xl font-semibold">{currState}</h2>
      <img
        onClick={() => setShowLogin(false)}
        src={crossIcon}
        alt="Close"
        className="w-6 h-6 cursor-pointer"
      />
    </div>

    {/* login pupup inputs */}
    <div className="login-inputs">

        {currState==="Login"? <></>: <input className=" mb-1 rounded-2xl px-4 py-2" type="text" placeholder="Your Name" required />}
        <input className=" mb-1 rounded-2xl px-4 py-2" type="mail" placeholder="Your Mail" required/>
        <input className=" rounded-2xl px-4 py-2" type="password" placeholder="Password" required/>

    </div>
    <button className="mt-4 text-[18px] w-full border-[#e2cbc0] bg-[#b49e94] rounded-full 
    border px-4 py-2 flex justify-center">{currState==="Sign Up" ? "Create Account" : "Login"}</button>
    <div className="login-popup-condition mt-4 mb-4 flex flex-row gap-8 justify-center text-[14px]">
        <input type="checkbox"  required/>
        <p>By continuing, I agree to the terms and conditions</p>
    </div>

    {currState==="Login"?   
     <p>Create a new account? <span className="px-4 py-2 text-neutral-400" onClick={()=>setCurrState("Sign Up")}>Click here</span></p>: 
      <p>Already have an account? <span className="px-4 py-2 text-neutral-400" onClick={()=>setCurrState("Login")}>Login here</span></p>}
 
  
  </form>
</div>

  )
}

export default LoginPopup;