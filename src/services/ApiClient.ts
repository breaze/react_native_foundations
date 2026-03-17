import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

const BASE_URL = process.env.EXPO_PUBLIC_API_BIBLIOTECA;
const DEFAULT_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzaW1vbiIsInJvbGVzIjpbIlJPTEVfQURNSU4iXSwiaWF0IjoxNzczNzA3MzcyLCJleHAiOjE3NzM3OTM3NzJ9.TguL8lecbsUlseDtVdoGrJ1kRRiv8mDdHdaImkyxNq8";

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

    async get<T>(endpoint: string, useToken: boolean = false, config?: AxiosRequestConfig): Promise<T> {
        const res = await this.client.get<T>(endpoint, { ...config, headers: { ...this.buildHeaders(useToken), ...config?.headers } });
        return res.data;
    }
    async post<T, K>(endpoint: string, body: K, useToken: false, config?: AxiosRequestConfig): Promise<T> {
        const res = await this.client.post<T>(endpoint, body, {
            ...config,
            headers: {
                ...this.buildHeaders(useToken),
                ...config?.headers
            }
        });
        return res.data;
    }


    async put<T>(endpoint: string, body: unknown, useToken: false, config?: AxiosRequestConfig): Promise<T> {
        const res = await this.client.put<T>(endpoint, body, {
            ...config,
            headers: {
                ...this.buildHeaders(useToken),
                ...config?.headers
            }
        });
        return res.data;
    }

    async patch<T>(endpoint: string, body: unknown, useToken: false, config?: AxiosRequestConfig): Promise<T> {
        const res = await this.client.patch<T>(endpoint, body, {
            ...config,
            headers: {
                ...this.buildHeaders(useToken),
                ...config?.headers
            }
        });
        return res.data;
    }

    async delete<T>(endpoint: string, useToken: false, config?: AxiosRequestConfig): Promise<T> {
        const res = await this.client.delete<T>(endpoint, {
            ...config,
            headers: {
                ...this.buildHeaders(useToken),
                ...config?.headers
            }
        });
        return res.data;
    }

}

export const apiClient = new ApiClient();