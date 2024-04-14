import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

export const Register = () => {
  const [formData, setFormData] = useState({
    emailId: '',
    factoryName: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [error, setError] = useState('Email already in use !');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8000/api/auth/Signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
  
      if (response.ok) {
        const responseData = await response.json(); // Parse response JSON
        const authToken = responseData.authToken; // Extract authToken from response data
        // Registration successful, log authToken and navigate to login page
        console.log('Registration successful. AuthToken:', authToken);
        setRegistrationSuccess(true);
        
      } else {
        // Registration failed, handle errors
        const errorData = await response.json();
        setError(errorData.error || 'Registration failed');
        alert(error);
      }
    } catch (error) {
      console.error('Error:', error);
      alert(`{error}`);
    }
  };

  if (registrationSuccess) {
    alert("Registration Successful!!")
    return <Navigate to="/Login" />;
  }

  return (
    
    <div className="max-w-md mx-auto mt-[120px] p-6 bg-gray-100 shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4">Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="emailId" className="block text-gray-700 font-semibold mb-2">Email Id</label>
          <input
            type="text"
            id="emailId"
            name="emailId"
            value={formData.emailId}
            onChange={handleChange}
            placeholder="Enter your emailId"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="factoryName" className="block text-gray-700 font-semibold mb-2">Factory Name</label>
          <input
            type="text"
            id="factoryName"
            name="factoryName"
            value={formData.factoryName}
            onChange={handleChange}
            placeholder="Enter your factoryName"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Register</button>
      </form>
    </div>
  );
};

