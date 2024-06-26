import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';

export const Newnavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [islogout,setislogout] =useState(false);

  const handleClick = ()=>{
    console.log('Logged out successfully!');
    localStorage.removeItem('authToken');
    console.log('authToken removed from local storage');
    setislogout(true);
  };

  if(islogout){
    return <Navigate to="/"/>
  }

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="text-white text-xl font-bold">FSSS</a>
          </div>
          {/* Hamburger menu for mobile */}
          <div className="flex lg:hidden">
            <button onClick={toggleNavbar} className="text-white focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          {/* Navigation links */}
          <div className="hidden lg:flex space-x-4">
            <Link to="/FactoryInfo" className="text-white hover:text-gray-300">Add factory Info</Link>
            <Link to="/Allinfo" className="text-white hover:text-gray-300">Display all Info</Link>
            <Link to="/" onClick={handleClick} className="text-white hover:text-gray-300">Logout</Link>
          </div>
        </div>
      </div>
      {/* Responsive Navbar */}
      {isOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link to="/FactoryInfo" className="block text-white hover:text-gray-300">Add factory Info</Link>
            <Link to="/Allinfo" className="block text-white hover:text-gray-300">Display all Info</Link>
            <Link to="/" onClick={handleClick} className="block text-white hover:text-gray-300">Logout</Link>
          </div>
        </div>
      )}
    </nav>
  );
};