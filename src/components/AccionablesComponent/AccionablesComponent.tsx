import { Alert, Pressable, StyleSheet, Text, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";


export default function AccionablesComponent() {
    return (
        <View>
            <Pressable

                onPress={() => Alert.alert("Boton 1", "Hola")}
            >
                <Text style={styles.botones}>
                    Boton 1
                </Text>
            </Pressable>
            <TouchableOpacity
                onPress={() => Alert.alert("Boton 2", "Boton 2 presionado")}
            >
                <Text style={styles.botones}>
                    Boton 2
                </Text>
            </TouchableOpacity>
            <TouchableHighlight
                onPress={() => Alert.alert("Boton 3", "Boton 3 presionado")}
            >
                <Text style={styles.botones}>
                    Boton 3
                </Text>
            </TouchableHighlight>
            <TouchableWithoutFeedback
                onPress={() => Alert.alert("Boton 4", "Boton 4 presionado")}
            >
                <Text style={styles.botones}>
                    Boton 4
                </Text>
            </TouchableWithoutFeedback>
        </View>
    );
}
const styles = StyleSheet.create({
    botones: {
        fontSize: 40,
    }
});