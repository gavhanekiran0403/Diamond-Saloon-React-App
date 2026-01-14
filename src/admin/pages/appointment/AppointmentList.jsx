import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AppointmentList.css";

const AppointmentList = () => {
  const navigate = useNavigate();

  // ✅ Dummy appointment data
  const appointmentsData = [
    {
      _id: "65fa101a1",
      userId: "USER001",
      serviceId: "SERVICE101",
      packageId: "PACKAGE201",
      staffId: "STAFF501",
      appointmentDate: "2026-01-13",
      timeSlot: "10:00 AM - 11:00 AM",
      status: "BOOKED",
    },
    {
      _id: "65fa101a2",
      userId: "USER002",
      serviceId: "SERVICE102",
      packageId: "PACKAGE202",
      staffId: "STAFF502",
      appointmentDate: "2026-01-14",
      timeSlot: "02:00 PM - 03:00 PM",
      status: "COMPLETED",
    },
    {
      _id: "65fa101a3",
      userId: "USER003",
      serviceId: "SERVICE103",
      packageId: "PACKAGE203",
      staffId: "STAFF503",
      appointmentDate: "2026-01-15",
      timeSlot: "05:00 PM - 06:00 PM",
      status: "CANCELLED",
    },
  ];

  // ✅ Filters
  const [statusFilter, setStatusFilter] = useState("ALL");
  const [dateFilter, setDateFilter] = useState(""); // yyyy-mm-dd

  // ✅ Filter appointments by status + date
  const filteredAppointments = appointmentsData.filter((apt) => {
    const matchStatus =
      statusFilter === "ALL" ? true : apt.status === statusFilter;

    const matchDate = dateFilter === "" ? true : apt.appointmentDate === dateFilter;

    return matchStatus && matchDate;
  });

  // ✅ Edit appointment
  const handleEdit = (id) => {
    navigate(`/admin/appointments/edit/${id}`);
  };

  // ✅ Delete appointment
  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete?");
    if (confirmDelete) {
      alert(`Appointment Deleted: ${id}`);
      // later: call API delete here
    }
  };

  // ✅ Status badge class
  const getStatusClass = (status) => {
    if (status === "BOOKED") return "status-booked";
    if (status === "COMPLETED") return "status-completed";
    if (status === "CANCELLED") return "status-cancelled";
    return "";
  };

  // ✅ Reset filters
  const resetFilters = () => {
    setStatusFilter("ALL");
    setDateFilter("");
  };

  return (
    <div className="appointment-page">
      <div className="top-action">
        {/* Add Appointment */}
        <button
          className="add-btn"
          onClick={() => navigate(`/admin/appointments/add`)}
        >
          + Add Appointment
        </button>

        {/* Filters */}
        <div className="filter-bar">
          {/* Status Filter */}
          <div className="filter-item">
            <label>Status:</label>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="ALL">All</option>
              <option value="BOOKED">BOOKED</option>
              <option value="COMPLETED">COMPLETED</option>
              <option value="CANCELLED">CANCELLED</option>
            </select>
          </div>

          {/* ✅ Date Filter */}
          <div className="filter-item">
            <label>Date:</label>
            <input
              type="date"
              value={dateFilter}
              onChange={(e) => setDateFilter(e.target.value)}
            />
          </div>

          {/* Reset Button */}
          <button className="reset-btn" onClick={resetFilters}>
            Reset
          </button>
        </div>
      </div>

      <h1 className="appointment-title">Appointment List</h1>

      <div className="appointment-table-wrapper">
        {filteredAppointments.length === 0 ? (
          <p className="no-data">No appointments found.</p>
        ) : (
          <table className="appointment-table">
            <thead>
              <tr>
                <th>Sr.No.</th>
                <th>Appointment ID</th>
                <th>User ID</th>
                <th>Service ID</th>
                <th>Package ID</th>
                <th>Staff ID</th>
                <th>Date</th>
                <th>Time Slot</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {filteredAppointments.map((apt, index) => (
                <tr key={apt._id}>
                  <td>{index + 1}</td>
                  <td className="id-cell">{apt._id}</td>
                  <td>{apt.userId}</td>
                  <td>{apt.serviceId}</td>
                  <td>{apt.packageId}</td>
                  <td>{apt.staffId}</td>
                  <td>{apt.appointmentDate}</td>
                  <td>{apt.timeSlot}</td>
                  <td>
                    <span className={`status-badge ${getStatusClass(apt.status)}`}>
                      {apt.status}
                    </span>
                  </td>
                  <td className="action-cell">
                    <button className="edit-btn" onClick={() => handleEdit(apt._id)}>
                      Edit
                    </button>
                    <button
                      className="delete-btn"
                      onClick={() => handleDelete(apt._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default AppointmentList;
