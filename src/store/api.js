import axios from "axios";

const api = axios.create({
  baseURL: "https://63bf4f31a177ed68abaefca0.mockapi.io",
});

export default api;
