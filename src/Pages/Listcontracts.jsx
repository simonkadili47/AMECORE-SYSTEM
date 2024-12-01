import React from 'react'
import Dashboard from '../components/Dashboard/Dashboard';
import { IoIosArrowForward } from "react-icons/io";
import Button from '../components/buttons/Button';
import { FaRegFilePdf, FaTrash, FaRegEdit } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Listcontracts = () => {
    const contracts = [
        { customername: 'John Doe', startdate: '16-10-2024', enddate: '16-10-2025',  item: 'dcb' },
      ];
    
      return (
        <Dashboard>
          <div className="flex flex-col justify-start items-start p-4 h-full">
            <h1 className="text-2xl font-semibold mt-10">Contracts List</h1>
          </div>
          <div className="flex ml-3 mb-1">
            <h2>Dashboard</h2>
            <IoIosArrowForward className="mt-1 ml-1" />
            <h2>Contracts</h2>
          </div>
    
          <div className="flex justify-end w-full p-3 space-x-4">
            <Button intent="primary" size="sm" className="w-20 flex items-center justify-center" type="submit">
              <span className="flex items-center space-x-2">
                <FaRegFilePdf />
                <span>Print</span>
              </span>
            </Button>
            <Link to="/add-contracts">
              <Button intent="primary" size="sm" className="w-32 flex items-center justify-center" type="button">
                Add contract
              </Button>
            </Link>
          </div>
    
          <div className="overflow-x-auto p-4">
            <table className="min-w-full bg-white border border-gray-200 rounded-xl">
              <thead>
                <tr className="bg-white border-b border-gray-200">
                  <th className="pr-6 py-4 border text-gray-600 font-medium w-28">CUSTOMER NAME</th>
                  <th className="px-4 py-4 border text-gray-600 font-medium w-14">START DATE</th>
                  <th className="px-4 py-4 border text-gray-600 font-medium w-32">END DATE</th>
                  <th className="px-4 py-4 border text-gray-600 font-medium w-32">ITEM</th>
                  <th className="px-4 py-4 border text-gray-600 font-medium w-24">ACTION</th>
                </tr>
              </thead>
              <tbody>
                {contracts.map((contractsList) => (
                  <tr key={contractsList.fullname} className="border-b text-md border-gray-200">
                    <td className="px-4 py-2 border">{contractsList.customername}</td>
                    <td className="px-4 py-2 border">{contractsList.startdate}</td>
                    <td className="px-4 py-2 border">{contractsList.enddate}</td>
                    <td className="px-4 py-2 border">{contractsList.item}</td>
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


export default Listcontracts