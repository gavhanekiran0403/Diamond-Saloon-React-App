import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../../services/RegisterService";
import UserNavbar from "../../components/navbar/UserNavbar";
import "../login/UserLogin.css";   // reuse same design

const UserRegister = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = async () => {
    try {
      await registerUser(formData);
      alert("✅ Registration successful! Please login.");
      navigate("/user/login");
    } catch (err) {
      alert("❌ Registration failed");
      console.error(err);
    }
  };

  return (
    <>
      {/* ✅ NAVBAR */}
      <UserNavbar />

      <div className="login-wrapper">
        <div className="login-card">

          {/* LEFT PANEL */}
          <div className="login-left">
            <h2>Create Account</h2>
            <p>Register to book appointments</p>

            <input
              name="fullName"
              placeholder="Full Name"
              onChange={handleChange}
            />

            <input
              name="phone"
              placeholder="Mobile Number"
              onChange={handleChange}
            />

            <input
              name="password"
              type="password"
              placeholder="Password"
              onChange={handleChange}
            />

            <button className="login-btn" onClick={handleRegister}>
              Register
            </button>
          </div>

          {/* RIGHT PANEL */}
          <div className="login-right">
            <h3>Already have an account?</h3>
            <button
              className="admin-btn"
              onClick={() => navigate("/user/login")}
            >
              Go to Login
            </button>
          </div>

        </div>
      </div>
    </>
  );
};

export default UserRegister;
