// api/client.ts
import axios from "axios";
import { BACKEND_URL } from "../config";
import { notify } from "../utils/toast";

export const api = axios.create({ baseURL: BACKEND_URL });

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = token.startsWith("Bearer ") ? token : `Bearer ${token}`;
  return config;
});

api.interceptors.response.use(
  (res) => res,
  (error) => {
    const status = error?.response?.status;
    // Show one toast for common server-side failures
    if (status >= 500) {
      notify.error("Server error. Please try again later.", { toastId: "server-5xx" });
    } else if (status === 401) {
      notify.warn("Session expired. Please sign in again.", { toastId: "unauthorized" });
    } else if (status === 403) {
      notify.warn("You don’t have permission to do that.", { toastId: "forbidden" });
    }
    return Promise.reject(error);
  }
);
