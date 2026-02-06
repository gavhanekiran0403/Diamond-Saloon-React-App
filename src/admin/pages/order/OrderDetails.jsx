import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./OrderDetails.css";

const OrderDetails = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  if (!state) return <h2>No Order Found</h2>;

  const order = state;

  // Example customer info (later from API)
  const customer = {
    name: "John Doe",
    phone: "+91 9876543210",
    address: "21, Park Street, Ahmedabad, Gujarat - 380001",
  };

  const grandTotal = order.products.reduce(
    (sum, p) => sum + p.qty * p.price,
    0
  );

  return (
    <div className="invoice-page">

      {/* ===== Header ===== */}
      <div className="invoice-header">
        <h1>Order Details</h1>

        <div>
          {/* <button onClick={() => window.print()} className="print-btn">
            Print
          </button> */}

          <button onClick={() => navigate(-1)} className="back-btn">
            Back
          </button>
        </div>
      </div>

      {/* ===== Order + Customer Info ===== */}
      <div className="info-section">

        <div className="info-box">
          <h3>Customer Details</h3>
          <p><b>Name:</b> {customer.name}</p>
          <p><b>Phone:</b> {customer.phone}</p>
          <p><b>Address:</b> {customer.address}</p>
        </div>

        <div className="info-box">
          <h3>Order Info</h3>
          <p><b>Order ID:</b> {order.orderId}</p>
          <p><b>Date:</b> {order.orderDate}</p>
          <p><b>Payment ID:</b> {order.paymentId}</p>
          <p><b>Payment Mode:</b> UPI</p>

          <p>
            <b>Status:</b>{" "}
            <span className={`status ${order.status.toLowerCase()}`}>
              {order.status}
            </span>
          </p>
        </div>

      </div>

      {/* ===== Products Table ===== */}
      <table className="invoice-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Product</th>
            <th>Price</th>
            <th>Qty</th>
            <th>Subtotal</th>
          </tr>
        </thead>

        <tbody>
          {order.products.map((p, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{p.name}</td>
              <td>₹ {p.price}</td>
              <td>{p.qty}</td>
              <td>₹ {p.qty * p.price}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* ===== Total ===== */}
      <div className="total-section">
        <h2>Grand Total : ₹ {grandTotal}</h2>
      </div>

    </div>
  );
};

export default OrderDetails;
