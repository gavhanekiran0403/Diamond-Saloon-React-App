import React, { useState } from "react";
import "./Reports.css";

export default function Reports() {
  const [activeReport, setActiveReport] = useState("Appointments");
  const [search, setSearch] = useState("");

  const reportData = {
    Appointments: [
      { id: 1, customer: "John", service: "Haircut", date: "2026-01-16", status: "Completed" },
      { id: 2, customer: "Priya", service: "Facial", date: "2026-01-16", status: "Pending" },
      { id: 3, customer: "Anjali", service: "Manicure", date: "2026-01-15", status: "Completed" },
    ],
    Payments: [
      { id: 1, customer: "John", amount: "₹500", method: "Cash", date: "2026-01-16" },
      { id: 2, customer: "Priya", amount: "₹900", method: "UPI", date: "2026-01-16" },
      { id: 3, customer: "Anjali", amount: "₹700", method: "Card", date: "2026-01-15" },
    ],
    Orders: [
      { id: 1, product: "Shampoo", qty: 2, total: "₹850", date: "2026-01-16" },
      { id: 2, product: "Hair Serum", qty: 1, total: "₹1200", date: "2026-01-15" },
    ],
  };

  const data = reportData[activeReport];

  // ✅ Search filter (works for all reports)
  const filteredData = data.filter((row) =>
    Object.values(row)
      .join(" ")
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="reports-page">
      <h1 className="reports-title">📈 Reports</h1>

      {/* ✅ Tabs */}
      <div className="report-tabs">
        <button
          className={activeReport === "Appointments" ? "active" : ""}
          onClick={() => setActiveReport("Appointments")}
        >
          Appointments
        </button>

        <button
          className={activeReport === "Payments" ? "active" : ""}
          onClick={() => setActiveReport("Payments")}
        >
          Payments
        </button>

        <button
          className={activeReport === "Orders" ? "active" : ""}
          onClick={() => setActiveReport("Orders")}
        >
          Orders
        </button>
      </div>

      {/* ✅ Search */}
      <div className="report-actions">
        <input
          type="text"
          placeholder="🔍 Search report..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* ✅ Table */}
      <div className="report-table-box">
        <h2>{activeReport} Report</h2>

        <table className="report-table">
          <thead>
            <tr>
              {filteredData.length > 0 &&
                Object.keys(filteredData[0]).map((key) => (
                  <th key={key}>{key.toUpperCase()}</th>
                ))}
            </tr>
          </thead>

          <tbody>
            {filteredData.length > 0 ? (
              filteredData.map((item, index) => (
                <tr key={index}>
                  {Object.values(item).map((value, i) => (
                    <td key={i}>{value}</td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="10" style={{ textAlign: "center", padding: "20px" }}>
                  No record found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
