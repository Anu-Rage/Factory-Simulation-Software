import React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export const Customcard = ({ factoryInfo, onDelete }) => {
    const handleDelete = async (id) => {
        try {
          const authToken = localStorage.getItem('authToken');
          const response = await fetch(`http://localhost:8000/api/info/deletefactoryinfo/${id}`, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
              'auth-token': authToken
            }
          });
          const data = await response.json(); // Parse response JSON
          console.log(data); // Log the response from the server
          // Assuming you want to update the UI after deletion, you can trigger a re-fetch of factory info or update the state accordingly
        } catch (error) {
          console.error('Error:', error);
          // Handle error scenarios, e.g., show an error message to the user
        }
      };

  return (
    <div className="bg-gray-100 rounded-lg p-4 shadow-md mb-4">
      {/* Display _id at the top if it exists */}
      {factoryInfo._id && <p className="text-sm text-gray-500 mb-2">ID: {factoryInfo._id}</p>}
      <h3 className="text-xl font-bold">{factoryInfo.Category}</h3>
      <p>Total Adjuster Busy Hours: {factoryInfo.Total_adjuster_busy_hours}</p>
      <p>Time Span: {factoryInfo.Time_span}</p>
      <p>Total Running Hours: {factoryInfo.Total_running_hours}</p>
      <p>No. of Machines: {factoryInfo.No_of_machines}</p>
      <p>No. of Adjusters: {factoryInfo.No_of_adjusters}</p>
      <p>Avg Adjuster Utilization: {factoryInfo.Avg_adjuster_utilization}</p>
      <p>MTTF: {factoryInfo.Mttf}</p>
      <p>Avg Machine Utilization: {factoryInfo.Avg_machine_utilization}</p>
      <p>Optimum No. of Adjusters: {factoryInfo.optimum_no_of_adjusters}</p>

      {/* Delete and Update buttons */}
      <div className="flex justify-end mt-4">
        <Link to={`/Updateinfo/${factoryInfo._id}`}>
        <button className="mr-2 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md">
          Update
        </button>
        </Link>
        <button onClick={() => handleDelete(factoryInfo._id)} className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md">
          Delete
        </button>
      </div>
    </div>
  );
};


