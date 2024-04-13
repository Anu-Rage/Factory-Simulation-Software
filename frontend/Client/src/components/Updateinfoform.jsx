import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const Updateinfoform = () => {
  const { id } = useParams(); // Get the ID parameter from the URL
  const [formData, setFormData] = useState({
    Category: '',
    Total_adjuster_busy_hours: '',
    Time_span: '',
    Total_running_hours: '',
    No_of_machines: '',
    No_of_adjusters: '',
  });

  useEffect(() => {
    // Fetch the existing factory info based on the ID
    const fetchData = async () => {
      try {
        const authToken = localStorage.getItem('authToken');
        const response = await fetch(`http://localhost:8000/api/info/fetchinfo/${id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'auth-token': authToken,
          },
        });
        const data = await response.json();
        if (response.ok) {
          // Update the formData state with the fetched data
          setFormData(data);
        } else {
          // Handle error response
          console.error('Error fetching data:', data.error);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); // Call the fetch data function
  }, [id]); // Fetch data when the ID parameter changes

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleUpdate = async () => {
    try {
      const authToken = localStorage.getItem('authToken');
      const response = await fetch(`http://localhost:8000/api/info/updatefactoryinfo/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': authToken,
        },
        body: JSON.stringify(formData), // Send updated form data in the request body
      });
      const data = await response.json();
      if (response.ok) {
        console.log('Factory info updated successfully:', data.factoryinfo);
        // Optionally, you can redirect the user to another page or show a success message
      } else {
        // Handle error response
        console.error('Error updating factory info:', data.error);
      }
    } catch (error) {
      console.error('Error updating factory info:', error);
    }
  };

  return (
    <div>
      <h2>Update Factory Information</h2>
      <form>
        <label>Category:</label>
        <input
          type="text"
          name="Category"
          value={formData.Category}
          onChange={handleInputChange}
        />

        <label>Total_adjuster_busy_hours:</label>
        <input
          type="text"
          name="Total_adjuster_busy_hours"
          value={formData.Total_adjuster_busy_hours}
          onChange={handleInputChange}
        />

        <label>Time_span:</label>
        <input
          type="text"
          name="Time_span"
          value={formData.Time_span}
          onChange={handleInputChange}
        />

        <label>Total_running_hours:</label>
        <input
          type="text"
          name="Total_running_hours"
          value={formData.Total_running_hours}
          onChange={handleInputChange}
        />

        <label>No_of_machines:</label>
        <input
          type="text"
          name="No_of_machines"
          value={formData.No_of_machines}
          onChange={handleInputChange}
        />

        <label>No_of_adjusters:</label>
        <input
          type="text"
          name="No_of_adjusters"
          value={formData.No_of_adjusters}
          onChange={handleInputChange}
        />
        <button type="button" onClick={handleUpdate}>Update Factory Info</button>
      </form>
    </div>
  );
};

