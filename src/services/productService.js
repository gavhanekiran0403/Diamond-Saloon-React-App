import axios from "axios";

const BASE_URL = "http://localhost:9292/products";

// ✅ Get all products
export const getAllProducts = () => {
  return axios.get(`${BASE_URL}/get-all`);
};

// ✅ Get product by ID
export const getProductById = (productId) => {
  return axios.get(`${BASE_URL}/${productId}`);
};

// ✅ Get products by category
export const getProductsByCategory = (categoryId) => {
  return axios.get(`${BASE_URL}/get-by-category/${categoryId}`);
};
