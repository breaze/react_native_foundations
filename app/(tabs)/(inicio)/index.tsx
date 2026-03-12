import { useRouter } from "expo-router";
import { useState } from "react";
import { Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
export default function Index() {
  const router = useRouter();
  const [visible, setVisible] = useState(false);
  const [nombre, setNombre] = useState('');
  return (
    <View
      style={{
        flex: 1,
        paddingTop: 40,
        //justifyContent: "center",
        //alignItems: "center",
      }}
    >

      {/*<ViewAndTextComponent />*/}
      {/*<AccionablesComponent />*/}
      {/*<FlatListComponent />*/}
      {/*<FormularioComponent />*/}
      <TouchableOpacity
        onPress={() => router.push("/ComponenteInternoComponent")}
      >
        <Text>Redireccionar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => { setVisible(true) }}
      >
        <Text>Modal</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => router.push("/PostComponent")}
      >
        <Text
          style={styles.postButton}
        >Post</Text>
      </TouchableOpacity>
      <Modal
        visible={visible}
        transparent={true}
        onRequestClose={() => setVisible(false)}
        animationType="fade"
      >
        <View style={styles.modalPrincipal}>
          <View style={styles.contenidoModal}>
            <Text>Este es el modal</Text>
            <TextInput
              style={styles.input}
              placeholder="Nombre"
              value={nombre}
              onChangeText={setNombre}
            />
            <TouchableOpacity
              onPress={() => { setVisible(false) }}
            >
              <Text>Cerrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <Text>{nombre}</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  modalPrincipal: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contenidoModal: {
    width: 300,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10
  },
  input: {
    padding: 10,
    borderRadius: 5,
    margin: 10,
    borderColor: 'black',
    borderWidth: 1
  },
  postButton: {
    fontSize: 40
  }
});
