import React, { useState } from "react";
import "./ServiceList.css";
import { useNavigate } from "react-router-dom";

const Services = [
  {
    serviceId: "1",
    serviceName: "Hair Cut",
    category: "Men",
    price: 250,
    durationMinutes: 30,
    isAvailable: true,
  },
  {
    serviceId: "2",
    serviceName: "Facial",
    category: "Women",
    price: 1200,
    durationMinutes: 60,
    isAvailable: false,
  },
  {
    serviceId: "3",
    serviceName: "Beard Trim",
    category: "Men",
    price: 150,
    durationMinutes: 20,
    isAvailable: true,
  },
];

const ServiceList = () => {

    const navigate = useNavigate();
    const [category, setCategory] = useState("All");

    const filteredServices = 
        category === "All"
        ? Services 
        : Services.filter((service) => service.category === category)
    
    
    return(
        <div className="service-page">

            {/* Add Button */}
            <div className="top-action">
                <button
                    className="add-btn"
                    onClick={() => navigate(`/admin/services/add`)}
                >
                    + Add Service
                </button>

                {/* Category Filter */}
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
            <h1 className="service-title">Service List</h1>

            <div className="service-table-wrapper">
                <table className="service-table">
                    <thead>
                        <tr>
                            <th>Sr.No.</th>
                            <th>Service Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Duration Minutes</th>
                            {/* <th>Availability Status</th> */}
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {filteredServices.map((service, index) => (
                            <tr key={service.serviceId}>
                                <td>{index + 1}</td>
                                <td>{service.serviceName}</td>
                                <td>{service.category}</td>
                                <td>{service.price}</td>
                                <td>{service.durationMinutes}</td>
                                {/* <td>
                                    <span
                                        className={`status-badge ${
                                          service.isAvailable ? "available" : "unavailable"  
                                        }`}
                                    >
                                        {service.isAvailable ? "available" : "unavailable"}
                                    </span>
                                </td> */}
                                <td className="action-cell">
                                    <button className="edit-btn">Edit</button>
                                    <button className="delete-btn">Delete</button>
                                </td>
                        </tr>
                        ))}
                    </tbody>
                </table>
                
                {filteredServices.length === 0 && (
                    <p className="no-data">No services found</p>
                )}

            </div>
        </div>
    );
};

export default ServiceList;