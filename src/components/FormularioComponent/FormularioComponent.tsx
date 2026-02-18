import { StyleSheet, Text, TextInput, View } from "react-native";

export default function FormularioComponent() {
    return (
        <View>
            <Text style={styles.titulo}>Formulario</Text>
            <View>
                <TextInput
                    style={styles.input}
                    placeholder="Nombre"
                    placeholderTextColor="#888"

                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    titulo: {
        fontSize: 20,
        fontWeight: "bold",
        alignSelf: "center",
    },
    input: {
        padding: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#ccc",
        marginVertical: 10,
        width: "80%",
        alignSelf: "center"
    }
})