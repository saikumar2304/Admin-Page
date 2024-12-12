// src/App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import './App.css';

const App = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router>
      <div className="app-container">
        <Header toggleSidebar={toggleSidebar} />
        <div className={`content-container ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
          <Sidebar isOpen={isSidebarOpen} />
          <div className="main-container">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              {/* Add other routes here as needed */}
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
