import React from 'react'
import { Link } from 'react-router-dom';
import flag from './assets/flag.png'

const Register = () => {
  return (
    <div className="min-h-screen flex items-center font-poppins justify-center bg-white">
      <div className="w-full max-w-md">

        <h2 className='text-xl font-bold text-black'>Create an Account</h2>
        <form className="px-4 mt-8">
          <div className="mb-4">
            <label className="block text-black text-md font-bold mb-2 text-left" htmlFor="full_name">
              Full Name
            </label>
            <input
              type="text"
              id="full_name"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your full name"
            />
          </div>

          <div className="mb-4">
            <label className="block text-black text-md font-bold mb-2 text-left" htmlFor="email">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-4">
            <label className="block text-black text-md font-bold mb-2 text-left" htmlFor="phone_number">
              Phone Number
            </label>
            <div className="flex items-center border rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500">
              <img src={flag} alt="Flag" className="w-8 h-5 mr-2" />
              <input
                type="number"
                id="phone_number"
                className="w-full focus:outline-none"
                placeholder="255"
              />
            </div>
          </div>

          <div className="mb-6 mt-6">
            <label className="block text-black text-md font-bold mb-2 text-left" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="*********"
            />
          </div>

          <div className="mb-6 mt-6">
            <label className="block text-black text-md font-bold mb-2 text-left" htmlFor="confirm_password">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirm_password"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="*********"
            />
          </div>

          <div className="flex items-center justify-between mb-4">
            <button
              type="submit"
              className="bg-customblue text-black font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline w-full"
            >
              Sign Up
            </button>
          </div>

          <div className="flex justify-center text-center mt-4">
            <p className="text-gray-700 text-sm sm:text-base inline">Do you have an account?</p>
            <Link to="/login" className="text-black font-bold text-sm sm:text-base hover:underline inline ml-1">
              Login
            </Link>
          </div>

        </form>
      </div>
    </div>
  )
}

export default Register;
