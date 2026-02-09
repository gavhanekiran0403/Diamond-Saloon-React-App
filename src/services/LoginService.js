import axios from "axios";

const API_URL = "http://localhost:9292/auth";

export const userLogin = (loginData) => {
  return axios.post(`${API_URL}/login`, loginData, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const adminLogin = (loginData) => {
  return axios.post(`${API_URL}/admin/login`, loginData, {
    headers: {
      "Content-Type": "application/json",
    },
  });
}

// ✅ Logout (User/Admin)
export const logoutUser = (userId) => {
  return axios.post(`${API_URL}/logout/${userId}`);
};