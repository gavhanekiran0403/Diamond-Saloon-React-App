import { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./MyOrders.css";

const MyOrders = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchOrders = useCallback(async () => {
    try {
      const res = await axios.get(
        `http://localhost:9292/order/user/${user.userId}`
      );
      setOrders(res.data);
    } catch (error) {
      console.error("Error fetching orders", error);
    } finally {
      setLoading(false);
    }
  }, [user.userId]);

  useEffect(() => {
    fetchOrders();
  }, [fetchOrders]);

  const getStatusClass = (status) => {
    switch (status) {
      case "CANCELLED":
        return "status-cancelled";
      case "DELIVERED":
        return "status-delivered";
      case "REFUNDED":
        return "status-refunded";
      default:
        return "status-placed";
    }
  };

  if (loading) {
    return (
      <div className="orders-container">
        <h2>My Orders</h2>
        <p>Loading orders...</p>
      </div>
    );
  }

  return (
    <div className="orders-container">
      <h2>My Orders</h2>

      {orders.length === 0 ? (
        <p>No orders yet.</p>
      ) : (
        <table className="orders-table">
          <thead>
            <tr>
              <th>Sr.No.</th>
              <th>Order ID</th>
              <th>Order Date</th>
              <th>Order Status</th>
              <th>Total Amount (₹)</th>
              <th>Payment Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order, index) => (
              <tr key={order.orderId}>
                <td>{index + 1}</td>

                <td>{order.orderId}</td>

                <td>{order.orderAt || "-"}</td>

                <td>
                  <span
                    className={`status-badge ${getStatusClass(
                      order.orderStatus
                    )}`}
                  >
                    {order.orderStatus}
                  </span>
                </td>

                <td>{order.totalAmount}</td>

                <td>{order.paymentStatus}</td>

                <td>
                  <button
                    className="view-btn"
                    onClick={() =>
                      navigate(`/user/orders/${order.orderId}`)
                    }
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
  );
};

export default MyOrders;
