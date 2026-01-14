import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ProductForm.css";

const categories = [
  { categoryId: "1", categoryName: "Hair Care" },
  { categoryId: "2", categoryName: "Hair Styling" },
  { categoryId: "3", categoryName: "Skin Care" },
  { categoryId: "4", categoryName: "Salon Tools" },
];

const ProductForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    productName: "",
    brand: "",
    price: "",
    stockQty: "",
    description: "",
    categoryId: "",
  });

  // ✅ Image states
  const [productImage, setProductImage] = useState(null); // stores file
  const [imagePreview, setImagePreview] = useState(""); // stores preview URL

  // ✅ Handle normal input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ✅ Handle image upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setProductImage(file);

      // create preview url
      const previewUrl = URL.createObjectURL(file);
      setImagePreview(previewUrl);
    }
  };

  // ✅ Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ create payload
    const payload = {
      ...formData,
      productImage: productImage ? productImage.name : "No Image Selected",
    };

    console.log("Product Payload:", payload);

    alert("Product Added Successfully ✅");

    // ✅ reset form
    setFormData({
      productName: "",
      brand: "",
      price: "",
      stockQty: "",
      description: "",
      categoryId: "",
    });

    setProductImage(null);
    setImagePreview("");

    // ✅ redirect
    navigate("/admin/products");
  };

  return (
    <div className="product-form-page">
      <h2 className="form-title">Add Product</h2>

      <form className="product-form" onSubmit={handleSubmit}>
        {/* Product Name */}
        <div className="form-group">
          <label>Product Name</label>
          <input
            type="text"
            name="productName"
            value={formData.productName}
            onChange={handleChange}
            placeholder="Enter product name"
            required
          />
        </div>

        {/* Brand */}
        <div className="form-group">
          <label>Brand</label>
          <input
            type="text"
            name="brand"
            value={formData.brand}
            onChange={handleChange}
            placeholder="Enter brand name"
            required
          />
        </div>

        {/* Price */}
        <div className="form-group">
          <label>Price (₹)</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="Enter price"
            required
          />
        </div>

        {/* Stock Quantity */}
        <div className="form-group">
          <label>Stock Quantity</label>
          <input
            type="number"
            name="stockQty"
            value={formData.stockQty}
            onChange={handleChange}
            placeholder="Enter stock quantity"
            required
          />
        </div>

        {/* Category */}
        <div className="form-group">
          <label>Category</label>
          <select
            name="categoryId"
            value={formData.categoryId}
            onChange={handleChange}
            required
          >
            <option value="">-- Select Category --</option>
            {categories.map((cat) => (
              <option key={cat.categoryId} value={cat.categoryId}>
                {cat.categoryName}
              </option>
            ))}
          </select>
        </div>

        {/* Description */}
        <div className="form-group">
          <label>Description</label>
          <textarea
            name="description"
            rows="3"
            value={formData.description}
            onChange={handleChange}
            placeholder="Enter product description"
            required
          />
        </div>

        {/* ✅ Image Upload */}
        <div className="form-group">
          <label>Upload Product Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            required
          />
        </div>

        {/* ✅ Show Image Name */}
        {productImage && (
          <p className="image-name">
            Selected Image: <span>{productImage.name}</span>
          </p>
        )}

        {/* ✅ Image Preview */}
        {imagePreview && (
          <div className="image-preview">
            <p>Image Preview:</p>
            <img src={imagePreview} alt="Preview" />
          </div>
        )}

        {/* Buttons */}
        <div className="form-actions">
          <button type="submit" className="save-btn">
            Save
          </button>

          <button
            type="button"
            className="cancel-btn"
            onClick={() => navigate("/admin/products")}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductForm;
