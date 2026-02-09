import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import "./PaymentPage.css";

const PaymentPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const product = state?.product;
  const cartItems = state?.cartItems;
  const totalAmount = state?.totalAmount;

  const { fullName, mobile, address } = state || {};

  if (!product && !cartItems)
    return <h2>Invalid Access</h2>;

  const handlePayment = async () => {
    try {
      // ✅ Prepare items exactly like CartItem model
      const itemsToSend = cartItems
        ? cartItems.map((item) => ({
            cartItemId: item.cartItemId,
            productId: item.productId,
            productName: item.productName,
            price: item.price,
            quantity: item.quantity,
            inStock: true,
            imageUrl: item.imageUrl,
          }))
        : [
            {
              cartItemId: Math.random().toString(36).substring(2, 12),
              productId: product.productId,
              productName: product.productName,
              price: product.price,
              quantity: 1,
              inStock: true,
              imageUrl: product.imageUrl,
            },
          ];

      await axios.post("http://localhost:9292/orders", {
        userId: user.userId,
        items: itemsToSend,
        totalAmount: totalAmount,
      });

      alert("Payment Successful ✅");
      navigate("/user/orders");
    } catch (error) {
      console.error("Order error:", error.response?.data);
      alert("Order Failed ❌");
    }
  };

  return (
    <div className="payment-wrapper">
      <div className="payment-card">
        <h2>Payment Summary</h2>

        {/* Single Product */}
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

        {/* Cart Products */}
        {cartItems &&
          cartItems.map((item) => (
            <div key={item.cartItemId} className="product-info">
              <h4>{item.productName}</h4>
              <p>
                ₹ {item.price} × {item.quantity}
              </p>
            </div>
          ))}

        <div className="user-info">
          <p><strong>Name:</strong> {fullName}</p>
          <p><strong>Mobile:</strong> {mobile}</p>
          <p><strong>Address:</strong> {address}</p>
        </div>

        <button className="pay-btn" onClick={handlePayment}>
          Pay ₹ {totalAmount}
        </button>
      </div>
    </div>
  );
};

export default PaymentPage;
