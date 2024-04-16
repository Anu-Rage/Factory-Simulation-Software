import React from 'react';
import { Link } from 'react-router-dom';

export const Front = () => {
    return (
    <>
    <div className="bg-gradient-to-r from-blue-200 to-blue-500 h-screen flex justify-center items-center z-0">
    <div className="max-w-full mx-20 flex flex-col lg:flex-row lg:items-center justify-center px-4 mt-[20px]">
      {/* Left side with photo */}
      <div className="lg:w-2/5 lg:mr-8 mb-6 lg:mb-0">
    <h1 className="text-6xl font-extrabold mb-4">Factory Simulation System Software</h1>
    <p className="text-lg mb-6">
    Our Factory Simulation System Software is designed to revolutionize the way you manage and optimize manufacturing processes. Say goodbye to manual guesswork and hello to data-driven decision-making. With our software, you get
    </p>
    <ul className="list-disc pl-6">
      <li>One stop solution for your all your simulation</li>
      <li>All your simulations are secured</li>
      <li>Simple to use interface</li>
      <li>Secure data management to protect sensitive information</li>
    </ul>
    <div className="mt-8">
        <h2 className="text-xl font-semibold mb-2">Connect with me:</h2>
        <ul className="flex space-x-4">
          <li>
            <a href="https://github.com/Anu-Rage/Factory-Simulation-Software" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-700">GitHub</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/anurag-patel-094541219/" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-700">LinkedIn</a>
          </li>
          {/* Add more links as needed */}
        </ul>
      </div>
  </div>
{/* Right side with buttons */}
<div className="lg:w-3/5 mx-auto">
  <div className="flex justify-center"> {/* Center content */}
    <div className="text-center">
      <h2 className="text-3xl font-bold mb-4">Welcome!</h2>
      <p className="text-lg mb-6">Whether you're a small-scale manufacturer or a large industrial plant, our software is your all-in-one solution for streamlining operations, reducing costs, and maximizing productivity. Experience the power of simulation today!.</p>
      <div className="space-x-4 inline-flex"> {/* Align buttons horizontally */}
        <Link to="/Login">
          <button className="bg-blue-500 text-white py-3 px-6 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Login</button>
        </Link>
        <Link to="/Register">
          <button className="bg-green-500 text-white py-3 px-6 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600">Register</button>
        </Link>
      </div>
    </div>
  </div>
</div>
    </div>
    </div>
    </>
  );
};

