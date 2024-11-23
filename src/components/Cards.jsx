import React from 'react';
import { FaUser, FaFileInvoiceDollar, FaMoneyBillWave, FaFileContract } from 'react-icons/fa';

const Cards = () => {
  const dashboardData = [
    {
      id: 1,
      title: 'Total Employees',
      value: 15,
      icon: <FaUser />, 
      bgColor: 'bg-white',
    },
    {
      id: 2,
      title: 'Total Invoice',
      value: '10',
      icon: <FaFileInvoiceDollar />,
      bgColor: 'bg-white',
    },
    {
      id: 3,
      title: 'Total Sales',
      value: 'TZs 300,000',
      icon: <FaMoneyBillWave />, 
      bgColor: 'bg-white',
    },
    {
      id: 4,
      title: 'Contracts',
      value: '4',
      icon: <FaFileContract />, 
      bgColor: 'bg-white',
    },
  ];

  return (
    <div className="p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {dashboardData.map((card) => (
          <div
            key={card.id}
            className={`flex items-center p-4 rounded-lg shadow-md text-black ${card.bgColor}`}
          >
            {/* Display the icon */}
            <div className="text-xl mb-8 mr-2">{card.icon}</div>
            <div>
              <h3 className="text-lg font-semibold">{card.title}</h3>
              <p className="text-2xl">{card.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
