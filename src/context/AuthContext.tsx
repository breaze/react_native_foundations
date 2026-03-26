import * as Securestore from "expo-secure-store";
import { createContext, useContext, useEffect, useState } from "react";
const TOKEN_KEY = "auth_token";

type AuthContextType = {
    token: string | null;
    isLoading: boolean;
    login: (token: string) => Promise<void>;
    logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [token, setToken] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        Securestore.getItemAsync(TOKEN_KEY).then((stored) => {
            setToken(stored)
            setIsLoading(false)
        });
    }, []);

    const login = async (newToken: string) => {
        await Securestore.setItem(TOKEN_KEY, newToken);
        setToken(newToken);
    }

    const logout = async () => {
        await Securestore.deleteItemAsync(TOKEN_KEY);
        setToken(null)
    }

    return (
        <AuthContext.Provider value={{ token, isLoading, login, logout }}  >
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);