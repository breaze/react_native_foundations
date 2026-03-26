import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { secureStoreService } from './SecurestoreService';

const BASE_URL = process.env.EXPO_PUBLIC_API_BIBLIOTECA;
const TOKEN_KEY = "auth_token";

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

    private async buildHeaders(useToken: boolean): Promise<AxiosRequestConfig["headers"]> {
        if (!useToken)
            return {};
        const token = await secureStoreService.get<string>(TOKEN_KEY);
        return { Authorization: `Bearer ${token}` }
    }

    async get<T>(endpoint: string, useToken: boolean = false, config?: AxiosRequestConfig): Promise<T> {
        const res = await this.client.get<T>(endpoint, { ...config, headers: { ...await this.buildHeaders(useToken), ...config?.headers } });
        return res.data;
    }
    async post<T, K>(endpoint: string, body: K, useToken: boolean = false, config?: AxiosRequestConfig): Promise<T> {
        const res = await this.client.post<T>(endpoint, body, {
            ...config,
            headers: {
                ...await this.buildHeaders(useToken),
                ...config?.headers
            }
        });
        return res.data;
    }


    async put<T>(endpoint: string, body: unknown, useToken: false, config?: AxiosRequestConfig): Promise<T> {
        const res = await this.client.put<T>(endpoint, body, {
            ...config,
            headers: {
                ...await this.buildHeaders(useToken),
                ...config?.headers
            }
        });
        return res.data;
    }

    async patch<T>(endpoint: string, body: unknown, useToken: false, config?: AxiosRequestConfig): Promise<T> {
        const res = await this.client.patch<T>(endpoint, body, {
            ...config,
            headers: {
                ...await this.buildHeaders(useToken),
                ...config?.headers
            }
        });
        return res.data;
    }

    async delete<T>(endpoint: string, useToken: false, config?: AxiosRequestConfig): Promise<T> {
        const res = await this.client.delete<T>(endpoint, {
            ...config,
            headers: {
                ...await this.buildHeaders(useToken),
                ...config?.headers
            }
        });
        return res.data;
    }

}

export const apiClient = new ApiClient();