import React, { useState } from 'react';
import Dashboard from '../components/Dashboard/Dashboard';
import { IoIosArrowForward } from "react-icons/io";
import DatePicker from "react-datepicker"; 
import "react-datepicker/dist/react-datepicker.css";
import { format } from 'date-fns'; 
import Button from '../components/buttons/Button';

const AddEmployee = () => {
  const [date, setDate] = useState(null); 

  const handleDateChange = (date) => {
    setDate(date); 
  };

  return (
    <Dashboard>
      {/* Main content starts here */}
      <div className="flex flex-col justify-start items-start p-4 h-full">
        <h1 className="text-xl font-semibold mt-10">Add Employee</h1>
      </div>
      <div className='flex ml-3 mb-4'>
        <h2>Dashboard</h2>
        <IoIosArrowForward className='mt-1 ml-1' />
        <h2>Employee</h2>
        <IoIosArrowForward className='mt-1 ml-1' />
        <h2>Add Employee</h2>
      </div>

      {/* Form with customGray background */}
      <form className="grid grid-cols-2 justify-center gap-4 p-4 mx-auto w-2/3 bg-gray-100 shadow-lg rounded-lg">
        <div className='w-3/4 ml-24'>
          <label className="block text-zinc-700 text-md font-bold text-left" htmlFor="full_name">
            Full Name
          </label>
          <input
            type="text"
            id="full_name"
            className="w-full px-2 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your full name"
          />
        </div>

        <div className='w-3/4 ml-4'>
          <label className="block text-zinc-700 text-md font-bold text-left" htmlFor="position">
            Position
          </label>
          <input
            type="text"
            id="position"
            className="w-full px-2 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter his/her position"
          />
        </div>

        <div className='w-3/4 ml-24'>
          <label className="block text-zinc-700 text-md font-bold text-left" htmlFor="national_identification">
            NIN
          </label>
          <input
            type="number"
            id="national_identification"
            className="w-full px-2 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter his/her NIN"
          />
        </div>

        <div className='w-3/4 ml-4'> 
          <label className="block text-zinc-700 text-md font-bold text-left" htmlFor="age">
            Age
          </label>
          <input
            type="number"
            id="age"
            className="w-full px-2 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter his/her age"
          />
        </div>

        <div className='w-3/4 ml-24'>
          <label className="block text-zinc-700 text-md font-bold text-left" htmlFor="curiculam-vitae">
            Curiculam Vitae
          </label>
          <input
            type="file"
            id="curiculam_vitae"
            className="w-full px-2 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Upload CV"
          />
        </div>

        <div className='w-3/4 ml-4'>
          <label className="block text-zinc-700 text-md font-bold text-left" htmlFor="status">
            Status
          </label>
          <input
            type="text"
            id="status"
            className="w-full px-2 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter his/her status"
          />
        </div>

        <div className=' w-3/4 ml-24'>
          <label className="block text-zinc-700 text-md font-bold text-left" htmlFor="date">
            Date
          </label>
          <DatePicker
            selected={date}
            onChange={handleDateChange} 
            dateFormat="dd-MM-yyyy" 
            className="w-full px-2 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholderText="DD-MM-YYYY" 
          />
        </div>
 
      
        <div className="col-span-2 flex justify-center mt-4">
          <Button
            intent="primary"
            size="md"
            className="w-40 bg-customblue text-white py-2 rounded-lg"
            type="submit"
          >
            Add Employee
          </Button>
        </div>
      </form>
    </Dashboard>
  );
};

export default AddEmployee;
