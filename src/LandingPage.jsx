import React from "react";
import { useNavigate } from "react-router-dom";
import UserNavbar from "./user/components/navbar/UserNavbar";
import "./LandingPage.css";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <UserNavbar />

      <div className="landing-container">
        {/* LEFT CONTENT */}
        <div className="landing-content">
          <h1>Diamond Saloon</h1>

          <h3>
            Premium Grooming • Luxury Experience • Trusted Professionals
          </h3>

          <p>
            Experience world-class styling, grooming and beauty services crafted
            for elegance and comfort. Book your appointment today and redefine
            your style with confidence.
          </p>

          <button
            className="primary-btn"
            onClick={() => navigate("/user/login")}
          >
            Book Appointment
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="landing-image">
          <img src="/images/diamond-hero.jpg" alt="Diamond Saloon" />
        </div>
      </div>
    </>
  );
};

export default LandingPage;
