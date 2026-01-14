import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./UserNavbar.css";

const UserNavbar = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef(null);

  // ✅ Clean Logout
  const logout = () => {
    localStorage.removeItem("user");
    navigate("/", { replace: true });   // Public Home
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

  const toggleDropdown = () => {
    setOpen(prev => !prev);
  };

  return (
    <header className="navbar">
      <div className="logo">💎 Diamond Saloon</div>

      <nav className="menu">
        {/* ✅ Home always goes to Public Home */}
        <Link to="/">Home</Link>

        <Link to="/user/appointments">Appointments</Link>
        <Link to="/user/products">Products</Link>

        {user ? (
          <div
            className="profile-wrapper"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button className="profile-btn" onClick={toggleDropdown}>
              👤 {user.fullName} <span className="arrow">▾</span>
            </button>

            {open && (
              <div className="dropdown">

                {/* ✅ Dashboard REMOVED */}

                <div onClick={() => navigate("/user/profile")}>
                  My Profile
                </div>

                <div onClick={() => navigate("/user/appointments")}>
                  My Appointments
                </div>

                <div className="logout" onClick={logout}>
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
