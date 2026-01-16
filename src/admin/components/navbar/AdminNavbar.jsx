import React from "react";
import "./AdminNavbar.css";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../../../services/LoginService";

function Navbar(){

    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            const adminId = localStorage.getItem("adminId");

            if (!adminId) {
                navigate("/admin/login");
                return;
            }

            await logoutUser(adminId);

            // ✅ Clear localStorage
            localStorage.removeItem("adminId");

            alert("Logout successful");
            navigate("/admin/login");
        } catch (error) {
            console.log("Logout error:", error);
            alert("Logout failed");
        }
    };

    return(
        <div className="navbar">
            <div className="navbar-right">
                <div className="admin-notification">
                    🔔
                    <span className="badge">3</span>
                </div>

                <button className="logout-btn" onClick={handleLogout} >Logout</button>
            </div>
        </div>
    );
};

export default Navbar;