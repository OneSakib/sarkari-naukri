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
  const response = await api.get("/posts/dashboard/");
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
// Home Page
// ------------------------

export const fetchTopbar = async () => {
  const response = await api.get("/posts/top-bar/");
  return response.data;
};
export const fetchLatestJobs = async () => {
  const response = await api.get("/posts/latest-jobs/");
  return response.data;
};
export const fetchResults = async () => {
  const response = await api.get("/posts/results/");
  return response.data;
};
export const fetchAdmitCards = async () => {
  const response = await api.get("/posts/admit-cards/");
  return response.data;
};
export const fetchAnswerKeys = async () => {
  const response = await api.get("/posts/answer-keys/");
  return response.data;
};
export const fetchSyllabys = async () => {
  const response = await api.get("/posts/syllabus/");
  return response.data;
};
export const fetchAdmission = async () => {
  const response = await api.get("/posts/admission/");
  return response.data;
};
export const fetchCertificateVerification = async () => {
  const response = await api.get("/posts/certificate-verification/");
  return response.data;
};
export const fetchImportants = async () => {
  const response = await api.get("/posts/importants/");
  return response.data;
};
// ------------------------
// Home Page Post APIS
// ------------------------
export const fetchTopbarP = async (payload: any) => {
  const response = await api.post("/posts/top-bar/", payload);
  return response.data;
};
export const fetchLatestJobsP = async (payload: any) => {
  const response = await api.post("/posts/latest-jobs/", payload);
  return response.data;
};
export const fetchResultsP = async (payload: any) => {
  const response = await api.post("/posts/results/", payload);
  return response.data;
};
export const fetchAdmitCardsP = async (payload: any) => {
  const response = await api.post("/posts/admit-cards/", payload);
  return response.data;
};
export const fetchAnswerKeysP = async (payload: any) => {
  const response = await api.post("/posts/answer-keys/", payload);
  return response.data;
};
export const fetchSyllabysP = async (payload: any) => {
  const response = await api.post("/posts/syllabus/", payload);
  return response.data;
};
export const fetchAdmissionP = async (payload: any) => {
  const response = await api.post("/posts/admission/", payload);
  return response.data;
};
export const fetchCertificateVerificationP = async (payload: any) => {
  const response = await api.post("/posts/certificate-verification/", payload);
  return response.data;
};
export const fetchImportantsP = async (payload: any) => {
  const response = await api.post("/posts/importants/", payload);
  return response.data;
};

// Export axios instance if needed elsewhere
export default api;
