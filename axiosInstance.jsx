import axios from "axios";

const axiosInstance = axios.create({
  baseURL:import.meta.env.VITE_BASE_URL+'/api', // apna API ka base url
  timeout: 10000, // optional
  headers: {
    "Content-Type": "application/json",
  },
});

// Agar har request me token bhejna ho:
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("adminToken"); // ya Redux/Context se
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor (error handle karne ke liye)
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error:", error.response?.data || error.message);
    return Promise.reject(error);
  }
);

export default axiosInstance;
