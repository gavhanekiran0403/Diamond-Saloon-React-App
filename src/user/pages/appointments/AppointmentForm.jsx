import React, { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import "./AppointmentForm.css";

const AppointmentForm = () => {
  const navigate = useNavigate();

  const OPENING_HOUR = 10; // 10 AM
  const CLOSING_HOUR = 19; // 7 PM

  // 🔥 Generate 1-hour range slots like 10:00 AM - 11:00 AM
  const generateTimeSlots = () => {
    const slots = [];

    for (let hour = OPENING_HOUR; hour < CLOSING_HOUR; hour++) {
      const formatTime = (h) => {
        const formattedHour =
          h > 12 ? h - 12 : h === 0 ? 12 : h;
        const ampm = h >= 12 ? "PM" : "AM";
        return `${formattedHour}:00 ${ampm}`;
      };

      const start = formatTime(hour);
      const end = formatTime(hour + 1);

      slots.push(`${start} - ${end}`);
    }

    return slots;
  };

  const timeSlots = useMemo(() => generateTimeSlots(), []);

  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    service: "",
    date: "",
    time: "",
    notes: "",
  });

  // ✅ Login check + autofill
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      alert("🔐 Please login to book an appointment!");
      navigate("/user/login");
      return;
    }

    setFormData((prev) => ({
      ...prev,
      fullName: user.fullName || "",
      mobile: user.phone || "",
    }));
  }, [navigate]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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

        {/* ✅ 1-Hour Range Slots */}
        <select
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
        >
          <option value="">-- Select Time Slot --</option>
          {timeSlots.map((slot, index) => (
            <option key={index} value={slot}>
              {slot}
            </option>
          ))}
        </select>

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
