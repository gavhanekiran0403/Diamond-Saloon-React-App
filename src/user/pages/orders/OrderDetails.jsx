import { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./OrderDetails.css";

const OrderDetails = () => {
  const { orderId } = useParams();

  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchOrder = useCallback(async () => {
    try {
      const res = await axios.get(
        `http://localhost:9292/order/${orderId}`
      );
      setOrder(res.data);
    } catch (error) {
      console.error("Error fetching order", error);
    } finally {
      setLoading(false);
    }
  }, [orderId]);

  useEffect(() => {
    fetchOrder();
  }, [fetchOrder]);

  if (loading) {
    return (
      <div className="order-details-container">
        <h2>Loading order details...</h2>
      </div>
    );
  }

  if (!order) {
    return (
      <div className="order-details-container">
        <h2>Order not found</h2>
      </div>
    );
  }

  return (
    <div className="order-details-container">
      <h2>Order Details</h2>

      <div className="order-box">
        <p><strong>Order ID:</strong> {order.orderId}</p>
        <p><strong>Status:</strong> {order.orderStatus}</p>
        <p><strong>Payment:</strong> {order.paymentStatus}</p>
        <p><strong>Total Amount:</strong> ₹ {order.totalAmount}</p>
        <p><strong>Order Date:</strong> {order.orderAt}</p>

        {order.deliveredAt && (
          <p><strong>Delivered At:</strong> {order.deliveredAt}</p>
        )}
      </div>

      <h3>Items</h3>
      <div className="items-section">
        {order.items?.map((item, index) => (
          <div key={index} className="item-card">
            <img
              src={`data:image/jpeg;base64,${item.imageUrl}`}
              alt={item.productName}
            />
            <div>
              <h4>{item.productName}</h4>
              <p>₹ {item.price} × {item.quantity}</p>
            </div>
          </div>
        ))}
      </div>

      {order.deliveryAddress && (
        <>
          <h3>Delivery Address</h3>
          <div className="address-box">
            <p>
              {order.deliveryAddress.houseNo},{" "}
              {order.deliveryAddress.streetAddress}
            </p>
            <p>{order.deliveryAddress.landmark}</p>
            <p>
              {order.deliveryAddress.city},{" "}
              {order.deliveryAddress.state} -{" "}
              {order.deliveryAddress.pincode}
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default OrderDetails;
