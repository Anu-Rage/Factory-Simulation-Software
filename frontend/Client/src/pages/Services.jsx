import { Navbar } from "../components/Navbar";

import React from 'react'

export const Services = () => {
  return (
    <>
        <Navbar />
        <div className="bg-gradient-to-r from-blue-200 to-blue-500 h-screen flex justify-center items-center z-0">
        <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Welcome to Our Factory Simulation System Software</h1>
      <p className="text-lg text-gray-700 leading-relaxed">
        Our Factory Simulation System Software is engineered to transform the management and optimization of manufacturing processes, ushering in an era of data-driven decision-making. Gone are the days of relying on manual guesswork; instead, embrace a comprehensive solution that empowers you with precise insights. Our software offers a one-stop solution for all your simulation needs, ensuring that every aspect of your manufacturing operations is meticulously analyzed and optimized for maximum efficiency. Rest assured, all your simulations are safeguarded by state-of-the-art security measures, providing you with peace of mind regarding data integrity and confidentiality. Experience the ease of use with a simple and intuitive interface, allowing you to navigate through complex simulations effortlessly. Embrace secure data management practices that prioritize the protection of sensitive information, ensuring that your valuable data remains safe and confidential at all times.
      </p>
    </div>
        </div>
    </>
  )
}
