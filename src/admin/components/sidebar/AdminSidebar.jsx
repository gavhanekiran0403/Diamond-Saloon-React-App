import React from "react";
import "./AdminSidebar.css";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2>Diamond Saloon</h2>
      </div>

      <ul className="sidebar-menu">
        <li>
          <NavLink to="/admin/admin-dashboard">📊 Dashboard</NavLink>
        </li>

        <li>
          <NavLink to="/admin/appointments">📅 Appointments</NavLink>
        </li>

        <li>
          <NavLink to="/admin/services">💇 Services</NavLink>
        </li>

        <li>
          <NavLink to="/admin/service-packages">🎁 Service Packages</NavLink>
        </li>

        <li>
          <NavLink to="/admin/categories">🗂 Categories</NavLink>
        </li>

        <li>
          <NavLink to="/admin/products">🛒 Products</NavLink>
        </li>

        <li>
          <NavLink to="/admin/orders">🧾 Orders</NavLink>
        </li>

        <li>
          <NavLink to="/admin/staff">👨‍🔧 Staff</NavLink>
        </li>

        <li>
          <NavLink to="/admin/customers">👥 Customers</NavLink>
        </li>

        <li>
          <NavLink to="/admin/payments">💳 Payments</NavLink>
        </li>

        <li>
          <NavLink to="/admin/reports">📈 Reports</NavLink>
        </li>

        <li>
          <NavLink to="/admin/settings">⚙️ Settings</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
