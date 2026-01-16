import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import UserNavbar from "../../../user/components/navbar/UserNavbar";
import "../../../user/pages/login/UserLogin.css";   // ✅ Correct CSS path
import { adminLogin } from "../../../services/LoginService";

const AdminLogin = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleAdminLogin = async () => {

    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    try {
      
      const res = await adminLogin({
        email: email.trim().toLowerCase(),
        password: password.trim(),
      })

      localStorage.setItem("adminId", res.data.userId);
      
      console.log("Admin Login Success:", res.data);

      alert("Admin login successfully...");
      navigate("/admin/admin-dashboard");

    } catch (error) {
      console.log("Admin Login Error:", error);
      alert("Invalid Admin Credentials!");
    }
  }; 

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

            <input 
              type="email" 
              placeholder="Admin Email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input 
              type="password" 
              placeholder="Password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button 
              className="login-btn"
              onClick={handleAdminLogin}
            >
              Login
            </button>
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
