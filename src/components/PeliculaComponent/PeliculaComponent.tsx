import { Image, ImageSourcePropType, StyleSheet, Text, View } from "react-native";

export default function PeliculaComponent(props: { titulo: string, clave: string, imagen: ImageSourcePropType }) {
    return (
        <View style={styles.contenedor}>
            <View style={styles.contenedorImagen}>
                <Image
                    style={styles.imagen}
                    source={props.imagen}
                />
            </View>
            <Text style={styles.titulo}>{props.titulo}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    titulo: {
        fontSize: 20,
        padding: 10,
    },
    contenedorImagen: {
        width: "100%",
        height: 180,
    },
    imagen: {
        width: "100%",
        height: "100%",
        resizeMode: "cover",
        overflow: "hidden"
    },
    contenedor: {
        backgroundColor: "#c0c6d7ff",
        marginVertical: 10,
        borderRadius: 10,
        flex: 0.5,
    }
})