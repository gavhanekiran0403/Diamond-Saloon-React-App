import React from "react";
import { Routes, Route } from "react-router-dom";
import UserLayout from "./layouts/UserLayout";
import UserLogin from "./pages/login/UserLogin";
import UserDashboard from "./pages/dashboard/UserDashboard";
import UserProfile from "./pages/profile/UserProfile";
import Home from "./pages/dashboard/Home";

function UserRoutes() {
  return (
    <Routes>

      {/* ✅ Public Home */}
      <Route path="/" element={<Home />} />

      {/* ✅ Login */}
      <Route path="login" element={<UserLogin />} />

      {/* ✅ After login pages */}
      <Route element={<UserLayout />}>
        <Route path="dashboard" element={<UserDashboard />} />
        <Route path="profile" element={<UserProfile />} />
      </Route>

    </Routes>
  );
}

export default UserRoutes;
