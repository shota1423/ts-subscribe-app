import axios from "axios";
import { v7 as uuid7 } from "uuid";

export const axiosInstance = axios.create({
  baseURL: process.env.BASE_API_ENDPOINT,
  timeout: 10000,
  headers: {
    "x-requestId": uuid7(),
  },
});

export default axiosInstance;
