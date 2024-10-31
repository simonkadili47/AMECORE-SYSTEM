import React from 'react';
import { Link } from 'react-router-dom';
import LOGO from './assets/logo.png';
import Button from './components/buttons/Button'

const Login = () => {
  return (
    <div className="min-h-screen flex items-start font-poppins justify-center bg-white"> 
      <div className="w-full max-w-md mt-4"> 
        <div className="flex justify-center">
          <img src={LOGO} alt="Logo" className="h-16" />
        </div>
        <h2 className='text-3xl font-bold text-black'>Welcome Back to Amecore!</h2>
        <h2 className='text-xl font-bold text-gray-600'>Login to your Account</h2>

        <div className="bg-gray-100 p-6 rounded-lg shadow-md mt-2"> 
          <form>
            <div className="mb-2">
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

            <div className="mb-2 mt-2">
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

            <div className="flex items-center justify-between mb-2 text-sm sm:text-sm">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember"
                  className="mr-2 leading-tight"
                />
                <label htmlFor="remember" className="text-gray-700">
                  Remember me 
                </label>
              </div>
              <div className="text-xs sm:text-sm">
                <a href="#" className="text-gray-700 hover:underline">
                  Forgot password?
                </a>
              </div>
            </div>

            <div className="flex items-center justify-between mb-4">
              <Button
                intent="primary"
                size="md"
                className="w-full" 
                type="submit"
              >
                Sign In
              </Button>
            </div>

            <div className="flex justify-center text-center mt-4">
              <p className="text-gray-700 text-sm sm:text-base inline">Don't have an account?</p>
              <Link to="/register" className="text-black font-bold text-sm sm:text-base hover:underline inline ml-1">
                Sign up
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
