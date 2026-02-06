import React, { useState } from "react";
import "./Settings.css";

function Settings() {
  const [saloonName, setSaloonName] = useState("Diamond Saloon");
  const [email, setEmail] = useState("admin@diamond.com");
  const [phone, setPhone] = useState("+91 9876543210");

  const handleSave = (e) => {
    e.preventDefault();
    alert("✅ Settings Saved Successfully!");
  };

  return (
    <div className="settings-page">
      <h2 className="settings-title">⚙️ Settings</h2>
      <p className="settings-subtitle">Manage your admin panel settings.</p>

      <form className="settings-form" onSubmit={handleSave}>
        <div className="form-group">
          <label>Saloon Name</label>
          <input
            type="text"
            value={saloonName}
            onChange={(e) => setSaloonName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Phone</label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <button type="submit" className="save-btn">
          Save Settings
        </button>
      </form>
    </div>
  );
}

export default Settings;
