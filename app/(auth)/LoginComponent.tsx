import { useAuth } from "@/src/context/AuthContext";
import { LoginInDTO } from "@/src/dtos/LoginInDTO";
import { LoginOutDTO } from "@/src/dtos/LoginOutDTO";
import { apiClient } from "@/src/services/ApiClient";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Alert } from "react-native";

import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";


export default function LoginComponent() {
    const { login } = useAuth();

    const handleLogin = async () => {
        try {
            const response = await apiClient.post<LoginOutDTO, LoginInDTO>("/auth/login", form);
            await login(response.token);
        } catch {
            Alert.alert("Error", "Credenciales incorrectas");
        }
    }

    const router = useRouter();
    const [form, setForm] = useState({ username: "", password: "" });

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Iniciar sesión</Text>

            <TextInput
                style={styles.input}
                placeholder="Usuario"
                placeholderTextColor="#999"
                autoCapitalize="none"
                value={form.username}
                onChangeText={(v) => setForm({ ...form, username: v })}
            />

            <TextInput
                style={styles.input}
                placeholder="Contraseña"
                placeholderTextColor="#999"
                secureTextEntry
                value={form.password}
                onChangeText={(v) => setForm({ ...form, password: v })}
            />

            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => router.push("/(auth)/RegisterComponent")}>
                <Text style={styles.link}>¿No tienes cuenta? Regístrate</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 24,
        backgroundColor: "#fff",
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        marginBottom: 32,
    },
    input: {
        width: "100%",
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        padding: 12,
        marginBottom: 16,
        fontSize: 16,
    },
    button: {
        width: "100%",
        backgroundColor: "#e10000",
        padding: 14,
        borderRadius: 8,
        alignItems: "center",
        marginBottom: 20,
    },
    buttonText: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 16,
    },
    link: {
        color: "#e10000",
        fontSize: 14,
    },
});
