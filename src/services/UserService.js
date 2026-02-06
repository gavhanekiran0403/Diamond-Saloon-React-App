import axios from "axios";

const API_URL = "http://localhost:9292/user";

export const getAllUsers = () => {
    return axios.get(`${API_URL}/get-all`);
}