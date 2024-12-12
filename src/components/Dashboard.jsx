// src/components/Dashboard.jsx
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, BarChart, Bar, Legend } from 'recharts';
import './Dashboard.css';

const Dashboard = () => {
  const userMetrics = [
    { title: 'Total Users', value: '5,000', change: '+8%' },
    { title: 'New Users Today', value: '120', change: '+5%' },
    { title: 'New Users This Week', value: '600', change: '+3%' },
    { title: 'New Users This Month', value: '2,400', change: '+4%' },
  ];

  const driverMetrics = [
    { title: 'Total Drivers', value: '2,000', change: '+2%' },
    { title: 'Drivers Online', value: '450', change: '+1%' },
    { title: 'Pending Documents', value: '15', change: '-2%' },
    { title: 'Driver Ratings', value: '4.7', change: '+0.2%' },
  ];

  const revenueMetrics = [
    { title: 'Total Revenue', value: '$120,000', change: '+7%' },
    { title: 'Revenue from Rides', value: '$80,000', change: '+6%' },
    { title: 'Revenue from Subscriptions', value: '$25,000', change: '+3%' },
  ];

  const subscriptionMetrics = [
    { title: 'Total Subscriptions', value: '1,200', change: '+4%' },
    { title: 'Active Subscriptions', value: '900', change: '+3%' },
    { title: 'Expired Subscriptions', value: '300', change: '-1%' },
  ];

  const rideMetrics = [
    { title: 'Total Rides', value: '8,500', change: '+5%' },
    { title: 'Rides Today', value: '200', change: '+2%' },
    { title: 'Ongoing Rides', value: '50', change: '+1%' },
    { title: 'Cancelled Rides', value: '30', change: '-0.5%' },
  ];

  const lineChartData = [
    { name: 'Week 1', users: 120, revenue: 10000, rides: 200 },
    { name: 'Week 2', users: 140, revenue: 12000, rides: 250 },
    { name: 'Week 3', users: 130, revenue: 11000, rides: 230 },
    { name: 'Week 4', users: 150, revenue: 15000, rides: 300 },
  ];

  return (
    <div className="dashboard-container">

      {/* User Metrics Section */}
      <div className="section">
        <h3 className="section-title">Users</h3>
        <div className="metrics">
          {userMetrics.map((metric, index) => (
            <div className="metric-card" key={index}>
              <h4>{metric.title}</h4>
              <p>{metric.value}</p>
              <span className={`metric-change ${metric.change.includes('-') ? 'red' : 'green'}`}>{metric.change}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Driver Metrics Section */}
      <div className="section">
        <h3 className="section-title">Drivers</h3>
        <div className="metrics">
          {driverMetrics.map((metric, index) => (
            <div className="metric-card" key={index}>
              <h4>{metric.title}</h4>
              <p>{metric.value}</p>
              <span className={`metric-change ${metric.change.includes('-') ? 'red' : 'green'}`}>{metric.change}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Revenue Metrics Section */}
      <div className="section">
        <h3 className="section-title">Revenue</h3>
        <div className="metrics">
          {revenueMetrics.map((metric, index) => (
            <div className="metric-card" key={index}>
              <h4>{metric.title}</h4>
              <p>{metric.value}</p>
              <span className={`metric-change ${metric.change.includes('-') ? 'red' : 'green'}`}>{metric.change}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Subscription Metrics Section */}
      <div className="section">
        <h3 className="section-title">Subscriptions</h3>
        <div className="metrics">
          {subscriptionMetrics.map((metric, index) => (
            <div className="metric-card" key={index}>
              <h4>{metric.title}</h4>
              <p>{metric.value}</p>
              <span className={`metric-change ${metric.change.includes('-') ? 'red' : 'green'}`}>{metric.change}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Ride Metrics Section */}
      <div className="section">
        <h3 className="section-title">Rides</h3>
        <div className="metrics">
          {rideMetrics.map((metric, index) => (
            <div className="metric-card" key={index}>
              <h4>{metric.title}</h4>
              <p>{metric.value}</p>
              <span className={`metric-change ${metric.change.includes('-') ? 'red' : 'green'}`}>{metric.change}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Line Chart for User and Revenue Trends */}
      <div className="charts">
        <div className="chart-card">
          <h4>User Growth Over Time</h4>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={lineChartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="users" stroke="#bfa8df" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-card">
          <h4>Revenue Over Time</h4>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={lineChartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="revenue" fill="#a084c1" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-card">
          <h4>Ride Distribution</h4>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={[
                  { name: 'Bike', value: 120 },
                  { name: 'Car', value: 300 },
                  { name: 'Auto', value: 200 },
                ]}
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#8884d8"
                label
              >
                <Cell fill="#a084c1" />
                <Cell fill="#c5a3e0" />
                <Cell fill="#d3b9e6" />
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
