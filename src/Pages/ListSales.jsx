import React from 'react'
import Dashboard from '../components/Dashboard/Dashboard';
import { IoIosArrowForward } from "react-icons/io";
import Button from '../components/buttons/Button';
import { FaRegFilePdf, FaTrash, FaRegEdit } from "react-icons/fa";
import { Link } from 'react-router-dom';


const ListSales = () => {
    const sales = [
        { product: 'water', quantity: '4', amount: '100,000',  date: '10-07-2024' },
      ];
    
      return (
        <Dashboard>
          <div className="flex flex-col justify-start items-start p-4 h-full">
            <h1 className="text-2xl font-semibold mt-10">Sales List</h1>
          </div>
          <div className="flex ml-3 mb-1">
            <h2>Dashboard</h2>
            <IoIosArrowForward className="mt-1 ml-1" />
            <h2>Sales</h2>
          </div>
    
          <div className="flex justify-end w-full p-3 space-x-4">
            <Button intent="primary" size="sm" className="w-20 flex items-center justify-center" type="submit">
              <span className="flex items-center space-x-2">
                <FaRegFilePdf />
                <span>Print</span>
              </span>
            </Button>
            <Link to="/add-sales">
              <Button intent="primary" size="sm" className="w-32 flex items-center justify-center" type="button">
                Add sales
              </Button>
            </Link>
          </div>
    
          <div className="overflow-x-auto p-4">
            <table className="min-w-full bg-white border border-gray-200 rounded-xl">
              <thead>
                <tr className="bg-gray-100 border-b border-gray-200">
                  <th className="pr-6 py-4 border text-gray-600 font-medium w-28">PRODUCT</th>
                  <th className="px-4 py-4 border text-gray-600 font-medium w-14">QUANTITY</th>
                  <th className="px-4 py-4 border text-gray-600 font-medium w-32">AMOUNT</th>
                  <th className="px-4 py-4 border text-gray-600 font-medium w-24">DATE</th>
                  <th className="px-4 py-4 border text-gray-600 font-medium w-24">ACTION</th>
                </tr>
              </thead>
              <tbody>
                {sales.map((salesList) => (
                  <tr key={salesList.fullname} className="border-b text-md border-gray-200">
                    <td className="px-4 py-2 border">{salesList.product}</td>
                    <td className="px-4 py-2 border">{salesList.quantity}</td>
                    <td className="px-4 py-2 border">{salesList.amount}</td>
                    <td className="px-4 py-2 border">{salesList.date}</td>
                    <td className="px-6 py-2 border">
                      <div className="flex items-center space-x-4">
                        <button className="text-blue-500 hover:text-blue-700">
                          <FaRegEdit />
                        </button>
                        <button className="text-red-600 hover:text-red-800">
                          <FaTrash />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Dashboard>
      );
    };

export default ListSales