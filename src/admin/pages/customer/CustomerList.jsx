import React from "react";
import "./CustomerList.css";

const customers = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    phone: "9876543210",
    password: "********",
    status: "Active",
  },
  {
    id: 2,
    name: "Priya Sharma",
    email: "priya@gmail.com",
    phone: "9123456780",
    password: "********",
    status: "Inactive",
  },
  {
    id: 3,
    name: "Rahul Verma",
    email: "rahul@yahoo.com",
    phone: "9988776655",
    password: "********",
    status: "Active",
  },
];

const CustomerList = () => {
  return (
    <div className="customer-page">
      <h1 className="customer-title">Customer List</h1>

      <div className="customer-table-wrapper">
        <table className="customer-table">
          <thead>
            <tr>
              <th>Sr. No.</th>
              <th>Customer Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {customers.map((cust, index) => (
              <tr key={cust.id}>
                <td>{index + 1}</td>
                <td>{cust.name}</td>
                <td>{cust.email}</td>
                <td>{cust.phone}</td>
                <td>
                  <span
                    className={`status-badge ${
                      cust.status === "Active" ? "active" : "inactive"
                    }`}
                  >
                    {cust.status}
                  </span>
                </td>
                <td>
                  <button className="force-logout-btn">
                    Force Logout
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CustomerList;
