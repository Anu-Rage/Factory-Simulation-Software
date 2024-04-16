import React, { useEffect, useState } from 'react';

export const Addfactory = () => {
  const [formData, setFormData] = useState({
    Category: '',
    Total_adjuster_busy_hours: '',
    Time_span: '',
    Total_running_hours: '',
    No_of_adjusters: '',
    No_of_machines: ''
  });

  const [revData,setrevData] = useState({
    Avg_adjuster_utilization:'',
    Mttf:'',
    Avg_machine_utilization:'',
    optimum_no_of_adjusters:''
  })

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');
  const [display1,setDisplayValue1] =useState(false);
  const [display2,setDisplayValue2] =useState(false);
  const [display3,setDisplayValue3] =useState(false);
  const [display4,setDisplayValue4] =useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const datadisplay = (x)=>{
    switch(x){
    case '1':
        setDisplayValue1(true);
        console.log(display1);
        break;
    case '2':
        setDisplayValue2(true);
        console.log(display2);
        break;
      case '3':
        setDisplayValue3(true);
        console.log(display3);
        break;
      case '4':
        setDisplayValue4(true);
        console.log(display4);
        break;
    }
  }

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
        const data = {Avg_adjuster_utilization:responseData.Avg_adjuster_utilization,
        Mttf:responseData.Mttf,
        Avg_machine_utilization:responseData.Avg_machine_utilization,
        optimum_no_of_adjusters:responseData.optimum_no_of_adjusters};
        setrevData(data);
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
          <button
  type="button"
  onClick={handleSubmit}
  className="mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline block mx-auto"
>Submit</button>

          {successMessage && <p className="text-green-500 mt-4">{successMessage}</p>}
          {errors.server && <p className="error-text mt-4">{errors.server}</p>}
        </div>
      </div>
    </div>
    <div className="flex justify-center mt-8">
      <button onClick={() =>datadisplay('1')} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4 focus:outline-none focus:shadow-outline">
        Avg_adjuster_utilization
      </button>
      <button onClick={() =>datadisplay('2')} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-4 focus:outline-none focus:shadow-outline">
        Avg_machine_utilization
      </button>
      <button onClick={() =>datadisplay('3')} className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded mr-4 focus:outline-none focus:shadow-outline">
        MTTF
      </button>
      <button onClick={() =>datadisplay('4')} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        Optimum_no_of_adjusters
      </button>
    </div>
    <div className="flex justify-center mt-8">
    <ul>
        {display1 && <li><div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-4" role="alert">
        <strong className="font-bold">Avg_adjuster_utilization: {revData.Avg_adjuster_utilization}</strong>
        </div>
</li>}
        {display2 && <li><div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-4" role="alert">
        <strong className="font-bold">Avg_machine_utilization: {revData.Avg_machine_utilization}</strong>
        </div>
</li>}
        {display3 && <li><div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-4" role="alert">
        <strong className="font-bold">  MTTF: {revData.Mttf}</strong>
        </div>
</li>}
        {display4 && <li><div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-4" role="alert">
        <strong className="font-bold">Optimum_no_of_adjusters: {revData.optimum_no_of_adjusters}</strong>
        </div>
</li>}
    </ul>
    </div>

    </>
  );
};

