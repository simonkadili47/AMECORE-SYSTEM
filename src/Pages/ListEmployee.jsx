import React from 'react';
import Dashboard from '../components/Dashboard/Dashboard';
import { IoIosArrowForward } from "react-icons/io";
import Button from '../components/buttons/Button';
import { FaRegFilePdf } from "react-icons/fa";
import { Link } from 'react-router-dom';

const ListEmployee = () => {
  // Sample employee data
  const employees = [
    { fullname: 'John Doe', position: 'Software Engineer', NIN: '191991999887', age: '24', Status: 'employed', date: '20-10-2024' },
  ];

  return (
    <Dashboard>
      <div className="flex flex-col justify-start items-start p-4 h-full">
        <h1 className="text-2xl font-semibold mt-10">List Employee</h1>
      </div>
      <div className="flex ml-3 mb-4">
        <h2>Dashboard</h2>
        <IoIosArrowForward className="mt-1 ml-1" />
        <h2>Employee</h2>
        <IoIosArrowForward className="mt-1 ml-1" />
        <h2>List Employee</h2>
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
        <Link to="/add-employee"> 
          <Button
            intent="primary"
            size="sm"
            className="w-36 flex items-center justify-center"
            type="button"
          >
            Add Employee
          </Button>
          </Link>
      </div>

      <div className="overflow-x-auto p-4">
        <table className="min-w-full bg-white border border-gray-200 rounded-xl">
          <thead>
            <tr className="bg-gray-100 border-b border-gray-200">
              <th className="px-4 py-2 text-gray-600 font-medium">Full Name</th>
              <th className="px-4 py-2 text-gray-600 font-medium">Position</th>
              <th className="px-4 py-2 text-gray-600 font-medium">NIN</th>
              <th className="px-4 py-2 text-gray-600 font-medium">Age</th>
              <th className="px-4 py-2 text-gray-600 font-medium">Status</th>
              <th className="px-4 py-2 text-gray-600 font-medium">Date</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.fullname} className="border-b text-md border-gray-200 hover:bg-gray-50">
                <td className="px-4 py-2">{employee.fullname}</td>
                <td className="px-4 py-2">{employee.position}</td>
                <td className="px-4 py-2">{employee.NIN}</td>
                <td className="px-4 py-2">{employee.age}</td>
                <td className="px-4 py-2">{employee.Status}</td>
                <td className="px-4 py-2">{employee.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Dashboard>
  );
};

export default ListEmployee;
