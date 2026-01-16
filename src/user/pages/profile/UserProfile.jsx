import React, { useState } from "react";
import "./UserProfile.css";

const UserProfile = () => {
  const storedUser = JSON.parse(localStorage.getItem("user"));

  const [editMode, setEditMode] = useState(false);
  const [user, setUser] = useState(storedUser);

  if (!user) {
    return <h2 style={{ padding: "40px" }}>User not logged in ❌</h2>;
  }

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const handleUpdate = () => {
    localStorage.setItem("user", JSON.stringify(user));
    alert("Profile updated successfully ✅");
    setEditMode(false);
  };

  return (
    <div className="profile-container">
      <div className="profile-card">

        <div className="profile-header">
          <h2>My Profile</h2>
          {!editMode ? (
            <button className="edit-btn" onClick={() => setEditMode(true)}>
              ✏️ Edit
            </button>
          ) : (
            <button className="save-btn" onClick={handleUpdate}>
              💾 Update
            </button>
          )}
        </div>

        <div className="profile-field">
          <label>Full Name</label>
          <input
            name="fullName"
            value={user.fullName}
            onChange={handleChange}
            disabled={!editMode}
          />
        </div>

        <div className="profile-field">
          <label>Email</label>
          <input
            name="email"
            value={user.email}
            onChange={handleChange}
            disabled={!editMode}
          />
        </div>

        <div className="profile-field">
          <label>Mobile</label>
          <input
            name="mobileNo"
            value={user.mobileNo}
            onChange={handleChange}
            disabled={!editMode}
          />
        </div>

        <div className="profile-field">
          <label>Role</label>
          <input value={user.role} disabled />
        </div>

        <div className="profile-field">
          <label>Status</label>
          <input value={user.activeStatus} disabled />
        </div>

      </div>
    </div>
  );
};

export default UserProfile;
