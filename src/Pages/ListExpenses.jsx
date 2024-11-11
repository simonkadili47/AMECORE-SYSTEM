import React from 'react'
import Dashboard from '../components/Dashboard/Dashboard';
import { IoIosArrowForward } from "react-icons/io";
import Button from '../components/buttons/Button';
import { FaRegFilePdf, FaTrash, FaRegEdit } from "react-icons/fa";
import { Link } from 'react-router-dom';

const ListExpenses = () => {
    const Officeexpenses = [
        { id:'1',type: 'John Doe', amount: '1,500,000', date: '20-10-2020', desription: 'Vifaa'},
      ];
    
      return (
        <Dashboard>
          <div className="flex flex-col justify-start items-start p-4 h-full">
            <h1 className="text-2xl font-semibold mt-10">Office Expenses List</h1>
          </div>
          <div className="flex ml-3 mb-1">
            <h2>Dashboard</h2>
            <IoIosArrowForward className="mt-1 ml-1" />
            <h2>Office expenses</h2>
          </div>
    
          <div className="flex justify-end w-full p-3 space-x-4">
            <Button intent="primary" size="sm" className="w-20 flex items-center justify-center" type="submit">
              <span className="flex items-center space-x-2">
                <FaRegFilePdf />
                <span>Print</span>
              </span>
            </Button>
            <Link to="/add-expenses">
              <Button intent="primary" size="sm" className="w-32 flex items-center justify-center" type="button">
                Add expenses
              </Button>
            </Link>
          </div>
    
          <div className="overflow-x-auto p-4">
            <table className="min-w-full bg-white border border-gray-200 rounded-xl">
              <thead>
                <tr className="bg-gray-100 border-b border-gray-200">
                <th className="pr-6 py-4 border text-gray-600 font-medium w-32">No</th>
                  <th className="pr-6 py-4 border text-gray-600 font-medium w-32">TYPE</th>
                  <th className="px-4 py-4 border text-gray-600 font-medium w-32">AMOUNT</th>
                  <th className="px-4 py-4 border text-gray-600 font-medium w-32">DATE</th>
                  <th className="px-4 py-4 border text-gray-600 font-medium w-28">DESCRIPTION</th>
                  <th className="px-4 py-4 border text-gray-600 font-medium w-28">ACTION</th>
                </tr>
              </thead>
              <tbody>
                {Officeexpenses.map((expenseList) => (
                  <tr key={expenseList.fullname} className="border-b text-md border-gray-200">
                    <td className="px-4 py-2 border">{expenseList.id}</td>
                    <td className="px-4 py-2 border">{expenseList.type}</td>
                    <td className="px-4 py-2 border">{expenseList.amount}</td>
                    <td className="px-4 py-2 border">{expenseList.date}</td>
                    <td className="px-4 py-2 border">{expenseList.desription}</td>
                    <td className="px-6 py-2 border">
                      {/* Action Icons */}
                      <div className="flex items-center ml-6 space-x-4">
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

export default ListExpenses