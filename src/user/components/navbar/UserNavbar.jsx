import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./UserNavbar.css";

const UserNavbar = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef(null);

  // ✅ Logout (Backend + Frontend)
  const logout = async () => {
    try {
      if (user?.userId) {
        await axios.post(
          `http://localhost:9292/auth/logout/${user.userId}`
        );
      }
    } catch (error) {
      console.error("Logout error:", error);
    } finally {
      localStorage.removeItem("user");
      navigate("/", { replace: true });
    }
  };

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpen(false);
    }, 200);
  };

  const go = (path) => {
    setOpen(false);
    navigate(path);
  };

  return (
    <header className="user-navbar">
      <div className="logo">💎 Diamond Saloon</div>
      <nav className="menu">
        {/* Home */}
        <Link to="/">Home</Link>

        {/* Appointments */}
        <Link to="/user/appointments">Appointments</Link>

        {/* Products */}
        <Link to="/user/products">Products</Link>

        {user ? (
          <div
            className="profile-wrapper"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button className="profile-btn">
              👤 {user.fullName} <span className="arrow">▾</span>
            </button>

            {open && (
              <div className="dropdown">
                <div onClick={() => go("/user/profile")}>
                  My Profile
                </div>

                <div onClick={() => go("/user/my-appointments")}>
                  My Appointments
                </div>

                <div onClick={() => go("/user/cart")}>
                  My Cart 🛒
                </div>

                {/* ✅ NEW OPTION */}
                <div onClick={() => go("/user/orders")}>
                  My Orders 🧾
                </div>

                <div
                  className="logout"
                  onClick={() => {
                    setOpen(false);
                    logout();
                  }}
                >
                  Logout
                </div>
              </div>
            )}
          </div>
        ) : (
          <Link to="/user/login">Login</Link>
        )}
      </nav>
    </header>
  );
};

export default UserNavbar;
