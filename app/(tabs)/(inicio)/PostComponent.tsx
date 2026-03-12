import axios from 'axios';
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
export default function PostComponent() {
    const API = process.env.EXPO_PUBLIC_API_BIBLIOTECA;
    const hacerPost = async () => {
        try {
            const autor = {
                "nombre": "Pablito",
                "nacionalidad": "Colombiana"
            }
            console.log(`${API}/autores`);
            const response = await axios.post(`${API}/autores`, autor);
            console.log("Autor guardado exitosamente:", response.data);
        } catch (error) {
            console.log("Error al guardar el autor:", error);
        }
    }
    const hacerPost2 = async () => {
        try {
            const token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzaW1vbiIsInJvbGVzIjpbIlJPTEVfQURNSU4iXSwiaWF0IjoxNzczMjc3OTQ2LCJleHAiOjE3NzMzNjQzNDZ9.4Z19ySQ3g39k3akQoTfCeRk7QRMrZGTdidf2AAtDPW8";
            const autor = {
                "nombre": "Julian",
                "nacionalidad": "Colombiana"
            }
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
            console.log(`${API}/autores`);
            const response = await axios.post(`${API}/autores`, autor, config);
            console.log("Autor guardado exitosamente:", response.data);
        } catch (error) {
            console.log("Error al guardar el autor:", error);
        }
    }

    return (
        <View
            style={styles.postContainer}
        >
            <TouchableOpacity
                onPress={hacerPost2}
            >
                <Text>Crear autor</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    postContainer: {
        paddingTop: 40
    }
});