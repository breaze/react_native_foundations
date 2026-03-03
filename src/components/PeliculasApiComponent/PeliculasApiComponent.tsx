import { Image, Text, View } from "react-native";
export default function PeliculasApiComponent(props: { pelicula: any }) {
    const peliculaApi = props.pelicula;
    return (
        <View>
            <Text>{peliculaApi.title}</Text>
            <Text>{peliculaApi.id}</Text>
            <Image
                source={{ uri: peliculaApi.image_url }}
                style={{ width: 100, height: 100 }}
            />
        </View>

    );
}