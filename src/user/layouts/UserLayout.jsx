import React from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";

import UserNavbar from "../components/navbar/UserNavbar";
import UserFooter from "../components/footer/UserFooter";
import "./UserLayout.css";

const UserLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // ❌ Do not show Back button on home/dashboard
  const hideBackOn = ["/", "/user/dashboard"];
  const showBack = !hideBackOn.includes(location.pathname);

  return (
    <>
      <UserNavbar />

      {showBack && (
        <div className="back-wrapper">
          <button
            className="back-btn"
            onClick={() => navigate(-1)}
          >
            ← Back
          </button>
        </div>
      )}

      <Outlet />

      <UserFooter />
    </>
  );
};

export default UserLayout;
