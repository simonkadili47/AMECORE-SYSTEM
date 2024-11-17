import React from 'react'
import Dashboard from '../components/Dashboard/Dashboard'
import { IoIosArrowForward } from "react-icons/io";
import Button from '../components/buttons/Button';

const AddPayroll = () => {
  return (
    <Dashboard>
      {/* Main content starts here */}
      <div className="flex flex-col justify-start items-start p-4 h-full">
        <h1 className="text-xl font-semibold mt-10">Add Employee</h1>
      </div>
      <div className='flex ml-3 mb-4'>
        <h2>Dashboard</h2>
        <IoIosArrowForward className='mt-1 ml-1' />
        <h2>Payroll</h2>
        <IoIosArrowForward className='mt-1 ml-1' />
        <h2>Add Payroll</h2>
      </div>

      <form className="grid grid-cols-2 justify-center gap-4 p-4 mx-auto w-3/5 bg-gray-100 shadow-lg rounded-lg">
        <div className='w-2/3 ml-24'>
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
        <div className='w-2/3'>
          <label className="block text-zinc-700 text-md font-bold text-left" htmlFor="salary">
            Salary
          </label>
          <input
            type="text"
            id="salary"
            className="w-full px-2 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter his/her salary"
          />
        </div>
        <div className='w-2/3 ml-24'>
          <label className="block text-zinc-700 text-md font-bold text-left" htmlFor="bonus">
            Bonus
          </label>
          <input
            type="text"
            id="bonus"
            className="w-full px-2 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter his/her bonus"
          />
        </div>
        <div className='w-2/3 '>
          <label className="block text-zinc-700 text-md font-bold text-left" htmlFor="month">
            Month
          </label>
          <input
            type="text"
            id="month"
            className="w-full px-2 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Month of salary"
          />
        </div>
        <div className='w-2/3 ml-24'>
          <label className="block text-zinc-700 text-md font-bold text-left" htmlFor="year">
            Year
          </label>
          <input
            type="text"
            id="year"
            className="w-full px-2 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Year of salary"
          />
        </div>

        <div className="col-span-2 flex justify-center mt-4">
        <Button
          intent="primary"
          size="md"
          className="w-auto" 
          type="submit"
        >
          Add Payroll
        </Button>
      </div>
      </form>
     
      
    </Dashboard>
  )
}

export default AddPayroll;
