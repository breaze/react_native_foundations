import { StyleSheet, View } from "react-native";
import ContenedorFormulario from "./(inicio)/ContenedorFormulario";
export default function SegundoTabComponent() {
    return (
        <View style={styles.container}>
            <ContenedorFormulario />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
    }
});