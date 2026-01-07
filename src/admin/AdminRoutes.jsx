import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminDashboard from "./pages/dashboard/AdminDashboard";
import AdminLayout from "./layouts/AdminLayout";

function AdminRoutes() {
    return(
        <Routes>
            {/* Admin Routes */}
            <Route element={<AdminLayout />}>
                <Route index element={<AdminDashboard/>} />
                <Route path="/admin-dashboard" element={<AdminDashboard />} />
            </Route>
        </Routes>
    );
};

export default AdminRoutes;