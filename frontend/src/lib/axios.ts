import axios from "axios";

const apiClient = axios.create({
    baseURL: "https://researchgeek-production.up.railway.app",
    headers: {
        "Content-Type": "application/json",
    },
    timeout: 180000,
});

export default apiClient;