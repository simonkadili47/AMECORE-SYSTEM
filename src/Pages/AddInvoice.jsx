import React, { useState } from 'react';
import Dashboard from '../components/Dashboard/Dashboard';
import { IoIosArrowForward } from "react-icons/io";
import DatePicker from "react-datepicker"; 
import "react-datepicker/dist/react-datepicker.css";
import Button from '../components/buttons/Button';

const AddInvoice = () => {
  const [date, setDate] = useState(null);

  const handleDateChange = (date) => {
    setDate(date); 
  };

  return (
    <Dashboard>
      {/* Main content starts here */}
      <div className="flex flex-col justify-start items-start p-4 h-full">
        <h1 className="text-2xl font-semibold mt-10">Add Invoice</h1>
      </div>
      <div className="flex ml-3 mb-4">
        <h2>Dashboard</h2>
        <IoIosArrowForward className="mt-1 ml-1" />
        <h2>Invoices</h2>
        <IoIosArrowForward className="mt-1 ml-1" />
        <h2>Add Invoice</h2>
      </div>

      {/* Add Invoice Form Starts Here */}
      <form className="grid grid-cols-2 justify-center gap-4 p-4 mx-auto w-3/5 bg-white shadow-lg rounded-lg"> 
        <div className="w-2/3 ml-20">
          <label className="block text-zinc-700 text-md font-bold text-left" htmlFor="invoice_name">
            Invoice Name
          </label>
          <input
            type="text"
            id="invoice_name"
            className="w-full px-2 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter invoice name"
          />
        </div>
        

        <div className="w-2/3">
          <label className="block text-zinc-700 text-md font-bold text-left" htmlFor="invoice_number">
            Invoice Number
          </label>
          <input
            type="number"
            id="invoice_number"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Number of invoice"
          />
        </div>

        <div className="w-2/3 ml-20">
          <label className="block text-zinc-700 text-md font-bold text-left" htmlFor="amount">
            Amount
          </label>
          <input
            type="number"
            id="amount"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter amount"
          />
        </div>
        <div className="w-2/3 ">
          <label className="block text-zinc-700 text-md font-bold text-left" htmlFor="bonus">
           Bonus
          </label>
          <input
            type="text"
            id="bonus"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter bonus"
          />
        </div>

        <div className="w-2/3 ml-20">
          <label className="block text-zinc-700 text-md font-bold text-left" htmlFor="due_date">
            Due Date
          </label>
          <DatePicker
            selected={date}
            onChange={handleDateChange}
            dateFormat="dd-MM-yyyy"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholderText="DD-MM-YYYY"
          />
        </div>

       
        <div className="w-2/3">
          <label className="block text-zinc-700 text-md font-bold text-left" htmlFor="status">
           Status
          </label>
          <input
            type="text"
            id="status"
            className="w-full px-2 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter status"
          />
        </div>


        <div className="col-span-2 flex justify-center mt-4">
        <Button
          intent="primary"
          size="md"
          className="w-auto"
          type="submit"
        >
          Add Invoice
        </Button>
      </div>
      </form>

      
    </Dashboard>
  );
};

export default AddInvoice;
