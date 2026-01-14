import React from "react";
import "./AdminFooter.css";

const AdminFooter = () => {
  return (
    <footer className="admin-footer">
      <p>© {new Date().getFullYear()} Diamond Saloon Admin Dashboard | v1.0</p>
    </footer>
  );
};

export default AdminFooter;
