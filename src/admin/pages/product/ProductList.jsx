import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ProductList.css";

const categoryData = [
  { categoryId: "1", categoryName: "Hair Care" },
  { categoryId: "2", categoryName: "Hair Styling" },
  { categoryId: "3", categoryName: "Skin Care" },
  { categoryId: "4", categoryName: "Salon Tools" },
];

const productData = [
  {
    productId: "1",
    productName: "Hair Shampoo",
    brand: "L'Oreal",
    price: 399,
    stockQty: 25,
    description: "Smoothening & anti-dandruff shampoo",
    imageUrl: "https://via.placeholder.com/60",
    categoryId: "1",
  },
  {
    productId: "2",
    productName: "Hair Serum",
    brand: "Matrix",
    price: 299,
    stockQty: 15,
    description: "Anti-frizz serum for shiny hair",
    imageUrl: "https://via.placeholder.com/60",
    categoryId: "1",
  },
  {
    productId: "3",
    productName: "Face Wash",
    brand: "Himalaya",
    price: 199,
    stockQty: 40,
    description: "Deep cleansing face wash",
    imageUrl: "https://via.placeholder.com/60",
    categoryId: "3",
  },
  {
    productId: "4",
    productName: "Hair Dryer",
    brand: "Philips",
    price: 1299,
    stockQty: 10,
    description: "Professional salon hair dryer",
    imageUrl: "https://via.placeholder.com/60",
    categoryId: "4",
  },
];

const ProductList = () => {
  const navigate = useNavigate();

  const [selectedCategory, setSelectedCategory] = useState("all");

  // ✅ Filter products
  const filteredProducts =
    selectedCategory === "all"
      ? productData
      : productData.filter((p) => p.categoryId === selectedCategory);

  const getCategoryName = (categoryId) => {
    const category = categoryData.find((c) => c.categoryId === categoryId);
    return category ? category.categoryName : "Unknown";
  };

  const handleEdit = (id) => {
    navigate(`/admin/products/edit/${id}`);
  };

  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete?");
    if (confirmDelete) {
      alert(`Deleted Product ID: ${id}`);
      // ✅ later: call API delete here
    }
  };

  return (
    <div className="product-page">
      <div className="top-action">
        {/* Add button */}
        <button className="add-btn" onClick={() => navigate(`/admin/products/add`)}>
          + Add Product
        </button>

        {/* Category Filter */}
        <div className="filter-bar">
          <label>Filter by Category:</label>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="all">All</option>
            {categoryData.map((cat) => (
              <option key={cat.categoryId} value={cat.categoryId}>
                {cat.categoryName}
              </option>
            ))}
          </select>
        </div>
      </div>

      <h1 className="product-title">Product List</h1>

      <div className="product-table-wrapper">
        {filteredProducts.length === 0 ? (
          <p className="no-data">No products found.</p>
        ) : (
          <table className="product-table">
            <thead>
              <tr>
                <th>Sr.No.</th>
                <th>Product Name</th>
                <th>Brand</th>
                <th>Price (₹)</th>
                <th>Stock Qty</th>
                <th>Description</th>
                <th>Image</th>
                <th>Category</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {filteredProducts.map((product, index) => (
                <tr key={product.productId}>
                  <td>{index + 1}</td>
                  <td>{product.productName}</td>
                  <td>{product.brand}</td>
                  <td>{product.price}</td>
                  <td>{product.stockQty}</td>
                  <td className="desc-cell">{product.description}</td>

                  <td>
                    <img
                      src={product.imageUrl}
                      alt={product.productName}
                      className="product-img"
                    />
                  </td>

                  <td>{getCategoryName(product.categoryId)}</td>

                  <td className="action-cell">
                    <button
                      className="edit-btn"
                      onClick={() => handleEdit(product.productId)}
                    >
                      Edit
                    </button>
                    <button
                      className="delete-btn"
                      onClick={() => handleDelete(product.productId)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default ProductList;
