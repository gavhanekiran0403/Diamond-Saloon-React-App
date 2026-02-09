import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./UserCart.css";

const UserCart = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  const [cart, setCart] = useState(null);

  const fetchCart = useCallback(async () => {
    try {
      const res = await axios.get(
        `http://localhost:9292/cart/${user.userId}`
      );
      setCart(res.data);
    } catch (err) {
      console.error(err);
      setCart(null);
    }
  }, [user.userId]);

  useEffect(() => {
    fetchCart();
  }, [fetchCart]);

  const updateQuantity = async (cartItemId, quantity) => {
    if (quantity < 1) return;

    try {
      await axios.put(
        `http://localhost:9292/cart/update/${cartItemId}?userId=${user.userId}&quantity=${quantity}`
      );
      fetchCart();
    } catch (err) {
      console.error(err);
    }
  };

  const removeItem = async (cartItemId) => {
    try {
      await axios.delete(
        `http://localhost:9292/cart/${user.userId}/item/${cartItemId}`
      );
      fetchCart();
    } catch (err) {
      console.error(err);
    }
  };

  // ✅ NEW — Checkout button
  const handleCheckout = () => {
    navigate("/user/checkout", {
      state: {
        cartItems: cart.products,
        totalAmount: cart.totalAmount,
      },
    });
  };

  if (!cart || cart.products.length === 0) {
    return (
      <div className="cart-container">
        <h2>Your Cart is Empty 🛒</h2>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <div className="cart-title">My Cart 🛒</div>

      {cart.products.map((item) => (
        <div key={item.cartItemId} className="cart-item">
          <div className="cart-info">
            <h4>{item.productName}</h4>
            <div className="cart-price">₹ {item.price}</div>
          </div>

          <div className="qty-controls">
            <button
              className="qty-btn"
              onClick={() =>
                updateQuantity(item.cartItemId, item.quantity - 1)
              }
            >
              −
            </button>

            <span>{item.quantity}</span>

            <button
              className="qty-btn"
              onClick={() =>
                updateQuantity(item.cartItemId, item.quantity + 1)
              }
            >
              +
            </button>
          </div>

          <button
            className="remove-btn"
            onClick={() => removeItem(item.cartItemId)}
          >
            Remove
          </button>
        </div>
      ))}

      <div className="total-box">
        Total Amount: ₹ {cart.totalAmount}
      </div>

      {/* ✅ NEW BUTTON */}
      <button className="checkout-btn" onClick={handleCheckout}>
        Proceed To Checkout 🛒
      </button>
    </div>
  );
};

export default UserCart;
