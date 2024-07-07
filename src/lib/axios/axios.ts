import axios, { AxiosInstance } from "axios";
import { v4 as uuidv4 } from "uuid";

const requestId = uuidv4();
export const axiosInstance: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_API_ENDPOINT,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    "x-requestId": requestId,
  },
});

export default axiosInstance;
