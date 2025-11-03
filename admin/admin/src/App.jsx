import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import { Route, Routes } from 'react-router-dom'
import Add from './pages/add/Add'
import List from './pages/list/List'
import Order from './pages/orders/Order'
import { ToastContainer } from 'react-toastify';


//when that components is clicked and path is added to the link like http://localhost:5173/add.
 //in console it adds an active classname to the selected path component

const App = () => {
  return (
    <div className='bg-[#36211d]'>
      <ToastContainer/>
      <Navbar/>
      <hr />
<div className="app-content flex">
  <Sidebar />
  <div className="flex-1">
    <Routes>
      <Route path='/add' element={<Add/>}/>
      <Route path='/list' element={<List/>}/>
      <Route path='/orders' element={<Order/>}/>
    </Routes>
  </div>
</div>
 </div>

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
  )
}

export default App

