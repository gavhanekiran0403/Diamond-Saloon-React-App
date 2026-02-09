import axios from "axios";

const API_URL = "http://localhost:9292/auth";

// ✅ User Login
export const userLogin = (loginData) => {
  return axios.post(`${API_URL}/login`, loginData, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

// ✅ Admin Login
export const adminLogin = (loginData) => {
  return axios.post(`${API_URL}/admin/login`, loginData, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

// ✅ Logout
export const logoutUser = (userId) => {
  return axios.post(`${API_URL}/logout/${userId}`);
};
