import axios, {AxiosInstance} from "axios";

export const createApi = () => {
    const isServer = typeof window === 'undefined';

    const baseURL = isServer
        ? (process.env.API_URL || "http://api:5000")
        : (process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:5000");

    return axios.create({
        baseURL,
        headers: {
            "Content-Type": "application/json",
        },
    });
};