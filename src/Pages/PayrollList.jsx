import React from 'react';
import Dashboard from '../components/Dashboard/Dashboard';
import { IoIosArrowForward } from "react-icons/io";
import Button from '../components/buttons/Button';
import { FaRegFilePdf, FaTrash, FaRegEdit } from "react-icons/fa";
import { Link } from 'react-router-dom';

const PayrollList = () => {
  // Sample payroll data
  const payroll = [
    { fullname: 'John Doe', sallary: '1,500,000', bonus: '100,000', month: 'January', year: '2024' },
  ];

  return (
    <Dashboard>
      <div className="flex flex-col justify-start items-start p-4 h-full">
        <h1 className="text-2xl font-semibold mt-10">Payroll List</h1>
      </div>
      <div className="flex ml-3 mb-1">
        <h2>Dashboard</h2>
        <IoIosArrowForward className="mt-1 ml-1" />
        <h2>Payroll</h2>
      </div>

      <div className="flex justify-end w-full p-3 space-x-4">
        <Button intent="primary" size="sm" className="w-20 flex items-center justify-center" type="submit">
          <span className="flex items-center space-x-2">
            <FaRegFilePdf />
            <span>Print</span>
          </span>
        </Button>
        <Link to="/add-payroll">
          <Button intent="primary" size="sm" className="w-32 flex items-center justify-center" type="button">
            Add Payroll
          </Button>
        </Link>
      </div>

      <div className="overflow-x-auto p-4 ">
        <table className="min-w-full bg-white border border-gray-200 rounded-xl">
          <thead>
            <tr className="bg-white border-b border-gray-200">
              <th className="pr-6 py-4 border text-gray-600 font-medium w-32">FULL NAME</th>
              <th className="px-4 py-4 border text-gray-600 font-medium w-32">SALARY (Tzs)</th>
              <th className="px-4 py-4 border text-gray-600 font-medium w-32">BONUS (Tzs)</th>
              <th className="px-4 py-4 border text-gray-600 font-medium w-28">MONTH</th>
              <th className="px-4 py-4 border text-gray-600 font-medium w-28">YEAR</th>
              <th className="px-4 py-4 border text-gray-600 font-medium w-32">ACTION</th>
            </tr>
          </thead>
          <tbody>
            {payroll.map((payrollList) => (
              <tr key={payrollList.fullname} className="border-b text-md border-gray-200">
                <td className="px-4 py-2 border">{payrollList.fullname}</td>
                <td className="px-4 py-2 border">{payrollList.sallary}</td>
                <td className="px-4 py-2 border">{payrollList.bonus}</td>
                <td className="px-4 py-2 border">{payrollList.month}</td>
                <td className="px-4 py-2 border">{payrollList.year}</td>
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

export default PayrollList;
