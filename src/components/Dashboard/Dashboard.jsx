import React from 'react';
import Header from '../Header';
import Sidebar from '../Sidebar';
import Cards from '../Cards';

const Dashboard = ({ children }) => {
  return (
    <div className="flex min-h-screen w-full">
      <Sidebar />
      <div className="ml-32 flex-1 flex flex-col">
        <Header />
        
        
        <div className="flex-1 bg-customgray  p-4 m-0"> 
          {!children && (
            <div className="pt-6">
              <Cards />
            </div>
          )}

          {children && (
            <main>
              {children}
            </main>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
