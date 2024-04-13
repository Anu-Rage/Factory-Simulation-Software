import React from 'react';
import { Link } from 'react-router-dom';

export const Front = () => {
    return (
    <>
    <div className="max-w-4xl mx-auto flex flex-col lg:flex-row lg:items-center justify-center py-12 px-4 mt-36">
      {/* Left side with photo */}
      <div className="lg:w-2/5 lg:mr-8 mb-6 lg:mb-0">
        <img
          src="https://via.placeholder.com/600"
          alt="Placeholder"
          className="rounded-lg shadow-lg w-full"
        />
      </div>
      {/* Right side with buttons */}
      <div className="lg:w-3/5 mx-20">
        <h2 className="text-3xl font-bold mb-4">Welcome!</h2>
        <p className="text-lg mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <div className="flex justify-center lg:justify-start space-x-4">
        <Link to="/Login">
          <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Login</button>
        </Link>
        <Link to="/Register">
          <button className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600">Register</button>
        </Link>
        </div>
      </div>
    </div>
    </>
  );
};

