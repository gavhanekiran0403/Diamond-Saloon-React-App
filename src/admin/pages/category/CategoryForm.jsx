import React, { useState } from "react";
import "./CategoryForm.css";
import { useNavigate } from "react-router-dom";

const CategoryForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    categoryName: "",
    description: "",
  });

  // ✅ input change handler
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ✅ submit handler
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Category Data:", formData);

    // ✅ Here you can call API later
    // axios.post("your-api-url", formData)

    alert("Category Added Successfully!");

    // ✅ clear form after submit
    setFormData({
      categoryName: "",
      description: "",
    });

    // ✅ redirect to category list page
    navigate("/admin/categories");
  };

  return (
    <div className="category-form-page">
      <h2 className="form-title">Add Category</h2>

      <form className="category-form" onSubmit={handleSubmit}>
        
        {/* Category Name */}
        <div className="form-group">
          <label>Category Name</label>
          <input
            type="text"
            name="categoryName"
            value={formData.categoryName}
            onChange={handleChange}
            placeholder="Enter category name"
            required
          />
        </div>

        {/* Description */}
        <div className="form-group">
          <label>Description</label>
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Enter description"
            required
          />
        </div>

        {/* buttons */}
        <div className="form-actions">
          <button type="submit" className="save-btn">
            Save
          </button>

          <button
            type="button"
            className="cancel-btn"
            onClick={() => navigate(`/admin/categories`)}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default CategoryForm;
