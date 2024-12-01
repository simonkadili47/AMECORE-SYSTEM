import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import Button from '../components/buttons/Button';
import { FaRegFilePdf, FaTrash, FaRegEdit } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Dashboard from '../components/Dashboard/Dashboard';

const ListProject = () => {
    const project = [
        { projectname: 'mobile app', projectdescription: 'a project for campany', duration: '1 year',  status: 'on going' },
      ];
    
      return (
        <Dashboard>
          <div className="flex flex-col justify-start items-start p-4 h-full">
            <h1 className="text-2xl font-semibold mt-10">Purchase List</h1>
          </div>
          <div className="flex ml-3 mb-1">
            <h2>Dashboard</h2>
            <IoIosArrowForward className="mt-1 ml-1" />
            <h2>Purchase</h2>
          </div>
    
          <div className="flex justify-end w-full p-3 space-x-4">
            <Button intent="primary" size="sm" className="w-20 flex items-center justify-center" type="submit">
              <span className="flex items-center space-x-2">
                <FaRegFilePdf />
                <span>Print</span>
              </span>
            </Button>
            <Link to="/add-project">
              <Button intent="primary" size="sm" className="w-32 flex items-center justify-center" type="button">
                Add Project
              </Button>
            </Link>
          </div>
    
          <div className="overflow-x-auto p-4">
            <table className="min-w-full bg-white border border-gray-200 rounded-xl">
              <thead>
                <tr className="bg-white border-b border-gray-200">
                  <th className="pr-6 py-4 border text-gray-600 font-medium w-28">PROJECT NAME</th>
                  <th className="px-4 py-4 border text-gray-600 font-medium w-14">PROJECT DESCRIPTION</th>
                  <th className="px-4 py-4 border text-gray-600 font-medium w-32">DURATION</th>
                  <th className="px-4 py-4 border text-gray-600 font-medium w-24">STATUS</th>
                  <th className="px-4 py-4 border text-gray-600 font-medium w-24">ACTION</th>
                </tr>
              </thead>
              <tbody>
                {project.map((projectList) => (
                  <tr key={projectList.fullname} className="border-b text-md border-gray-200">
                    <td className="px-4 py-2 border">{projectList.projectname}</td>
                    <td className="px-4 py-2 border">{projectList.projectdescription}</td>
                    <td className="px-4 py-2 border">{projectList.duration}</td>
                    <td className="px-4 py-2 border">{projectList.status}</td>
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
    

export default ListProject