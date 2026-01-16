import React, { useState } from "react";
import "./ServiceForm.css";
import { useNavigate } from "react-router-dom";

const ServiceForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    serviceName: "",
    category: "",
    price: "",
    durationMinutes: "",
    isAvailable: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Service Data:", formData);

    // TODO: API call here
    navigate("/admin/services");
  };

  return (
    <div className="service-form-page">
      <h2 className="form-title">Add Service</h2>

      <form className="service-form" onSubmit={handleSubmit}>
        {/* Service Name */}
        <div className="form-group">
          <label>Service Name</label>
          <input
            type="text"
            name="serviceName"
            value={formData.serviceName}
            onChange={handleChange}
            placeholder="Enter service name"
            required
          />
        </div>

        {/* Category Dropdown */}
        <div className="form-group">
          <label>Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          >
            <option value="">-- Select Category --</option>
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Kids">Kids</option>
          </select>
        </div>

        {/* Price */}
        <div className="form-group">
          <label>Price (₹)</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="Enter price"
            required
          />
        </div>

        {/* Duration */}
        <div className="form-group">
          <label>Duration (Minutes)</label>
          <input
            type="number"
            name="durationMinutes"
            value={formData.durationMinutes}
            onChange={handleChange}
            placeholder="Enter duration minutes"
            required
          />
        </div>

        {/* Availability */}
        {/* <div className="form-group checkbox-group">
          <input
            type="checkbox"
            name="isAvailable"
            checked={formData.isAvailable}
            onChange={handleChange}
          />
          <label>Available</label>
        </div> */}

        {/* Buttons */}
        <div className="form-actions">
          <button type="submit" className="save-btn">
            Save
          </button>
          <button
            type="button"
            className="cancel-btn"
            onClick={() => navigate("/admin/services")}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default ServiceForm;
