import React from "react";
import { useNavigate } from "react-router-dom";
import "./CategoryList.css";

const Categories = [
  { categoryId: "1", categoryName: "Hair Care", description: "Shampoo, conditioner, masks, oils, serums" },
  { categoryId: "2", categoryName: "Hair Styling", description: "Wax, gel, spray, mousse, heat protectors" },
  { categoryId: "3", categoryName: "Hair Color / Dye", description: "Hair color, bleach, developer, toner" },
  { categoryId: "4", categoryName: "Beard Care", description: "Beard oil, balm, wash, grooming kits" },
  { categoryId: "5", categoryName: "Skin Care", description: "Face wash, moisturizer, sunscreen, serum" },
  { categoryId: "6", categoryName: "Facial Products", description: "Facial kits, packs, scrubs, cleansers" },
  { categoryId: "7", categoryName: "Waxing Products", description: "Wax strips, heaters, roll-on wax, after care gel" },
  { categoryId: "8", categoryName: "Manicure & Pedicure", description: "Pedi kits, foot scrubs, hand creams" },
  { categoryId: "9", categoryName: "Nail Care & Nail Art", description: "Nail polish, gel, extensions tools" },
  { categoryId: "10", categoryName: "Salon Tools", description: "Dryer, straightener, scissors, comb sets" },
]
const CategoryList = () => {

const navigate = useNavigate();

    return(
        <div className="category-page">
            <div className="top-action">
                <button
                    className="add-btn"
                    onClick={() => navigate(`/admin/categories/add`)}
                >
                    + Add Category
                </button>
            </div>
            <h1 className="category-title">Category List</h1>

            <div className="category-table-wrapper">
                <table className="category-table">
                    <thead>
                        <tr>
                            <th>Sr.No.</th>
                            <th>Category Name</th>
                            <th>Description</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {Categories.map((category, index) => (
                            <tr key={category.categoryId}>
                                <td>{index + 1}</td>
                                <td>{category.categoryName}</td>
                                <td>{category.description}</td>
                                <td className="action-cell">
                                    <button className="edit-btn">Edit</button>
                                    <button className="delete-btn">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {Categories.length === 0 && (
                    <p className="no-data">No categories found</p>
                )}

            </div>
        </div>
    );
};

export default CategoryList;