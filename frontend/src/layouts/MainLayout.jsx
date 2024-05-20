import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';


const MainLayout = () => {
  return (
    <div className="h-screen bg-indigo-700">
        < Navbar />
        < Outlet />
    </div>
  )
}

export default MainLayout
