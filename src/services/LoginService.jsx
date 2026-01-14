import axios from "axios";

const API_URL = "http://localhost:9292/user";

export const userLogin = (loginData) => {
  return axios.post(`${API_URL}/login`, loginData, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
