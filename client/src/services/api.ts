import axios from "axios";
import { Desktop } from "./types";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Optional: Attach token if needed
api.interceptors.request.use((config) => {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
});

// Api Calling
export const getDesktop = async (): Promise<Desktop[]> => {
  const res = await api.get<Desktop[]>("/posts/desktop");
  return res.data;
};
