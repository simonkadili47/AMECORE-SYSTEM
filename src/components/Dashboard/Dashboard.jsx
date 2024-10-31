import React from 'react';
import Header from '../Header'; 
import Sidebar from '../Sidebar'; 

const Dashboard = ({ children }) => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="ml-56 flex-1"> 
        <Header />
        <main className="p-4">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
