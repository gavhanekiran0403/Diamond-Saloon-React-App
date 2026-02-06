import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AppointmentForm.css";

const AppointmentForm = () => {

  const navigate = useNavigate();

  // ===== Dummy Data =====
  const users = [
    { id: 1, name: "Priya Sharma" },
    { id: 2, name: "Anjali Patel" },
    { id: 3, name: "Neha Verma" },
  ];

  const services = [
    { id: 1, name: "Hair Cut" },
    { id: 2, name: "Facial" },
    { id: 3, name: "Bridal Makeup" },
  ];

  const packages = [
    { id: 1, name: "Gold Package" },
    { id: 2, name: "Bridal Combo" },
    { id: 3, name: "Skin Care Combo" },
  ];

  // ===== State =====
  const [timeSlots, setTimeSlots] = useState([]);

  const [formData, setFormData] = useState({
    userId: "",
    serviceId: "",
    packageId: "",
    appointmentDate: "",
    timeSlot: "",
    notes: "",
  });

  // ===== Generate 1-hour slots =====
  useEffect(() => {
    const slots = [];

    for (let h = 9; h < 20; h++) {
      const start = `${h.toString().padStart(2, "0")}:00`;
      const end = `${(h + 1).toString().padStart(2, "0")}:00`;
      slots.push(`${start} - ${end}`);
    }

    setTimeSlots(slots);
  }, []);

  // ===== Handle change =====
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ===== Submit =====
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Appointment Data:", formData);

    alert("✅ Appointment booked successfully!");
    navigate(-1);
  };

  return (
    <div className="appointment-form-page">

      <h2 className="form-title">Book Appointment</h2>

      <form className="appointment-form" onSubmit={handleSubmit}>

        {/* Customer */}
        <div className="form-group">
          <label>Customer</label>
          <select name="userId" value={formData.userId} onChange={handleChange} required>
            <option value="">-- Select Customer --</option>
            {users.map((u) => (
              <option key={u.id} value={u.id}>{u.name}</option>
            ))}
          </select>
        </div>

        {/* Service */}
        <div className="form-group">
          <label>Service</label>
          <select name="serviceId" value={formData.serviceId} onChange={handleChange}>
            <option value="">-- Select Service --</option>
            {services.map((s) => (
              <option key={s.id} value={s.id}>{s.name}</option>
            ))}
          </select>
        </div>

        {/* Package */}
        <div className="form-group">
          <label>Service Package</label>
          <select name="packageId" value={formData.packageId} onChange={handleChange}>
            <option value="">-- Select Package --</option>
            {packages.map((p) => (
              <option key={p.id} value={p.id}>{p.name}</option>
            ))}
          </select>
        </div>

        {/* Date */}
        <div className="form-group">
          <label>Appointment Date</label>
          <input
            type="date"
            name="appointmentDate"
            value={formData.appointmentDate}
            onChange={handleChange}
            required
          />
        </div>

        {/* Time Slot */}
        <div className="form-group">
          <label>Time Slot (1 hour)</label>
          <select name="timeSlot" value={formData.timeSlot} onChange={handleChange} required>
            <option value="">-- Select Time Slot --</option>
            {timeSlots.map((slot, index) => (
              <option key={index} value={slot}>{slot}</option>
            ))}
          </select>
        </div>

        {/* Notes */}
        {/* <div className="form-group">
          <label>Notes</label>
          <textarea
            name="notes"
            rows="3"
            value={formData.notes}
            onChange={handleChange}
            placeholder="Any special instructions..."
          />
        </div> */}

        {/* Buttons */}
        <div className="form-actions">
          <button type="submit" className="save-btn">Book</button>

          <button
            type="button"
            className="cancel-btn"
            onClick={() => navigate(-1)}
          >
            Cancel
          </button>
        </div>

      </form>
    </div>
  );
};

export default AppointmentForm;
