import React from "react";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* ✅ Hero Section */}
      <section className="landing-container">
        <div className="landing-left">
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

        <div className="landing-right">
          <img
            src="/images/diamond-hero.jpg"
            alt="Diamond Saloon"
          />
        </div>
      </section>
    </>
  );
};

export default LandingPage;
