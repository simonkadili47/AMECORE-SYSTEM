import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TbSmartHome } from "react-icons/tb";
import { FaUser } from "react-icons/fa";
import { MdOutlinePayments } from "react-icons/md";
import { IoDocumentOutline } from "react-icons/io5";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { LiaFileContractSolid } from "react-icons/lia";
import { FaCaretDown, FaCaretUp } from 'react-icons/fa'; 

const Sidebar = () => {

  const [showInvoicesDropdown, setShowInvoicesDropdown] = useState(false);
  const toggleDropdown = () => {
    setShowInvoicesDropdown(prev => !prev);
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="fixed inset-y-0 left-0 w-56 bg-white text-black z-10 pt-12 border-2 border-gray-300"> 
        <div className="p-4">
          <h2 className="text-xl mr-10 font-bold">AMECORE</h2>
          <h3 className='mt-8 flex items-center'>
            <Link to="/dashboard" className="flex items-center ml-3 hover:bg-red-500 hover:rounded-md p-2 transition-colors">
              <TbSmartHome className='text-2xl' />
              <span>DASHBOARD</span>
            </Link> 
          </h3>
          <nav className='mr-4'>
            <ul className='mt-4'> 
              <li className="mb-2 flex items-center">
                <Link to="/employee" className="flex items-center hover:bg-red-500 hover:rounded-md p-2 transition-colors">
                  <FaUser className="text-xl ml-3" />
                  <span className="ml-1">Employee</span>
                </Link>
              </li>
              <li className="mb-2 flex items-center">
                <Link to="/payroll" className="flex items-center hover:bg-red-500 hover:rounded-md p-2 transition-colors">
                  <MdOutlinePayments className='text-2xl ml-3' />
                  <span className="ml-1">Payroll</span>
                </Link>
              </li>
              <li className="mb-2 flex items-center">
                <div className="flex flex-col">
                  <button
                    onClick={toggleDropdown}
                    className="flex items-center hover:bg-red-500 hover:rounded-md p-2 transition-colors"
                  >
                    <IoDocumentOutline className='text-2xl ml-3' />
                    <span className="ml-1">Invoices</span>
                    {showInvoicesDropdown ? (
                      <FaCaretUp className="ml-2 text-xl" /> 
                    ) : (
                      <FaCaretDown className="ml-2 text-xl" /> 
                    )}
                  </button>
                  {showInvoicesDropdown && (
                    <ul className="ml-10 mt-2">
                      <li className="mb-1">
                        <Link to="/invoices/purchases" className="block p-2 hover:bg-red-500 hover:rounded-md transition-colors">
                          Purchases
                        </Link>
                      </li>
                      <li className="mb-1">
                        <Link to="/invoices/sales" className="block p-2 hover:bg-red-500 hover:rounded-md transition-colors">
                          Sales
                        </Link>
                      </li>
                    </ul>
                  )}
                </div>
              </li>
              <li className="mb-2 flex items-center">
                <Link to="/office-expenses" className="flex items-center hover:bg-red-500 hover:rounded-md p-2 transition-colors">
                  <FaMoneyBillTransfer className='text-2xl ml-3' />
                  <span className="ml-1">Office Expenses</span>
                </Link>
              </li>
              <li className="mb-2 flex items-center">
                <Link to="/contracts" className="flex items-center hover:bg-red-500 hover:rounded-md p-2 transition-colors">
                  <LiaFileContractSolid className='text-2xl ml-3' />
                  <span className="ml-1">Contracts</span>
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
