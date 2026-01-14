import React from "react";
import "./StaffForm.css";
import { useNavigate } from "react-router-dom";

const StaffForm = () => {

    const navigate = useNavigate();

    return(
        <div className="staff-form-page">

            <h2 className="form-title">Add Staff</h2>

            <form className="staff-form">

                <div className="form-group">
                    <label>Staff Name</label>
                    <input 
                        type="text"
                        name="staffName"
                        placeholder="Enter staff name"
                    />
                </div>

                <div className="form-group">
                    <label>Phone Number</label>
                    <input 
                        type="tel"
                        name="phoneNo"
                        placeholder="Enter phone number"
                    />
                </div>

                <div className="form-group">
                    <label>Specialization</label>
                    <input 
                        type="text"
                        name="specialization"
                        placeholder="Enter specialization"
                    />
                </div>

                <div className="form-actions">
                    <button className="save-btn">
                        save
                    </button>

                    <button 
                        className="cancel-btn"
                        onClick={() => navigate(`/admin/staff`)}
                    >
                        Cancel
                    </button>
                </div>

            </form>

        </div>
    );
};

export default StaffForm;