import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const UserDashboard = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (!user) {
      navigate("/user/login");
    }
  }, [user, navigate]);   // ✅ FIXED HERE

  return (
    <div className="dashboard-container">
      <h1>Welcome {user?.fullName} 👋</h1>
      <p>What would you like to do today?</p>

      {/* your dashboard cards */}
    </div>
  );
};

export default UserDashboard;
