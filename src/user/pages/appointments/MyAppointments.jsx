import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./MyAppointments.css";

const MyAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));

    // ✅ Block if not logged in
    if (!user) {
      alert("🔐 Please login to view your appointments!");
      navigate("/user/login");
      return;
    }

    const allAppointments =
      JSON.parse(localStorage.getItem("appointments")) || [];

    // ✅ FILTER by logged-in userId
    const myAppointments = allAppointments.filter(
      (app) => app.userId === user.userId
    );

    setAppointments(myAppointments);
  }, [navigate]);

  return (
    <div className="my-appointments-page">
      <h2>My Appointments</h2>

      {appointments.length === 0 ? (
        <div className="empty-box">
          <h3>😔 No Appointments Found</h3>
          <p>You haven't booked any appointments yet.</p>
          <p>Please book your first appointment.</p>
        </div>
      ) : (
        <table className="my-appointments-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Mobile</th>
              <th>Service</th>
              <th>Date</th>
              <th>Time</th>
              <th>Notes</th>
            </tr>
          </thead>

          <tbody>
            {appointments.map((app, index) => (
              <tr key={index}>
                <td>{app.fullName}</td>
                <td>{app.mobile}</td>
                <td>{app.service}</td>
                <td>{app.date}</td>
                <td>{app.time}</td>
                <td>{app.notes || "-"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default MyAppointments;
