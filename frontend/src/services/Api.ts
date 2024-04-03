const APP_BASE_URL = import.meta.env.VITE_API_BASE_URL;

import axios, { AxiosInstance } from "axios";

const api: AxiosInstance = axios.create({
  baseURL: `${APP_BASE_URL}`, //* URL base para as solicitações.
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
  },
});

api.interceptors.request.use((config: any) => {
  try {
    const token = localStorage.getItem("acc_token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  } catch (error) {
    return Promise.reject(error);
  }
});

export default api;
