import React from "react";
import { Outlet } from "react-router-dom";
import "./UserLayout.css";

import UserNavbar from "../components/navbar/UserNavbar";
import UserFooter from "../components/footer/UserFooter";

const UserLayout = () => {
  return (
    <div className="user-layout">
      <UserNavbar />

      <main className="user-content">
        <Outlet />
      </main>

      <UserFooter />
    </div>
  );
};

export default UserLayout;