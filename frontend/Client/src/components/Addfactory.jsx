import React, { useState } from 'react';

export const Addfactory = () => {
  const [formData, setFormData] = useState({
    Category: '',
    Total_adjuster_busy_hours: '',
    Time_span: '',
    Total_running_hours: '',
    No_of_adjusters: '',
    No_of_machines: ''
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/info/addfactoryinfo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('authToken') // Assuming you stored the authToken in localStorage
        },
        body: JSON.stringify(formData)
      });

      const responseData = await response.json();
      if (response.ok) {
        setSuccessMessage('Factory information added successfully.');
        setErrors({});
      } else {
        setSuccessMessage('');
        setErrors(responseData.errors || {});
      }
    } catch (error) {
      setSuccessMessage('');
      setErrors({ server: 'An error occurred.' });
    }
  };

  return (
    <>
     <div className="container mx-auto px-4 py-8">
      <div className="max-w-md mx-auto bg-gray-500 rounded-lg shadow-lg overflow-hidden">
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-6">Add Factory Simulation Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
              <label className="block mb-2">Machine Type</label>
              <select
                name="Category"
                value={formData.Category}
                onChange={handleChange}
                className={`input-field ${errors.Category ? 'input-error' : ''}`}
              >
                <option value="">Select machine type</option>
                <option value="Latte">Latte</option>
                <option value="Turing">Turing</option>
                <option value="Drilling">Drilling</option>
                <option value="Soldering">Soldering</option>
              </select>
              {errors.Category && <p className="error-text">{errors.Category.msg}</p>}
            </div>
            <div>
              <label className="block mb-2">Total Adjuster Busy Hours</label>
              <input
                type="number"
                name="Total_adjuster_busy_hours"
                value={formData.Total_adjuster_busy_hours}
                onChange={handleChange}
                className={`input-field ${errors.Total_adjuster_busy_hours ? 'input-error' : ''}`}
              />
              {errors.Total_adjuster_busy_hours && <p className="error-text">{errors.Total_adjuster_busy_hours.msg}</p>}
            </div>
            <div>
            <label className="block mb-2">Time Span</label>
            <input
                type="number"
                name="Time_span"
                value={formData.Time_span}
                onChange={handleChange}
                className={`input-field ${errors.Time_span ? 'input-error' : ''}`}
                />
                {errors.Time_span && <p className="error-text">{errors.Time_span.msg}</p>}
            </div>

            <div>
            <label className="block mb-2">Total Running Hours</label>
            <input
            type="number"
            name="Total_running_hours"
            value={formData.Total_running_hours}
            onChange={handleChange}
            className={`input-field ${errors.Total_running_hours ? 'input-error' : ''}`}
            />
            {errors.Total_running_hours && <p className="error-text">{errors.Total_running_hours.msg}</p>}
           </div>

           <div>
            <label className="block mb-2">No. of Adjusters</label>
            <input
            type="number"
            name="No_of_adjusters"
            value={formData.No_of_adjusters}
            onChange={handleChange}
            className={`input-field ${errors.No_of_adjusters ? 'input-error' : ''}`}
            />
            {errors.No_of_adjusters && <p className="error-text">{errors.No_of_adjusters.msg}</p>}
            </div>

            <div>
            <label className="block mb-2">No. of Machines</label>
            <input
            type="number"
            name="No_of_machines"
            value={formData.No_of_machines}
            onChange={handleChange}
            className={`input-field ${errors.No_of_machines ? 'input-error' : ''}`}
            />
            {errors.No_of_machines && <p className="error-text">{errors.No_of_machines.msg}</p>}
            </div>

          </div>
          <button type="button" onClick={handleSubmit} className="mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Submit
           </button>

          {successMessage && <p className="text-green-500 mt-4">{successMessage}</p>}
          {errors.server && <p className="error-text mt-4">{errors.server}</p>}
        </div>
      </div>
    </div>
    </>
  );
};

