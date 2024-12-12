import React from 'react';
import './MainContent.css';

const MainContent = ({ isSidebarOpen }) => (
  <main className={`main-container ${isSidebarOpen ? '' : 'closed'}`}>
    <h2>Welcome to the Admin Panel</h2>
    <p>This is your main content area. Customize it as needed.</p>
  </main>
);

export default MainContent;
