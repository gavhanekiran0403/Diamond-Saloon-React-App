import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./CheckoutPage.css";

const CheckoutPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  // Supports BOTH flows
  const product = state?.product;
  const cartItems = state?.cartItems;
  const totalAmount =
    state?.totalAmount || (product ? product.price : 0);

  // Auto-filled from logged-in user
  const [fullName] = useState(user?.fullName || "");
  const [mobile] = useState(user?.phone || "");

  // 🔥 Structured address fields
  const [houseNo, setHouseNo] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [landmark, setLandmark] = useState("");
  const [city, setCity] = useState("");
  const [stateName, setStateName] = useState("");
  const [pincode, setPincode] = useState("");

  if (!product && !cartItems)
    return <h2>No items selected</h2>;

  const handleConfirm = () => {
    const address = `${houseNo}, ${streetAddress}, ${landmark}, ${city}, ${stateName} - ${pincode}`;

    navigate("/user/payment", {
      state: {
        product,
        cartItems,
        totalAmount,
        fullName,
        mobile,
        address,
      },
    });
  };

  return (
    <div className="checkout-wrapper">
      <div className="checkout-card">
        <h2>Delivery Details</h2>

        {/* Single Product */}
        {product && (
          <div className="product-summary">
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
        {cartItems && (
          <div className="cart-summary">
            {cartItems.map((item) => (
              <div key={item.cartItemId} className="cart-product">
                <h4>{item.productName}</h4>
                <p>
                  ₹ {item.price} × {item.quantity}
                </p>
              </div>
            ))}
          </div>
        )}

        <h3 style={{ marginTop: "15px" }}>
          Total: ₹ {totalAmount}
        </h3>

        <div className="form-group">
          {/* Auto-filled */}
          <input type="text" value={fullName} readOnly />
          <input type="text" value={mobile} readOnly />

          {/* Address form */}
          <input
            placeholder="House No"
            value={houseNo}
            onChange={(e) => setHouseNo(e.target.value)}
          />

          <input
            placeholder="Street Address"
            value={streetAddress}
            onChange={(e) => setStreetAddress(e.target.value)}
          />

          <input
            placeholder="Landmark"
            value={landmark}
            onChange={(e) => setLandmark(e.target.value)}
          />

          <div className="row">
            <input
              placeholder="City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <input
              placeholder="State"
              value={stateName}
              onChange={(e) => setStateName(e.target.value)}
            />
          </div>

          <input
            placeholder="Pincode"
            value={pincode}
            onChange={(e) => setPincode(e.target.value)}
          />
        </div>

        <button className="confirm-btn" onClick={handleConfirm}>
          Confirm Booking
        </button>
      </div>
    </div>
  );
};

export default CheckoutPage;
