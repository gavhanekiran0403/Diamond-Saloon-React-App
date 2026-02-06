import React, { useState } from "react";
import "./OrderList.css";
import { useNavigate } from "react-router-dom";

const OrderList = () => {

  // ✅ Salon & Beauty Orders Data
const ordersData = [
  {
    orderId: "ORD001",
    userId: "USER001",
    orderDate: "2026-01-13",
    status: "PENDING",
    totalAmount: 1899,
    paymentId: "PAY101",
    products: [
      { name: "Hair Spa Cream", qty: 1, price: 699 },
      { name: "Keratin Shampoo", qty: 2, price: 600 },
    ],
  },
  {
    orderId: "ORD002",
    userId: "USER002",
    orderDate: "2026-01-14",
    status: "COMPLETED",
    totalAmount: 1499,
    paymentId: "PAY102",
    products: [
      { name: "Facial Kit (Gold)", qty: 1, price: 999 },
      { name: "Aloe Vera Gel", qty: 1, price: 500 },
    ],
  },
  {
    orderId: "ORD003",
    userId: "USER003",
    orderDate: "2026-01-15",
    status: "CANCELLED",
    totalAmount: 799,
    paymentId: "PAY103",
    products: [
      { name: "Hair Dryer Service", qty: 1, price: 799 },
    ],
  },
  {
    orderId: "ORD004",
    userId: "USER004",
    orderDate: "2026-01-16",
    status: "COMPLETED",
    totalAmount: 2599,
    paymentId: "PAY104",
    products: [
      { name: "Bridal Makeup Package", qty: 1, price: 1999 },
      { name: "Nail Art Service", qty: 1, price: 600 },
    ],
  },
  {
    orderId: "ORD005",
    userId: "USER005",
    orderDate: "2026-01-17",
    status: "COMPLETED",
    totalAmount: 1299,
    paymentId: "PAY105",
    products: [
      { name: "Organic Face Wash", qty: 2, price: 350 },
      { name: "Skin Glow Serum", qty: 1, price: 599 },
    ],
  },
];

  const navigate = useNavigate();
  // ================= STATES =================
  const [orderIdFilter, setOrderIdFilter] = useState("");
  const [userIdFilter, setUserIdFilter] = useState("");
  const [orderDateFilter, setOrderDateFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("ALL");

  // ================= FILTER LOGIC =================
  const filteredOrders = ordersData.filter((order) => {
    const matchOrderId =
      orderIdFilter === "" ||
      order.orderId.toLowerCase().includes(orderIdFilter.toLowerCase());

    const matchUserId =
      userIdFilter === "" ||
      order.userId.toLowerCase().includes(userIdFilter.toLowerCase());

    const matchOrderDate =
      orderDateFilter === "" || order.orderDate === orderDateFilter;

    const matchStatus =
      statusFilter === "ALL" || order.status === statusFilter;

    return matchOrderId && matchUserId && matchOrderDate && matchStatus;
  });

  // ================= RESET =================
  const resetFilters = () => {
    setOrderIdFilter("");
    setUserIdFilter("");
    setOrderDateFilter("");
    setStatusFilter("ALL");
  };

  return (
    <div className="order-page">

      {/* ✅ Top Action - Filters (UNCHANGED) */}
      <div className="order-top-action">
        <div className="order-filter-bar">

          <div className="order-filter-item">
            <label>Order ID:</label>
            <input
              type="text"
              value={orderIdFilter}
              onChange={(e) => setOrderIdFilter(e.target.value)}
            />
          </div>

          <div className="order-filter-item">
            <label>User ID:</label>
            <input
              type="text"
              value={userIdFilter}
              onChange={(e) => setUserIdFilter(e.target.value)}
            />
          </div>

          <div className="order-filter-item">
            <label>Order Date:</label>
            <input
              type="date"
              value={orderDateFilter}
              onChange={(e) => setOrderDateFilter(e.target.value)}
            />
          </div>

          <div className="order-filter-item">
            <label>Status:</label>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="ALL">All</option>
              <option value="PENDING">PENDING</option>
              <option value="COMPLETED">COMPLETED</option>
              <option value="CANCELLED">CANCELLED</option>
            </select>
          </div>

          <button className="order-reset-btn" onClick={resetFilters}>
            Reset
          </button>
        </div>
      </div>

      <h1 className="order-title">Order List</h1>

      {/* ================= TABLE ================= */}
      <div className="order-table-wrapper">
        {filteredOrders.length === 0 ? (
          <p className="order-no-data">No orders found.</p>
        ) : (
          <table className="order-table">
            <thead>
              <tr>
                <th>Sr.No.</th>
                <th>Order ID</th>
                <th>User ID</th>
                <th>Order Date</th>
                <th>Order Status</th>
                <th>Total Amount (₹)</th>
                <th>Payment ID</th>

                {/* ✅ NEW ACTION COLUMN */}
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {filteredOrders.map((order, index) => (
                <tr key={order.orderId}>
                  <td>{index + 1}</td>
                  <td>{order.orderId}</td>
                  <td>{order.userId}</td>
                  <td>{order.orderDate}</td>

                  <td>
                    <span className={`order-status-badge order-status-${order.status.toLowerCase()}`}>
                      {order.status}
                    </span>
                  </td>

                  <td>{order.totalAmount}</td>
                  <td>{order.paymentId}</td>

                  {/* ✅ VIEW BUTTON */}
                  <td>
                    <button
                      className="order-view-btn"
                      onClick={() => navigate(`/admin/orders/${order.orderId}`, { state: order })}
                    >
                      View
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

export default OrderList;
