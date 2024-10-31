import React from 'react'
import Dashboard from '../components/Dashboard/Dashboard';
import { IoIosArrowForward } from "react-icons/io";
import Button from '../components/buttons/Button';
import { FaRegFilePdf } from "react-icons/fa";
import { Link } from 'react-router-dom';

const PayrollList = () => {
  // Sample payroll data
  const payroll = [
    { fullname: 'John Doe', sallary: '1,500,000', month: 'January', year: '2024'},
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
        <Button
          intent="primary"
          size="sm"
          className="w-20 flex items-center justify-center"
          type="submit"
        >
          <span className="flex items-center space-x-2">
          <FaRegFilePdf />
            <span>Print</span>
         
          </span>
        </Button>
      </div>

      <div className="overflow-x-auto p-4">
        <table className="min-w-full bg-white border border-gray-200 rounded-xl">
          <thead>
            <tr className="bg-gray-100 border-b border-gray-200">
              <th className="px-4 py-2 text-gray-600 font-medium">Full Name</th>
              <th className="px-4 py-2 text-gray-600 font-medium">Sallary (Tzs)</th>
              <th className="px-4 py-2 text-gray-600 font-medium">Month</th>
              <th className="px-4 py-2 text-gray-600 font-medium">Year</th>
            </tr>
          </thead>
          <tbody>
            {payroll.map((payrollList) => (
              <tr key={payrollList.fullname} className="border-b text-md border-gray-200 hover:bg-gray-50">
                <td className="px-4 py-2">{payrollList.fullname}</td>
                <td className="px-4 py-2">{payrollList.sallary}</td>
                <td className="px-4 py-2">{payrollList.month}</td>
                <td className="px-4 py-2">{payrollList.year}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Dashboard>
  );
}


export default PayrollList