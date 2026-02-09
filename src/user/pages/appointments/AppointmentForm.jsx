import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./AppointmentForm.css";

const AppointmentForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    service: "",
    date: "",
    time: "",
    notes: "",
  });

  // ✅ BLOCK PAGE IF NOT LOGGED IN + Autofill user info
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      alert("🔐 Please login to book an appointment!");
      navigate("/user/login");
      return;
    }

    // ✅ Autofill user details safely
    setFormData((prev) => ({
      ...prev,
      fullName: user.fullName || "",
      mobile: user.phone || "",   // 🔥 FIX (phone field)
    }));
  }, [navigate]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // ✅ Save appointment with userId
  const handleSubmit = (e) => {
    e.preventDefault();

    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) return;

    const appointmentWithUser = {
      ...formData,
      userId: user.userId,
      userName: user.fullName,
    };

    const existingAppointments =
      JSON.parse(localStorage.getItem("appointments")) || [];

    const updatedAppointments = [
      ...existingAppointments,
      appointmentWithUser,
    ];

    localStorage.setItem(
      "appointments",
      JSON.stringify(updatedAppointments)
    );

    alert("✅ Appointment booked successfully!");

    // ✅ Clear only appointment fields (keep user info)
    setFormData({
      fullName: user.fullName || "",
      mobile: user.phone || "",
      service: "",
      date: "",
      time: "",
      notes: "",
    });
  };

  return (
    <div className="appointment-page">
      <h2>Book Appointment</h2>

      <form className="appointment-form" onSubmit={handleSubmit}>
        <input
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          required
        />

        <input
          name="mobile"
          placeholder="Mobile Number"
          value={formData.mobile}
          onChange={handleChange}
          required
        />

        <select
          name="service"
          value={formData.service}
          onChange={handleChange}
          required
        >
          <option value="">Select Service</option>
          <option>Hair Styling</option>
          <option>Beard Grooming</option>
          <option>Facial & Cleanup</option>
          <option>Massage</option>
          <option>Bridal Package</option>
        </select>

        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />

        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
        />

        <textarea
          name="notes"
          placeholder="Additional Notes (optional)"
          value={formData.notes}
          onChange={handleChange}
        />

        <button type="submit">Book Appointment</button>
      </form>
    </div>
  );
};

export default AppointmentForm;
