import React from 'react';
import Dashboard from '../components/Dashboard/Dashboard';
import { IoIosArrowForward } from "react-icons/io";
import Button from '../components/buttons/Button';

import { Link } from 'react-router-dom';

const ListEmployee = () => {
  // Sample employee data
  const employees = [
    { fullname: 'John Doe', position: 'Software Engineer', NIN: '191991999887', age: '24', cv: '', status: 'Employed', date: '20-10-2024' },
    { fullname: 'Jane Smith', position: 'Project Manager', NIN: '191991999888', age: '29', cv: '', status: 'Employed', date: '15-09-2024' },
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

      <div className="overflow-x-auto p-6 w-full">
        <table className="w-full bg-white border border-gray-200 rounded-xl">
          <thead className='p-6'> 
            <tr className="bg-gray-100 p-6 border-b border-gray-200">
              <th className="p-8 py-3 border text-gray-600 font-medium">FULL NAME</th>
              <th className="pr-6 py-3 border text-gray-600 font-medium ">POSITION</th>
              <th className="pr-20 py-3 border text-gray-600 font-medium">NIN</th>
              <th className="pr-2 py-3 border text-gray-600 font-medium">AGE</th>
              <th className="pr-4 py-3 border text-gray-600 font-medium">CURRICULUM VITAE</th>
              <th className="pr-8  py-3 border text-gray-600 font-medium">STATUS</th>
              <th className="pr-2 py-3 border text-gray-600 font-medium w-32">DATE</th>
              <th className="px-6 py-3 border text-gray-600 font-medium">ACTION</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.fullname} className="border-b text-md border-gray-200">
                <td className="px-6 py-2 border">{employee.fullname}</td>
                <td className="px-6 py-2 border">{employee.position}</td>
                <td className="pr-6 border">{employee.NIN}</td>
                <td className="px-6 py-2 border">{employee.age}</td>
                <td className="pr-6 border">{employee.cv ? employee.cv : 'N/A'}</td>
                <td className="px-6 py-2 border">{employee.status}</td>
                <td className="pr-6 py-2 border">{employee.date}</td>
                
                <td className="px-6 py-2 border">
                  {/* Action Icons */}
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

export default ListEmployee;
