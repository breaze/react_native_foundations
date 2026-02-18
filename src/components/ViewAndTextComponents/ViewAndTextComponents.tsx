import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function ViewAndTextComponent() {
    return (
        <View
            style={styles.contenedor}
        >
            <ScrollView
                horizontal={false}
                indicatorStyle={"black"}
            >
                <Text
                    style={styles.encabezado}
                >Hola Mundo{"\n"}
                    <Text
                        style={styles.anidado}
                    >Texto dentro del texto</Text>
                </Text>
                <Text
                    //numberOfLines={1}
                    style={styles.lorem}
                >
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit repellendus laudantium aperiam quas qui molestiae quibusdam natus, sed officiis nam non facilis iste officia explicabo nesciunt ipsum! Beatae, cumque vero.
                </Text>
                <Text>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus autem, modi iste corporis nemo, voluptatem officia tempore earum ratione totam explicabo facilis at aut hic voluptate, reiciendis voluptates vero accusantium?
                </Text>
                <Text>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus autem, modi iste corporis nemo, voluptatem officia tempore earum ratione totam explicabo facilis at aut hic voluptate, reiciendis voluptates vero accusantium?
                </Text>
                <Text>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus autem, modi iste corporis nemo, voluptatem officia tempore earum ratione totam explicabo facilis at aut hic voluptate, reiciendis voluptates vero accusantium?
                </Text>
                <Text>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus autem, modi iste corporis nemo, voluptatem officia tempore earum ratione totam explicabo facilis at aut hic voluptate, reiciendis voluptates vero accusantium?
                </Text>
                <Text>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus autem, modi iste corporis nemo, voluptatem officia tempore earum ratione totam explicabo facilis at aut hic voluptate, reiciendis voluptates vero accusantium?
                </Text>
                <Text>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus autem, modi iste corporis nemo, voluptatem officia tempore earum ratione totam explicabo facilis at aut hic voluptate, reiciendis voluptates vero accusantium?
                </Text>
                <Text>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus autem, modi iste corporis nemo, voluptatem officia tempore earum ratione totam explicabo facilis at aut hic voluptate, reiciendis voluptates vero accusantium?
                </Text>
                <Text>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus autem, modi iste corporis nemo, voluptatem officia tempore earum ratione totam explicabo facilis at aut hic voluptate, reiciendis voluptates vero accusantium?
                </Text>
                <Text>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus autem, modi iste corporis nemo, voluptatem officia tempore earum ratione totam explicabo facilis at aut hic voluptate, reiciendis voluptates vero accusantium?
                </Text>
                <Text>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus autem, modi iste corporis nemo, voluptatem officia tempore earum ratione totam explicabo facilis at aut hic voluptate, reiciendis voluptates vero accusantium?
                </Text>
                <Image
                    source={require("@/assets/images/imagen.png")}
                    style={{
                        width: 300,
                        height: 100
                    }}
                />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    encabezado: {
        fontSize: 40,
        fontWeight: "bold",
        fontStyle: "normal",
        alignSelf: "center",
        color: "#46465cff",
        fontFamily: "ShadowIntoLight",
    },
    anidado: {
        color: "#353b37ff",
        fontSize: 25
    },
    contenedor: {
        flex: 1,
        paddingTop: 30,
        backgroundColor: "#59b7baff"
    },
    lorem: {
        margin: 20,

    }
});