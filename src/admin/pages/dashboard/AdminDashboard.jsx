import React, { useEffect, useState } from "react";
import "./AdminDashboard.css";
import { getAllUsers } from "../../../services/UserService";

const Dashboard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await getAllUsers();
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  return (
    <div className="dashboard">
      {/* Page Title */}
      <h1 className="dashboard-title">Dashboard Overview</h1>

      {/* Stats Cards */}
      <div className="stats-grid">
        <div className="stat-card">
          <h3>📅 Appointments</h3>
          <p className="stat-number">24</p>
          <span className="stat-label">Today</span>
        </div>

        <div className="stat-card">
          <h3>💳 Total Sales</h3>
          <p className="stat-number">₹18,450</p>
          <span className="stat-label">This Month</span>
        </div>

        <div className="stat-card">
          <h3>🛒 Products</h3>
          <p className="stat-number">128</p>
          <span className="stat-label">In Stock</span>
        </div>

        <div className="stat-card">
          <h3>👥 Customers</h3>
          <p className="stat-number">{users.length}</p>
          <span className="stat-label">Total</span>
        </div>
      </div>

      {/* Recent Section */}
      <div className="dashboard-sections">
        <div className="dashboard-box">
          <h2>Recent Appointments</h2>
          <ul>
            <li>💇 John – Haircut – 10:00 AM</li>
            <li>💆 Priya – Facial – 11:30 AM</li>
            <li>💅 Anjali – Manicure – 01:00 PM</li>
          </ul>
        </div>

        <div className="dashboard-box">
          <h2>Recent Orders</h2>
          <ul>
            <li>🧴 Shampoo – ₹850</li>
            <li>🧴 Hair Serum – ₹1,200</li>
            <li>🧴 Face Cream – ₹950</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
