import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminDashboard from "./pages/dashboard/AdminDashboard";
import AdminLayout from "./layouts/AdminLayout";
import AdminLogin from "./pages/login/AdminLogin";

function AdminRoutes() {
  return (
    <Routes>

      {/* ✅ ADMIN LOGIN */}
      <Route path="login" element={<AdminLogin />} />

      {/* ✅ ADMIN DASHBOARD WITH LAYOUT */}
      <Route element={<AdminLayout />}>
        <Route index element={<AdminDashboard />} />
        <Route path="admin-dashboard" element={<AdminDashboard />} />
      </Route>

    </Routes>
  );
}

export default AdminRoutes;
