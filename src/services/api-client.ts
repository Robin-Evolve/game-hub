import axios, { AxiosRequestConfig } from "axios";

export interface DataResponse<T> {
  count: number;
  next?: string | null;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "/api/rawg-proxy",
  params: {
    key: import.meta.env.VITE_RAWG_API_KEY,
  },
});

class APIClient<T> {
  endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll(config: AxiosRequestConfig) {
    return axiosInstance
      .get<DataResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
  }
}

export default APIClient;
