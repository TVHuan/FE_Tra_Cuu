import axios from "axios";

const API = axios.create({
  baseURL: "https://check-bien-so-tai-nan-sever.onrender.com/api",
});

export const checkLicensePlate = (plate) => API.get(`/license-plate/${plate}`);
