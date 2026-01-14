import React from "react";
import { Outlet } from "react-router-dom";
import "./AdminLayout.css";

import AdminNavbar from "../components/navbar/AdminNavbar"; 
import AdminSidebar from "../components/sidebar/AdminSidebar";
import AdminFooter from "../components/footer/AdminFooter";

const AdminLayout = () => {
    return(
        <div className="admin-layout">
            <AdminSidebar />
            <div className="admin-body">
                <div className="admin-sidebar">
                    <AdminNavbar/>
                </div>
                <main className="admin-content">
                    <Outlet/>
                </main>
            </div>
            <AdminFooter/>
        </div>
    );
};

export default AdminLayout;