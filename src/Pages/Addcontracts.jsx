import React from 'react'
import Dashboard from '../components/Dashboard/Dashboard'
import { IoIosArrowForward } from "react-icons/io";
import Button from '../components/buttons/Button';

const Addcontracts = () => {
    return (
        <Dashboard>
          {/* Main content starts here */}
          <div className="flex flex-col justify-start items-start p-4 h-full">
            <h1 className="text-xl font-semibold mt-10">Add Contract</h1>
          </div>
          <div className='flex ml-3 mb-4'>
            <h2>Dashboard</h2>
            <IoIosArrowForward className='mt-1 ml-1' />
            <h2>Contracts</h2>
            <IoIosArrowForward className='mt-1 ml-1' />
            <h2>Add Contract</h2>
          </div>

          <form className="grid grid-cols-2 justify-center gap-6 p-4 mx-auto w-3/5 bg-white shadow-lg rounded-lg">
            <div className='w-2/3 ml-28 mt-2'>
              <label className="block text-zinc-700 text-md font-bold text-left" htmlFor="customername">
               Customer Name
              </label>
              <input
                type="text"
                id="customer_name"
                className="w-full px-2 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter customer name"
              />
            </div>
            <div className='w-2/3 mt-2'>
              <label className="block text-zinc-700 text-md font-bold text-left" htmlFor="startdate">
              Start date
              </label>
              <input
                type="date"
                id="start_date"
                className="w-full px-2 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter start date"
              />
            </div>
            <div className='w-2/3 ml-28'>
              <label className="block text-zinc-700 text-md font-bold text-left" htmlFor="enddate">
              Ende date
              </label>
              <input
                type="date"
                id="end_date"
                className="w-full px-2 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter end date"
              />
            </div>
            <div className='w-2/3 '>
              <label className="block text-zinc-700 text-md font-bold text-left" htmlFor="item">
              Item
              </label>
              <input
                type="text"
                id="item"
                className="w-full px-2 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Item"
              />
            </div>
            <div className="col-span-2 flex justify-center mt-4">
            <Button
              intent="primary"
              size="md"
              className="w-auto" 
              type="submit"
            >
              Add contract
            </Button>
          </div>
          </form>
          
          
        </Dashboard>
      )
    }

export default Addcontracts