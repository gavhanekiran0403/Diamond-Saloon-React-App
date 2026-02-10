import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState, useCallback } from "react";
import axios from "axios";
import "./CheckoutPage.css";

const CheckoutPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const product = state?.product;
  const cartItems = state?.cartItems;

  const totalAmount =
    state?.totalAmount || (product ? product.price : 0);

  const [addressId, setAddressId] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  // Address Fields
  const [houseNo, setHouseNo] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [landmark, setLandmark] = useState("");
  const [city, setCity] = useState("");
  const [stateName, setStateName] = useState("");
  const [pincode, setPincode] = useState("");

  // ✅ Fetch default address (CORRECT API)
  const fetchDefaultAddress = useCallback(async () => {
    try {
      const res = await axios.get(
        `http://localhost:9292/address/get-all/${user.userId}`
      );

      const defaultAddress = res.data.find(
        (a) => a.defaultAddress === true
      );

      if (defaultAddress) {
        setAddressId(defaultAddress.addressId);
        setHouseNo(defaultAddress.houseNo || "");
        setStreetAddress(defaultAddress.streetAddress || "");
        setLandmark(defaultAddress.landmark || "");
        setCity(defaultAddress.city || "");
        setStateName(defaultAddress.state || "");
        setPincode(defaultAddress.pincode || "");
        setIsEditing(false);
      } else {
        setIsEditing(true);
      }
    } catch (error) {
      console.log("No address found");
      setIsEditing(true);
    }
  }, [user.userId]);

  useEffect(() => {
    fetchDefaultAddress();
  }, [fetchDefaultAddress]);

  // ✅ Save address if needed (CORRECT API)
  const saveAddressIfNeeded = async () => {
    if (addressId && !isEditing) return addressId;

    const payload = {
      userId: user.userId,
      houseNo,
      streetAddress,
      landmark,
      city,
      state: stateName,
      pincode,
      defaultAddress: true,
    };

    const res = await axios.post(
      "http://localhost:9292/address/add",
      payload
    );

    return res.data.addressId;
  };

  const handleConfirm = async () => {
    try {
      const savedAddressId = await saveAddressIfNeeded();

      navigate("/user/payment", {
        state: {
          product,
          cartItems,
          totalAmount,
          addressId: savedAddressId,
        },
      });
    } catch (error) {
      console.error("Address Save Error:", error.response?.data);
      alert("Address Save Failed ❌");
    }
  };

  if (!product && !cartItems)
    return <h2 style={{ padding: "40px" }}>No items selected</h2>;

  return (
    <div className="checkout-wrapper">
      <div className="checkout-card">
        <h2>Delivery Details</h2>

        <h3 style={{ marginBottom: "15px" }}>
          Total: ₹ {totalAmount}
        </h3>

        {addressId && !isEditing ? (
          <>
            <div className="saved-address">
              <p>{houseNo}, {streetAddress}</p>
              <p>{landmark}</p>
              <p>{city}, {stateName} - {pincode}</p>
            </div>

            <button
              className="edit-btn"
              onClick={() => setIsEditing(true)}
            >
              Edit Address
            </button>
          </>
        ) : (
          <div className="form-group">
            <input
              placeholder="House No"
              value={houseNo}
              onChange={(e) => setHouseNo(e.target.value)}
            />

            <input
              placeholder="Street Address"
              value={streetAddress}
              onChange={(e) =>
                setStreetAddress(e.target.value)
              }
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
                onChange={(e) =>
                  setStateName(e.target.value)
                }
              />
            </div>

            <input
              placeholder="Pincode"
              value={pincode}
              onChange={(e) =>
                setPincode(e.target.value)
              }
            />
          </div>
        )}

        <button
          className="confirm-btn"
          onClick={handleConfirm}
        >
          Continue to Payment
        </button>
      </div>
    </div>
  );
};

export default CheckoutPage;
