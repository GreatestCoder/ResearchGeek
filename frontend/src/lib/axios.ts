import axios from "axios";


const apiClient = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8001",
    headers: { "Content-Type": "application/json" }, timeout: 180000,
});

export default apiClient;