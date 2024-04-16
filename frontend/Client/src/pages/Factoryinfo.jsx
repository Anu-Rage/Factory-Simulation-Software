import React from "react";
import {Addfactory} from "../components/Addfactory.jsx"
import { Link } from 'react-router-dom';
import { Newnavbar } from "../components/Newnavbar.jsx";

export const Factoryinfo = () => {
  return (
    <>
        <Newnavbar />
        <Addfactory />
        <div className="flex justify-center mt-8">
        {/* Button to display all factory info */}
        <Link to="/Allinfo" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
        Display All Simulation Info
        </Link>
    </div>
    </>
  )
}
