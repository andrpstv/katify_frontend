import axios from "axios";

const baseURL = import.meta.env.VITE_API_BASE_URL || "http://localhost:8080";

const api = axios.create({ baseURL, headers: { "Content-Type": "application/json" } });

// request interceptor: attach access token
api.interceptors.request.use(config => {
  const token = localStorage.getItem("access_token");
  if (token && config.headers) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

// response interceptor: optional handling of 401 (refresh flow)
api.interceptors.response.use(
  res => res,
  async err => {
    // place for refresh-token logic (optional)
    return Promise.reject(err);
  }
);

export default api;