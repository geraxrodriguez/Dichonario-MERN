import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


const MainLayout = () => {
  return (
    <div className="h-screen bg-indigo-700 text-center flex flex-col">
        < Navbar />
        < Outlet />
        < Footer />
    </div>
  )
}

export default MainLayout
