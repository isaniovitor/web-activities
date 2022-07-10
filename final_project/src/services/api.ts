import axios from "axios";

export const baseURL = "http://localhost:1337/api";
const api = axios.create({
  baseURL: baseURL,
});

export default api;
