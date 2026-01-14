import React from "react";
import { useNavigate } from "react-router-dom";
import UserNavbar from "../../../user/components/navbar/UserNavbar";
import "../../../user/pages/login/UserLogin.css";   // ✅ Correct CSS path

const AdminLogin = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* ✅ SAME NAVBAR AS USER */}
      <UserNavbar />

      <div className="login-wrapper">
        <div className="login-card">

          {/* LEFT PANEL */}
          <div className="login-left">
            <h2>Admin Login</h2>
            <p>Administrator access only.</p>

            <input type="email" placeholder="Admin Email" />
            <input type="password" placeholder="Password" />

            <button className="login-btn">Login</button>
          </div>

          {/* RIGHT PANEL */}
          <div className="login-right">
            <img
              src="https://cdn-icons-png.flaticon.com/512/942/942748.png"
              alt="admin"
            />

            <button
              className="admin-btn"
              onClick={() => navigate("/user/login")}
            >
              Back to User Login
            </button>
          </div>

        </div>
      </div>
    </>
  );
};

export default AdminLogin;
