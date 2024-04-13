import React from "react";
import { Navbar} from "../components/Navbar";
import { Customcard } from "../components/Customcard";
import { useState, useEffect } from 'react';

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
  }, []);

  return (
    <>
    <Navbar />
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Factory Information</h2>
      {factoryInfos.map((factoryInfo) => (
        <Customcard key={factoryInfo._id} factoryInfo={factoryInfo} />
      ))}
    </div>
    </>
  );
}
