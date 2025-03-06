import axios from "axios";

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "/api/rawg-proxy",
  params: {
    key: import.meta.env.VITE_RAWG_API_KEY,
  },
});

export default apiClient;
