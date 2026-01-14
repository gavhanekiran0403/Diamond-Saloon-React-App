import React from "react";
import "./AdminNavbar.css";

function Navbar(){
    return(
        <div className="navbar">
            <div className="navbar-right">
                <div className="admin-notification">
                    🔔
                    <span className="badge">3</span>
                </div>

                <button className="logout-btn">Logout</button>
            </div>
        </div>
    );
};

export default Navbar;