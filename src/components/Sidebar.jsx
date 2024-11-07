import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TbSmartHome } from "react-icons/tb";
import { FaUser } from "react-icons/fa";
import { MdOutlinePayments } from "react-icons/md";
import { IoDocumentOutline } from "react-icons/io5";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { LiaFileContractSolid } from "react-icons/lia";
import { FaCaretDown, FaCaretUp } from 'react-icons/fa'; 
import image from '../assets/logo.png'

const Sidebar = () => {
  const [showInvoicesDropdown, setShowInvoicesDropdown] = useState(false);
  const [showPurchasesDropdown, setshowPurchasesDropdown] = useState(false);
  
  const toggleInvoicesDropdown = () => {
    setShowInvoicesDropdown(prev => !prev);
  };


  const togglePurchasesDropdown = () => {
    setShowPurchasesDropdown(prev => !prev);
  };


  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="fixed inset-y-0 left-0 w-52 bg-white text-black z-10 pt-2 border-r-2 border-gray-200 overflow-y-auto h-full">
        <div className="p-2">
          <div className="flex justify-start ml-2 mb-4"> 
            <img 
              src={image} 
              alt="" 
              className="w-16 h-auto" 
              style={{ maxWidth: '100%', height: 'auto' }} 
            />
            <p className='mt-4 text-customblue'>AMECORE</p>
          </div>
          <h3 className='mt-1'>
            <Link to="/dashboard" className="flex items-center ml-3 hover:bg-customblue hover:text-white hover:rounded-md p-2 transition-colors">
              <TbSmartHome className='text-xl' />
              <span className="ml-2">Dashboard</span>
            </Link> 
          </h3>
          <nav className='mt-1'>
            <ul>
            <li className="mb-2">
                <Link to="/list-employee" className="flex items-center hover:bg-customblue hover:text-white hover:rounded-md p-2 transition-colors">
                  <FaUser  className='text-xl ml-3' />
                  <span className="ml-2">Employee</span>
                </Link>
              </li>
              <li className="mb-1">
                <Link to="/payroll-list" className="flex items-center hover:bg-customblue hover:text-white hover:rounded-md p-2 transition-colors">
                  <MdOutlinePayments className='text-xl ml-3' />
                  <span className="ml-2">Payroll</span>
                </Link>
              </li>
              <li className="mb-1">
                <div className="flex flex-col">
                  <button
                    onClick={toggleInvoicesDropdown}
                    className="flex items-center hover:bg-customblue hover:text-white hover:rounded-md p-2 transition-colors"
                  >
                    <IoDocumentOutline className='text-xl ml-3' />
                    <span className="ml-2">Invoices</span>
                    {showInvoicesDropdown ? (
                      <FaCaretUp className="ml-2 text-xl" /> 
                    ) : (
                      <FaCaretDown className="ml-2 text-xl" /> 
                    )}
                  </button>
                  {showInvoicesDropdown && (
                    <ul className="ml-10 mt-2">
                      <li className="mb-1">
                        <Link to="/list-invoice" className="block p-2 hover:bg-customblue hover:text-white hover:rounded-md transition-colors">
                          Invoice
                        </Link>
                        <Link to="/list-purchase" className="block p-2 hover:bg-customblue hover:text-white hover:rounded-md transition-colors">
                          Purchase
                        </Link>
                        <Link to="/list-sales" className="block p-2 hover:bg-customblue hover:text-white hover:rounded-md transition-colors">
                          Sales
                        </Link>
                      </li>
                    </ul>
                  )}
                </div>
              </li>

              <li className="mb-1">
                <div className="flex flex-col">
                  <button
                    onClick={togglePurchasesDropdown}
                    className="flex items-center hover:bg-customblue hover:text-white hover:rounded-md p-2 transition-colors"
                  >
                    <IoDocumentOutline className='text-2xl ml-3' />
                    <span className="ml-2">Purchases</span>
                    {showPurchasesDropdown ? (
                      <FaCaretUp className="ml-2 text-xl" /> 
                    ) : (
                      <FaCaretDown className="ml-2 text-xl" /> 
                    )}
                  </button>
                  {showPurchasesDropdown && (
                    <ul className="ml-10 mt-2">
                      <li className="mb-1">
                        <Link to="/add-purchase" className="block p-2 hover:bg-customblue hover:text-white hover:rounded-md transition-colors">
                          Add purchase
                        </Link>
                      </li>
                      <li className="mb-1">
                        <Link to="/list-purchase" className="block p-2 hover:bg-customblue hover:text-white hover:rounded-md transition-colors">
                          View purchase
                        </Link>
                      </li>
                    </ul>
                  )}
                </div>
              </li>
              <li className="mb-2">
                <Link to="/office-expenses" className="flex items-center hover:bg-customblue hover:text-white hover:rounded-md p-2 transition-colors">
                  <FaMoneyBillTransfer className='text-2xl ml-3' />
                  <span className="ml-2">Office Expenses</span>
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/contracts" className="flex items-center hover:bg-customblue hover:text-white hover:rounded-md p-2 transition-colors">
                  <LiaFileContractSolid className='text-2xl ml-3' />
                  <span className="ml-2">Contracts</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
