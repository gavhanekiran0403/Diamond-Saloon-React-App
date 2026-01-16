import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { userLogin } from "../../../services/LoginService";
import "./UserLogin.css";

const UserLogin = () => {
  const navigate = useNavigate();
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const payload = { phone, password };
      const res = await userLogin(payload);

      localStorage.setItem("user", JSON.stringify(res.data));

      // ✅ Redirect to Home page after login
      navigate("/", { replace: true });

    } catch (err) {
      alert("Invalid credentials ❌");
    }
  };

  return (
    <>

      {/* ✅ LOGIN PAGE */}
      <div className="login-wrapper">
        <div className="login-card">

          {/* ✅ LEFT USER LOGIN */}
          <div className="login-left">
            <h2>User Login</h2>
            <p>Please login to continue</p>

            <input
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button className="login-btn" onClick={handleLogin}>
              Login
            </button>
          </div>

          {/* ✅ RIGHT ADMIN LOGIN */}
          <div className="login-right">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="admin"
            />

            <h3>Admin Access</h3>

            <button
              className="admin-btn"
              onClick={() => navigate("/admin/login")}
            >
              Admin Login
            </button>
          </div>

        </div>
      </div>
    </>
  );
};

export default UserLogin;
