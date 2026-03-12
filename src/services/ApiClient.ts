import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

const BASE_URL = process.env.EXPO_PUBLIC_API_BIBLIOTECA;
const DEFAULT_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzaW1vbiIsInJvbGVzIjpbIlJPTEVfQURNSU4iXSwiaWF0IjoxNzczMjc3OTQ2LCJleHAiOjE3NzMzNjQzNDZ9.4Z19ySQ3g39k3akQoTfCeRk7QRMrZGTdidf2AAtDPW8";

class ApiClient {
    private client: AxiosInstance;

    constructor() {
        this.client = axios.create({
            baseURL: BASE_URL,
            headers: {
                'Content-Type': 'application/json',
            }
        });
    }

    private buildHeaders(useToken: boolean): AxiosRequestConfig["headers"] {
        if (!useToken)
            return {};
        return { Authorization: `Bearer ${DEFAULT_TOKEN}` }
    }
}