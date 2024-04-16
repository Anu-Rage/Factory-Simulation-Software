import React from "react";
import { Customcard } from "../components/Customcard";
import { useState, useEffect } from 'react';
import { Newnavbar } from "../components/Newnavbar";

export const Displayinfo = () => {
  const [factoryInfos, setFactoryInfos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/info/fetchinfo', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'auth-token': localStorage.getItem('authToken'), // Assuming you store the token in localStorage
          },
        });
        if (response.ok) {
          const data = await response.json();
          setFactoryInfos(data);
        } else {
          console.error('Failed to fetch factory info');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, [factoryInfos]);

  return (
    <>
    <Newnavbar />
    <div className="container mx-auto mt-8 flex flex-col items-center">
    <h2 className="text-2xl font-bold mb-4 self-center">Factory Simulations </h2>
    </div>
    <div className="container mx-auto mt-8">
      {factoryInfos.map((factoryInfo) => (
        <Customcard key={factoryInfo._id} factoryInfo={factoryInfo} />
      ))}
    </div>
    </>
  );
}
