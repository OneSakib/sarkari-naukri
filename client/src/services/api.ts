import axios from "axios";

// Use environment variable for API base URL
const apiUrl = process.env.NEXT_PUBLIC_API_URL;

// Base Axios instance
const api = axios.create({
  baseURL: apiUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

// Automatically attach token if available
api.interceptors.request.use((config) => {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("token");
    if (token && token !== "undefined" && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
});

// ------------------------
// Auth
// ------------------------

export const loginUser = async (phone_number: string, password: string) => {
  const response = await api.post("/account/login", { phone_number, password });
  return response.data;
};

// ------------------------
// Dashboard & User
// ------------------------

export const fetchDashboard = async () => {
  const response = await api.get("/dairy/dashboard/");
  return response.data;
};

export const fetchUserData = async () => {
  const response = await api.get("/account/user/");
  return response.data;
};

// ------------------------
// Admin Panel
// ------------------------

export const fetchAdminPanel = async () => {
  const response = await api.get("/admin-panel/");
  return response.data;
};

// ------------------------
// Customers
// ------------------------

export const fetchCustomers = async () => {
  const response = await api.get("/dairy/customers/");
  return response.data;
};

export const fetchCustomer = async (enc_id: string) => {
  const response = await api.get(`/dairy/customers/${enc_id}`);
  return response.data;
};

export const createCustomers = async (payload: Record<string, any>) => {
  const response = await api.post("/dairy/add_customer/", payload);
  return response.data;
};

export const editCustomers = async (
  enc_id: string,
  payload: Record<string, any>
) => {
  const response = await api.patch(`/dairy/customers/${enc_id}/`, payload);
  return response.data;
};

export const deleteCustomers = async (enc_id: string) => {
  const response = await api.delete(`/dairy/customers/${enc_id}/`);
  return response.data;
};

// ------------------------
// Location
// ------------------------

export const fetchStates = async () => {
  const response = await api.get("/dairy/states/");
  return response.data;
};

export const fetchCities = async () => {
  const response = await api.post("/dairy/cities/");
  return response.data;
};

// ------------------------
// Sales
// ------------------------

export const fetchSales = async (payload: Record<string, any>) => {
  const response = await api.post("/dairy/milk-sales/", payload);
  return response.data;
};

export const milkSold = async (payload: Record<string, any>) => {
  const response = await api.post("/dairy/milk-sale/", payload);
  return response.data;
};

// Export axios instance if needed elsewhere
export default api;
