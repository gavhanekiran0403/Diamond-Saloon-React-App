import axios from "axios";

const BASE_URL = "http://localhost:9292/auth";

export const registerUser = (user) => {
  return axios.post(`${BASE_URL}/register`, user);
};
