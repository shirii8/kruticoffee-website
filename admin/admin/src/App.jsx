import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import { Route, Routes, Navigate } from 'react-router-dom'
import Add from './pages/add/Add'
import List from './pages/list/List'
import Order from './pages/orders/Order'
import Login from './components/Login/Login' // You will need to create this
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  // Use localStorage to keep admin logged in on refresh
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const url = "http://localhost:4000";

  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
    } else {
      localStorage.removeItem("token");
    }
  }, [token]);

  return (
    <div className='bg-[#36211d] min-h-screen text-white'>
      <ToastContainer />
      {/* If no token, show ONLY Login. If token exists, show the Dashboard */}
      {token === "" ? (
        <Login setToken={setToken} url={url} />
      ) : (
        <>
          <Navbar setToken={setToken} /> {/* Pass setToken to Navbar for Logout */}
          <hr className="border-white/10" />
          <div className="app-content flex">
            <Sidebar />
            <div className="flex-1 p-8">
              <Routes>
                <Route path='/add' element={<Add url={url} token={token}/>} />
                <Route path='/list' element={<List url={url} token={token}/>} />
                <Route path='/orders' element={<Order url={url} token={token}/>} />
                {/* Redirect any weird paths to list */}
                <Route path='*' element={<Navigate to="/list" />} />
              </Routes>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default App;

    // <div className='bg-[#36211d]'>   HAS A BLOCK GRID BY DEFAULT SO MOUNTS THE COMPONENTS VERTICALLY
   // USE FLEX HORIZONTAL TO CORRECT IT
    //   <Navbar/>
    //   <hr />
    //   <div className="app-content">
    //     <Sidebar/>
    //     <Routes>
    //         <Route path='/add' element={<Add/>}/>
    //          <Route path='/list' element={<List/>}/>
    //           <Route path='/orders' element={<Order/>}/>
              

    //     </Routes>
    //   </div>
    // </div>


