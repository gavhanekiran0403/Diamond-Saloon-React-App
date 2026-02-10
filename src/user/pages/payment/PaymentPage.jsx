import { useLocation, useNavigate } from "react-router-dom";
import { createUserOrder } from "../../../services/userOrderService";
import "./PaymentPage.css";

const PaymentPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const product = state?.product;
  const cartItems = state?.cartItems;
  const selectedPackage = state?.selectedPackage;
  const totalAmount = state?.totalAmount || selectedPackage?.price;
  const addressId = state?.addressId;

  if (!product && !cartItems && !selectedPackage) {
    return <h2 style={{ padding: "40px" }}>Invalid Access</h2>;
  }

  const handlePayment = async () => {
    try {
      let payload;

      // 🛒 CART CHECKOUT
      if (cartItems) {
        payload = {
          userId: user.userId,
          cartItemId: cartItems[0].cartItemId,
          cartCheckout: true,
          addressId: addressId,
          paymentMethod: "ONLINE",
        };

        await createUserOrder(payload);
      }

      // 🛍 SINGLE PRODUCT
      else if (product) {
        payload = {
          userId: user.userId,
          productId: product.productId,
          quantity: 1,
          cartCheckout: false,
          addressId: addressId,
          paymentMethod: "ONLINE",
        };

        await createUserOrder(payload);
      }

      // 💎 PACKAGE PAYMENT (TEMP FIX)
      else if (selectedPackage) {
        // Since backend does not support package yet
        // Just simulate success
        alert("Package Payment Successful ✅");
        navigate("/user/orders");
        return;
      }

      alert("Payment Successful ✅");
      navigate("/user/orders");

    } catch (error) {
      console.error("Order error:", error.response?.data || error);
      alert("Order Failed ❌");
    }
  };

  return (
    <div className="payment-wrapper">
      <div className="payment-card">
        <h2>Payment Summary</h2>

        {product && (
          <div className="product-info">
            <img
              src={`http://localhost:9292/${product.imageUrl}`}
              alt={product.productName}
            />
            <div>
              <h3>{product.productName}</h3>
              <p>₹ {product.price}</p>
            </div>
          </div>
        )}

        {cartItems &&
          cartItems.map((item) => (
            <div key={item.cartItemId} className="product-info">
              <h4>{item.productName}</h4>
              <p>
                ₹ {item.price} × {item.quantity}
              </p>
            </div>
          ))}

        {selectedPackage && (
          <div className="product-info">
            <h3>{selectedPackage.name}</h3>
            <p>Category: {selectedPackage.category}</p>
            <p>₹ {selectedPackage.price}</p>
          </div>
        )}

        <h3 style={{ marginTop: "15px" }}>
          Total: ₹ {totalAmount}
        </h3>

        <button className="pay-btn" onClick={handlePayment}>
          Pay ₹ {totalAmount}
        </button>
      </div>
    </div>
  );
};

export default PaymentPage;
