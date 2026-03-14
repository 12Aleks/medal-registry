import axios from "axios";

const isServer = typeof window === 'undefined';

const baseURL = isServer
    ? "http://api:5000"
    : (process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:5000");


export const api = axios.create({
    baseURL: baseURL,
    headers: {
        "Content-Type": "application/json",
    },
}); 