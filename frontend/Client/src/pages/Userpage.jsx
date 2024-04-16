import React from 'react'
import { Newnavbar } from '../components/Newnavbar'
import { useState,useEffect } from 'react';

export const Userpage = () => {
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/auth/getUser', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'auth-token': localStorage.getItem('authToken')
          }
        });
        
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        
        const userData = await response.json();
        setUserData(userData);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
        <Newnavbar />
        <h1>User Profile</h1>
        {userData ? (
        <div>
          <p>Name: {userData.name}</p>
          <p>Email: {userData.email}</p>
          {/* Add more fields as needed */}
        </div>
      ) : (
        <p>No user data available</p>
      )}
    </>
  )
}

