import { FlatList, StyleSheet, View } from "react-native";
import PeliculaComponent from "../PeliculaComponent/PeliculaComponent";

export default function FlatListComponent() {
    const DATA = [
        { clave: '1', titulo: 'La piel que habito', imagen: require('@/assets/images/la_piel_que_habito.jpg') },
        { clave: '2', titulo: 'La vieja guardia', imagen: require('@/assets/images/vieja_guardia.jpeg') },
        { clave: '3', titulo: 'El rey arturo', imagen: require('@/assets/images/rey_arturo.jpg') },
        { clave: '4', titulo: 'La piel que habito', imagen: require('@/assets/images/la_piel_que_habito.jpg') },
        { clave: '5', titulo: 'La vieja guardia', imagen: require('@/assets/images/vieja_guardia.jpeg') },
        { clave: '6', titulo: 'El rey arturo', imagen: require('@/assets/images/rey_arturo.jpg') },
        { clave: '7', titulo: 'La piel que habito', imagen: require('@/assets/images/la_piel_que_habito.jpg') },
        //{ clave: '8', titulo: 'La vieja guardia', imagen: require('@/assets/images/vieja_guardia.jpeg') },

    ]
    return (
        <View style={styles.contenedor}>
            <FlatList
                data={DATA}
                renderItem={({ item }) => <PeliculaComponent
                    titulo={item.titulo}
                    clave={item.clave}
                    imagen={item.imagen} />}
                keyExtractor={item => item.clave}
                numColumns={2}
                columnWrapperStyle={{
                    paddingHorizontal: 10,
                    gap: 10,
                    justifyContent: "flex-start",
                }}
            >
            </FlatList>
        </View>
    );

}
const styles = StyleSheet.create({
    contenedor: {
        flex: 1
    }
})