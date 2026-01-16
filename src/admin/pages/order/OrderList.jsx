import React, { useState } from "react";
import "./OrderList.css";

const OrderList = () => {
  // ✅ Dummy Orders Data
  const ordersData = [
    {
      orderId: "ORD001",
      userId: "USER001",
      orderDate: "2026-01-13",
      status: "PENDING",
      totalAmount: 1299,
      paymentId: "PAY101",
    },
    {
      orderId: "ORD002",
      userId: "USER002",
      orderDate: "2026-01-14",
      status: "COMPLETED",
      totalAmount: 899,
      paymentId: "PAY102",
    },
    {
      orderId: "ORD003",
      userId: "USER003",
      orderDate: "2026-01-15",
      status: "CANCELLED",
      totalAmount: 499,
      paymentId: "PAY103",
    },
    {
      orderId: "ORD004",
      userId: "USER001",
      orderDate: "2026-01-15",
      status: "COMPLETED",
      totalAmount: 2499,
      paymentId: "PAY104",
    },
  ];

  // ✅ Filters State
  const [orderIdFilter, setOrderIdFilter] = useState("");
  const [userIdFilter, setUserIdFilter] = useState("");
  const [orderDateFilter, setOrderDateFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("ALL");

  // ✅ Filter Logic
  const filteredOrders = ordersData.filter((order) => {
    const matchOrderId =
      orderIdFilter === "" ||
      order.orderId.toLowerCase().includes(orderIdFilter.toLowerCase());

    const matchUserId =
      userIdFilter === "" ||
      order.userId.toLowerCase().includes(userIdFilter.toLowerCase());

    const matchOrderDate =
      orderDateFilter === "" || order.orderDate === orderDateFilter;

    const matchStatus = statusFilter === "ALL" || order.status === statusFilter;

    return matchOrderId && matchUserId && matchOrderDate && matchStatus;
  });

  // ✅ Reset Filters
  const resetFilters = () => {
    setOrderIdFilter("");
    setUserIdFilter("");
    setOrderDateFilter("");
    setStatusFilter("ALL");
  };

  return (
    <div className="order-page">
      {/* ✅ Top Action - Filters */}
      <div className="top-action">
        <div className="filter-bar">
          {/* Order ID Filter */}
          <div className="filter-item">
            <label>Order ID:</label>
            <input
              type="text"
              placeholder="Search Order ID"
              value={orderIdFilter}
              onChange={(e) => setOrderIdFilter(e.target.value)}
            />
          </div>

          {/* User ID Filter */}
          <div className="filter-item">
            <label>User ID:</label>
            <input
              type="text"
              placeholder="Search User ID"
              value={userIdFilter}
              onChange={(e) => setUserIdFilter(e.target.value)}
            />
          </div>

          {/* Order Date Filter */}
          <div className="filter-item">
            <label>Order Date:</label>
            <input
              type="date"
              value={orderDateFilter}
              onChange={(e) => setOrderDateFilter(e.target.value)}
            />
          </div>

          {/* Status Filter */}
          <div className="filter-item">
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

          {/* Reset Button */}
          <button className="reset-btn" onClick={resetFilters}>
            Reset
          </button>
        </div>
      </div>

      <h1 className="order-title">Order List</h1>

      <div className="order-table-wrapper">
        {filteredOrders.length === 0 ? (
          <p className="no-data">No orders found.</p>
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
              </tr>
            </thead>

            <tbody>
              {filteredOrders.map((order, index) => (
                <tr key={order.orderId}>
                  <td>{index + 1}</td>
                  <td className="id-cell">{order.orderId}</td>
                  <td>{order.userId}</td>
                  <td>{order.orderDate}</td>

                  <td>
                    <span className={`status-badge status-${order.status.toLowerCase()}`}>
                      {order.status}
                    </span>
                  </td>

                  <td>{order.totalAmount}</td>
                  <td>{order.paymentId}</td>
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
