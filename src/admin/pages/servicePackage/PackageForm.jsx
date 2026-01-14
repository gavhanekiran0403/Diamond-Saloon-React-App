import React, { useState } from "react";
import "./PackageForm.css";
import { useNavigate } from "react-router-dom";

/* Mock services (later replace with API data) */
const Services = [
  { serviceId: "1", serviceName: "Hair Cut", price: 200 },
  { serviceId: "2", serviceName: "Beard Trim", price: 150 },
  { serviceId: "3", serviceName: "Facial", price: 1200 },
  { serviceId: "4", serviceName: "Hair Spa", price: 800 },
  { serviceId: "5", serviceName: "Makeup", price: 1000 }
];

const PackageForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    packageName: "",
    category: "",
    services: [],
    totalPrice: 0
  });

  /* Handle input change */
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  /* Handle service checkbox */
  const handleServiceChange = (service) => {
    const exists = formData.services.find(
      (s) => s.serviceId === service.serviceId
    );

    let updatedServices;
    if (exists) {
      updatedServices = formData.services.filter(
        (s) => s.serviceId !== service.serviceId
      );
    } else {
      updatedServices = [...formData.services, service];
    }

    const totalPrice = updatedServices.reduce(
      (sum, s) => sum + s.price,
      0
    );

    setFormData({
      ...formData,
      services: updatedServices,
      totalPrice
    });
  };

  /* Submit */
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Package Data:", formData);

    // TODO: API call
    navigate("/admin/service-packages");
  };

  return (
    <div className="package-form-page">
      <h2 className="form-title">Add Package</h2>

      <form className="package-form" onSubmit={handleSubmit}>
        {/* Package Name */}
        <div className="form-group">
          <label>Package Name</label>
          <input
            type="text"
            name="packageName"
            value={formData.packageName}
            onChange={handleChange}
            placeholder="Enter package name"
            required
          />
        </div>

        {/* Category */}
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
          </select>
        </div>

        {/* Services */}
        <div className="form-group">
          <label>Select Services</label>
          <div className="services-list">
            {Services.map((service) => (
              <label key={service.serviceId} className="service-option">
                <input
                  type="checkbox"
                  checked={formData.services.some(
                    (s) => s.serviceId === service.serviceId
                  )}
                  onChange={() => handleServiceChange(service)}
                />
                {service.serviceName} (₹{service.price})
              </label>
            ))}
          </div>
        </div>

        {/* Total Price */}
        <div className="form-group">
          <label>Total Price</label>
          <input
            type="number"
            value={formData.totalPrice}
            readOnly
          />
        </div>

        {/* Buttons */}
        <div className="form-actions">
          <button type="submit" className="save-btn">
            Save Package
          </button>
          <button
            type="button"
            className="cancel-btn"
            onClick={() => navigate("/admin/service-packages")}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default PackageForm;
