import React from 'react';
import Header from '../Header';
import Sidebar from '../Sidebar';
import Cards from '../Cards';

const Dashboard = ({ children }) => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="ml-36 flex-1 flex flex-col">
        <Header />
        
        
        <div className="flex-1 p-4 mt-4 ml-4"> 
          {!children && (
            <div className="pt-2">
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
