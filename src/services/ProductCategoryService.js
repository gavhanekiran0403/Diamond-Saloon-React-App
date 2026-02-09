import axios from "axios";

const BASE_URL = "http://localhost:9292/product-categories";

export const getAllCategories = () => {
  return axios.get(`${BASE_URL}/get-all`);
};

export const createCategory = (category) => {
  return axios.post(`${BASE_URL}/create`, category);
};

export const deleteCategory = (id) => {
  return axios.delete(`${BASE_URL}/delete/${id}`);
};
