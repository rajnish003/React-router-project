import React from 'react';

const Dashboard = () => {
  return (
    <section className="py-16 bg-gray-100" id="dashboard">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Dashboard</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* Metric Card 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
            <h3 className="text-xl font-semibold mb-4">Total Revenue</h3>
            <p className="text-2xl font-bold text-green-600">$12,345</p>
          </div>
          
          {/* Metric Card 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
            <h3 className="text-xl font-semibold mb-4">Active Users</h3>
            <p className="text-2xl font-bold text-blue-600">1,234</p>
          </div>
          
          {/* Metric Card 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
            <h3 className="text-xl font-semibold mb-4">Pending Orders</h3>
            <p className="text-2xl font-bold text-red-600">56</p>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Recent Activity</h3>
          <div className="h-64 bg-gray-200 flex items-center justify-center">
            <p className="text-gray-500">Chart Placeholder</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
