import React from "react";
import { useNavigate } from "react-router-dom";
import "./UserPackages.css";

const packages = [
  {
    id: 1,
    name: "Men Grooming Combo",
    category: "Men",
    price: 450,
    services: ["Hair Cut", "Beard Cut"],
  },
  {
    id: 2,
    name: "Women Beauty Care Combo",
    category: "Women",
    price: 2100,
    services: ["Facial", "Hair Spa", "Eyebrow Threading"],
  },
  {
    id: 3,
    name: "Combo Pack",
    category: "Women",
    price: 2550,
    services: [
      "Hair Cut",
      "Beard Cut",
      "Facial",
      "Hair Spa",
      "Eyebrow Threading",
    ],
  },
];

const UserPackages = () => {
  const navigate = useNavigate();

  const handleBookNow = (pkg) => {
    navigate("/user/payment", {
      state: { selectedPackage: pkg },
    });
  };

  return (
    <div className="package-container">
      <h2 className="package-title">Our Service Packages</h2>

      <div className="package-grid">
        {packages.map((pkg) => (
          <div className="package-card" key={pkg.id}>
            <h3>{pkg.name}</h3>
            <p className="category">{pkg.category}</p>
            <h4 className="price">₹{pkg.price}</h4>

            <div className="services">
              {pkg.services.map((service, index) => (
                <span key={index} className="service-tag">
                  {service}
                </span>
              ))}
            </div>

            <button
              className="book-btn"
              onClick={() => handleBookNow(pkg)}
            >
              Continue to Payment
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserPackages;
