import React from 'react'
import Dashboard from '../components/Dashboard/Dashboard'
import { IoIosArrowForward } from "react-icons/io";
import Button from '../components/buttons/Button';

const AddPurchase = () => {
    return (
        <Dashboard>
          {/* Main content starts here */}
          <div className="flex flex-col justify-start items-start p-4 h-full">
            <h1 className="text-xl font-semibold mt-10">Add Purchase</h1>
          </div>
          <div className='flex ml-3 mb-4'>
            <h2>Dashboard</h2>
            <IoIosArrowForward className='mt-1 ml-1' />
            <h2>Invoices</h2>
            <IoIosArrowForward className='mt-1 ml-1' />
            <h2>Add Purchase</h2>
          </div>
    
          <form className="grid grid-cols-2 justify-center gap-6 p-4 mx-auto w-3/5 bg-gray-100 shadow-lg rounded-lg">
            <div className='w-2/3 ml-28'>
              <label className="block text-zinc-700 text-md font-bold text-left" htmlFor="items">
               Items
              </label>
              <input
                type="text"
                id="items"
                className="w-full px-2 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter items"
              />
            </div>
            <div className='w-2/3'>
              <label className="block text-zinc-700 text-md font-bold text-left" htmlFor="quantity">
              Quantity
              </label>
              <input
                type="number"
                id="quantity"
                className="w-full px-2 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enterquantity"
              />
            </div>
            <div className='w-2/3 ml-28'>
              <label className="block text-zinc-700 text-md font-bold text-left" htmlFor="amount">
               Amount
              </label>
              <input
                type="number"
                id="amount"
                className="w-full px-2 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter amount"
              />
            </div>
            <div className='w-2/3 '>
              <label className="block text-zinc-700 text-md font-bold text-left" htmlFor="date">
               Date
              </label>
              <input
                type="date"
                id="date"
                className="w-full px-2 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Date"
              />
            </div>
            
            <div className="col-span-2 flex justify-center mt-4">
            <Button
              intent="primary"
              size="md"
              className="w-auto" 
              type="submit"
            >
              Add Purchase
            </Button>
          </div>
          </form>
          
          
        </Dashboard>
      )
    }

export default AddPurchase