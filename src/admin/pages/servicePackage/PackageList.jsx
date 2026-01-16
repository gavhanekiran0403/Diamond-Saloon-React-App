import React, { useState } from "react";
import "./PackageList.css";
import { useNavigate } from "react-router-dom";

const Packages = [
  {
    packageId: "1",
    packageName: "Grooming Combo",
    category: "Men",
    totalPrice: 350,
    services: [
      { serviceId: "1", serviceName: "Hair Cut" },
      { serviceId: "2", serviceName: "Beard Trim" }
    ]
  },
  {
    packageId: "2",
    packageName: "Bridal Glow",
    category: "Women",
    totalPrice: 2200,
    services: [
      { serviceId: "3", serviceName: "Facial" },
      { serviceId: "4", serviceName: "Hair Spa" },
      { serviceId: "5", serviceName: "Makeup" }
    ]
  },
  {
    packageId: "3",
    packageName: "Basic Care",
    category: "Men",
    totalPrice: 400,
    services: [
      { serviceId: "6", serviceName: "Hair Cut" },
      { serviceId: "7", serviceName: "Head Massage" }
    ]
  }
];

const PackageList = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState("All");

  const filteredPackages =
    category === "All"
      ? Packages
      : Packages.filter((pack) => pack.category === category);

  return (
    <div className="package-page">
      {/* Top Action Bar */}
      <div className="top-action">
        <button
          className="add-btn"
          onClick={() => navigate("/admin/service-packages/add")}
        >
          + Add Package
        </button>

        <div className="filter-bar">
          <label>Filter by Category:</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Men">Men</option>
            <option value="Women">Women</option>
          </select>
        </div>
      </div>

      <h1 className="package-title">Package List</h1>

      <div className="package-table-wrapper">
        <table className="package-table">
          <thead>
            <tr>
              <th>Sr.No.</th>
              <th>Package Name</th>
              <th>Category</th>
              <th>Total Price</th>
              <th>Services</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {filteredPackages.map((pack, index) => (
              <tr key={pack.packageId}>
                <td>{index + 1}</td>
                <td>{pack.packageName}</td>
                <td>{pack.category}</td>
                <td>₹{pack.totalPrice}</td>
                <td>
                    <div className="services-cell">
                        {pack.services.map((service) => (
                            <span key={service.serviceId} className="service-badge">
                                {service.serviceName}
                            </span>
                        ))}
                    </div>
                </td>
                <td className="action-cell">
                  <button className="edit-btn">Edit</button>
                  <button className="delete-btn">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {filteredPackages.length === 0 && (
          <p className="no-data">No packages found</p>
        )}
      </div>
    </div>
  );
};

export default PackageList;
