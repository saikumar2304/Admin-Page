// src/components/Sidebar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaTachometerAlt, FaUsers, FaCar, FaDollarSign, FaCogs, FaUserShield } from 'react-icons/fa';
import './Sidebar.css';

const Sidebar = ({ isOpen }) => (
  <aside className={`sidebar-container ${isOpen ? 'open' : 'closed'}`}>
    <NavLink to="/" className="sidebar-item" activeClassName="active">
      <FaTachometerAlt className="sidebar-icon" /> Dashboard
    </NavLink>
    <NavLink to="/users" className="sidebar-item" activeClassName="active">
      <FaUsers className="sidebar-icon" /> Users
    </NavLink>
    <NavLink to="/drivers" className="sidebar-item" activeClassName="active">
      <FaCar className="sidebar-icon" /> Drivers
    </NavLink>
    <NavLink to="/subscriptions" className="sidebar-item" activeClassName="active">
      <FaDollarSign className="sidebar-icon" /> Subscriptions
    </NavLink>
    <NavLink to="/dispatch" className="sidebar-item" activeClassName="active">
      <FaCogs className="sidebar-icon" /> Dispatch
    </NavLink>
    <NavLink to="/admin" className="sidebar-item" activeClassName="active">
      <FaUserShield className="sidebar-icon" /> Admin
    </NavLink>
  </aside>
);

export default Sidebar;
