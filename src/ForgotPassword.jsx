import React from 'react';
import { Link } from 'react-router-dom';
import LOGO from './assets/logo.png';
import Button from './components/buttons/Button';

const ForgotPassword = () => {
  return (
    <div className="min-h-screen flex items-start font-poppins justify-start bg-white"> 
      <div className="w-full max-w-md mt-4"> 
        <div className="flex justify-center">
          <img src={LOGO} alt="Logo" className="h-16" />
        </div>

        <h2 className="text-lg mt-2 text-left">
          <Link to="/login" className="text-blue-600 underline hover:text-blue-800">
            Go back to Sign in
          </Link>
        </h2>

        <h2 className="text-3xl font-bold text-black text-left mt-4">
          Forgot Password!
        </h2>
        <h2 className='text-md text-black text-left mt-4'>Enter your phone number to receive a verification code.</h2>

        <div className="bg-gray-100 p-6 rounded-lg shadow-md mt-4"> 
          <form>
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

            <div className="flex items-center justify-between mb-4">
              <Button
                intent="primary"
                size="md"
                className="w-full" 
                type="submit"
              >
                Send verification code
              </Button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
