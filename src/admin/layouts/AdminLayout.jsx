import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import "./AdminLayout.css";

import AdminNavbar from "../components/navbar/AdminNavbar";
import AdminSidebar from "../components/sidebar/AdminSidebar";
import AdminFooter from "../components/footer/AdminFooter";

const AdminLayout = () => {
  // ✅ desktop always open
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="admin-layout">
      <AdminSidebar open={sidebarOpen} setOpen={setSidebarOpen} />

      <div className="admin-body">
        <AdminNavbar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

        <main className="admin-content">
          <Outlet />
        </main>

        <AdminFooter />
      </div>
    </div>
  );
};

export default AdminLayout;
