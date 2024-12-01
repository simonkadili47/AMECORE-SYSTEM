import React from 'react'
import Dashboard from '../components/Dashboard/Dashboard'
import { IoIosArrowForward } from "react-icons/io";
import Button from '../components/buttons/Button';

const AddProject = () => {
  return (
    <Dashboard>
      {/* Main content starts here */}
      <div className="flex flex-col justify-start items-start p-4 h-full">
        <h1 className="text-xl font-semibold mt-10">Add Project</h1>
      </div>
      <div className='flex ml-3 mb-4'>
        <h2>Dashboard</h2>
        <IoIosArrowForward className='mt-1 ml-1' />
        <h2>Projects</h2>
        <IoIosArrowForward className='mt-1 ml-1' />
        <h2>Add Project</h2>
      </div>

      <form className="grid grid-cols-2 justify-center gap-4 p-4 mx-auto w-3/5 bg-white shadow-lg rounded-lg">
        <div className='w-2/3 ml-24'>
          <label className="block text-zinc-700 text-md font-bold text-left" htmlFor="project_name">
            Project Name
          </label>
          <input
            type="text"
            id="project_name"
            className="w-full px-2 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter project name"
          />
        </div>
        <div className='w-2/3'>
          <label className="block text-zinc-700 text-md font-bold text-left" htmlFor="project_description">
            Project Description
          </label>
          <input
            type="text"
            id="project_description"
            className="w-full px-2 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter project description"
          />
        </div>
        <div className='w-2/3 ml-24'>
          <label className="block text-zinc-700 text-md font-bold text-left" htmlFor="duration">
            Duration
          </label>
          <input
            type="text"
            id="duration"
            className="w-full px-2 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter duration of the project"
          />
        </div>
        <div className='w-2/3 '>
          <label className="block text-zinc-700 text-md font-bold text-left" htmlFor="status">
            Status
          </label>
          <input
            type="text"
            id="status"
            className="w-full px-2 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Status of the project"
          />
        </div>

        <div className="col-span-2 flex justify-center mt-4">
        <Button
          intent="primary"
          size="md"
          className="w-auto" 
          type="submit"
        >
          Add project
        </Button>
      </div>
      </form>
     
      
    </Dashboard>
  )
}
export default AddProject