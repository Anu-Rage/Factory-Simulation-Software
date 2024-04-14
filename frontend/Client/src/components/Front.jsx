import React from 'react';
import { Link } from 'react-router-dom';

export const Front = () => {
    return (
    <>
    <div className="max-w-full mx-20 flex flex-col lg:flex-row lg:items-center justify-center px-4 mt-[80px]">
      {/* Left side with photo */}
      <div className="lg:w-2/5 lg:mr-8 mb-6 lg:mb-0">
    <h1 className="text-6xl font-extrabold mb-4">Factory Simulation System Software</h1>
    <p className="text-lg mb-6">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </p>
    <ul className="list-disc pl-6">
      <li>One stop solution for your all your simulation</li>
      <li>All your simulations are secured</li>
      <li>Simple to use interface</li>
    </ul>
  </div>
      {/* Right side with buttons */}
      <div className="lg:w-3/5 mx-[140px]">
        <h2 className="text-3xl font-bold mb-4">Welcome!</h2>
        <p className="text-lg mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <div className="flex justify-center lg:justify-start space-x-4 mx-[175px]">
        <Link to="/Login">
          <button className="bg-blue-500 text-white py-3 px-6 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 ">Login</button>
        </Link>
        <Link to="/Register">
          <button className="bg-green-500 text-white py-3 px-6 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600">Register</button>
        </Link>
        </div>
      </div>
    </div>
    </>
  );
};

