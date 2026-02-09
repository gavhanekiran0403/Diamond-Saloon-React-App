import React, { useEffect, useState } from "react";
import { getAllProducts } from "../../../services/productService";
import { addToCart } from "../../../services/CartService";
import { useNavigate } from "react-router-dom";
import "./UserProducts.css";

const UserProducts = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await getAllProducts();
      setProducts(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  // ✅ Add To Cart
  const handleAddToCart = async (product) => {
    try {
      await addToCart({
        userId: user.userId,
        productId: product.productId,
        quantity: 1,
      });

      alert("Added to Cart ✅");
    } catch (err) {
      console.error(err);
      alert("Failed to add to cart ❌");
    }
  };

  const handleBuyNow = (product) => {
  navigate("/user/checkout", { state: { product } });
};

  return (
    <div className="products-container">
      <h2>Our Products</h2>

      <div className="products-grid">
        {products.map((p) => (
          <div className="product-card" key={p.productId}>
            <img
              src={`http://localhost:9292/${p.imageUrl}`}
              alt={p.productName}
              onClick={() => navigate(`/user/products/${p.productId}`)}
            />

            <h3>{p.productName}</h3>
            <p className="price">₹ {p.price}</p>

            {/* ✅ Buttons */}
            <div className="product-buttons">
              <button
                className="cart-btn"
                onClick={() => handleAddToCart(p)}
              >
                Add To Cart 🛒
              </button>

              <button
                className="buy-btn"
                onClick={() => handleBuyNow(p)}
              >
                Buy Now ⚡
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserProducts;
