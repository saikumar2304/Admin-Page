// src/components/Header.jsx
import React, { useState } from 'react';
import { FaBell, FaBars } from 'react-icons/fa'; // Font Awesome for icons
import './Header.css';

const Header = ({ toggleSidebar }) => {
  const [showLogout, setShowLogout] = useState(false); // State to toggle logout menu
  const userName = "InstaRide"; // Placeholder for user name
  const cityName = "Hyderabad"; // Placeholder for city name

  const handleProfileClick = () => {
    setShowLogout(!showLogout); // Toggle the logout menu
  };

  const handleLogout = () => {
    // Logic for logging out (e.g., clear session, redirect)
    alert("Logged out successfully!");
  };

  return (
    <header className="header-container">
      <FaBars className="hamburger-icon" onClick={toggleSidebar} />
      <h2 className="header-title">InstaRide Dashboard</h2>

      {/* User Info Section */}
      <div className="user-info">
        <FaBell className="notification-icon" />
        <div className="welcome-message" onClick={handleProfileClick}>
          <span>Welcome, {userName}</span>
          <small>{cityName}</small>
        </div>

        {/* Dropdown Menu for Logout */}
        {showLogout && (
          <div className="logout-dropdown">
            <button onClick={handleLogout}>Logout</button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
