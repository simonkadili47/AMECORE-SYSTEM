import React from "react";
import Dashboard from "../components/Dashboard/Dashboard";
import { IoIosArrowForward } from "react-icons/io";
import Button from "../components/buttons/Button";
import { FaRegFilePdf } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";

const ListInvoice = () => {
  const listinvoice = [
    {
      invoicename: "Sales invoice",
      invoicenumber:"123435",
      amount: "1,500,000",
      bonus: "500,000",
      date: "12-10-2024",
      status: "pending",
    },
  ];

  return (
    <Dashboard>
      <div className="flex flex-col justify-start items-start p-4 h-full">
        <h1 className="text-2xl font-semibold mt-10">Invoice List</h1>
      </div>
      <div className="flex ml-3 mb-1">
        <h2>Dashboard</h2>
        <IoIosArrowForward className="mt-1 ml-1" />
        <h2>Invoices</h2>
        <IoIosArrowForward className="mt-1 ml-1" />
        <h2>List Invoices</h2>
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
        <Link to="/add-invoice">
          <Button
            intent="primary"
            size="sm"
            className="w-36 flex items-center justify-center"
            type="button"
          >
            Add Invoice
          </Button>
        </Link>
      </div>

      <div className="overflow-x-auto p-4">
        <table className="min-w-full bg-white border border-gray-200 rounded-xl">
          <thead>
            <tr className="bg-white border-b border-gray-200">
              <th className="px-4 py-2 border text-gray-600 font-medium"> INVOICE NAME</th>
              <th className="px-4 py-2 border text-gray-600 font-medium"> INVOICE NUMBER</th>
              <th className="px-4 py-2 border text-gray-600 font-medium"> AMOUNT (Tzs)</th>
              <th className="px-4 py-2 border text-gray-600 font-medium">BONUS (TZs){" "}</th>
              <th className="px-4 py-2 border text-gray-600 font-medium w-32">DUE DATE</th>
              <th className="px-4 py-2 border text-gray-600 font-medium">STATUS</th>
              <th className="px-4 py-2 border text-gray-600 font-medium">ACTION</th>
            </tr>
          </thead>
          <tbody>
            {listinvoice.map((invoiceList) => (
              <tr
                key={invoiceList.fullname}
                className="border-b text-md border-gray-200"
              >
                <td className="px-4 py-2 border">{invoiceList.invoicename}</td>
                <td className="px-4 py-2 border">{invoiceList.invoicenumber}</td>
                <td className="px-4 py-2 border">{invoiceList.amount}</td>
                <td className="px-4 py-2 border">{invoiceList.bonus}</td>
                <td className="px-4 py-2 border">{invoiceList.date}</td>
                <td className="px-4 py-2 border">{invoiceList.status}</td>
                <td className="px-4 py-2 flex space-x-4 ml-4 border">
                  <span className="flex items-center text-customblue hover:text-blue-700 cursor-pointer">
                    <FaRegEdit className="mr-1" />
                    Edit
                  </span>
                  <span className="flex items-center text-red-700 cursor-pointer">
                    <FaTrash className="mr-1" />
                    Delete
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Dashboard>
  );
};

export default ListInvoice;
