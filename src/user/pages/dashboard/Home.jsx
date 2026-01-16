import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const [showPopup, setShowPopup] = useState(false);

  // ✅ Smart click handler
  const handleAction = (path) => {
    if (!user) {
      setShowPopup(true);      // guest → show popup
    } else {
      navigate(path);         // logged in → go directly
    }
  };

  return (
    <>

      {/* ✅ Home Content */}
      <div className="home-container">

        <h1 className="home-title">
          Welcome {user ? user.fullName : "Guest"} 👋
        </h1>

        <p className="home-subtitle">
          What would you like to do today?
        </p>

        {/* ✅ Cards (always visible) */}
        <div className="cards-row">

          <div
            className="guest-card"
            onClick={() => handleAction("/user/appointments")}
          >
            <div className="card-icon">📅</div>
            <h3>Book Appointment</h3>
            <p>Schedule your salon visit easily.</p>
          </div>

          <div
            className="guest-card"
            onClick={() => handleAction("/user/appointments")}
          >
            <div className="card-icon">📖</div>
            <h3>My Appointments</h3>
            <p>View your booking history.</p>
          </div>

          <div
            className="guest-card"
            onClick={() => handleAction("/user/products")}
          >
            <div className="card-icon">🛒</div>
            <h3>Buy Products</h3>
            <p>Explore salon products and offers.</p>
          </div>

        </div>
      </div>

      {/* ✅ POPUP (only for guest) */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup">
            <h2>🔒 Login Required</h2>
            <p>Please login to continue.</p>

            <button
              className="login-btn"
              onClick={() => navigate("/user/login")}
            >
              Login
            </button>

            <button
              className="close-btn"
              onClick={() => setShowPopup(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
