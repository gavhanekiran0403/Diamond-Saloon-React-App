import React from "react";
import "./StaffList.css";
import { useNavigate } from "react-router-dom";

const Staff = [
  {
    _id: "1",
    staffName: "Rahul Sharma",
    phoneNo: "9876543210",
    specialization: "Hair Stylist",
    isAvailable: true,
  },
  {
    _id: "2",
    staffName: "Anjali Verma",
    phoneNo: "9123456789",
    specialization: "Facial & Skin Care",
    isAvailable: false,
  },
];

const StaffList = () => {
    
    const navigate = useNavigate();

    return(
        <div className="staff-page">

            <div className="top-action">
                <button
                    className="add-btn"
                    onClick={() => navigate(`/admin/staff/add`)}
                >
                    + Add Staff
                </button>
            </div>

            <h1 className="staff-title">Staff List</h1>

            <div className="staff-table-wrapper">
                <table className="staff-table">
                    <thead>
                        <tr>
                            <th>Sr.No.</th>
                            <th>Staff Name</th>
                            <th>Phone Number</th>
                            <th>Specialization</th>
                            <th>Availability status</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {Staff.map((staff, index) => (
                            <tr key={staff.staffId}>
                                <td>{index + 1}</td>
                                <td>{staff.staffName}</td>
                                <td>{staff.phoneNo}</td>
                                <td>{staff.specialization}</td>
                                <td>
                                    <span
                                        className={`status-badge ${
                                            staff.isAvailable? "available" : "unavailable"
                                        }`}
                                    >
                                        {staff.isAvailable ? "Available" : "Unavailable"}
                                    </span>
                                </td>
                                <td className="action-cell">
                                    <button className="edit-btn">Edit</button>
                                    <button className="delete-btn">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default StaffList; 