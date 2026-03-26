import { useAuth } from "@/src/context/AuthContext";
import { LoginInDTO } from "@/src/dtos/LoginInDTO";
import { LoginOutDTO } from "@/src/dtos/LoginOutDTO";
import { apiClient } from "@/src/services/ApiClient";
import { asyncStorageService } from "@/src/services/AsyncStorageService";
import { secureStoreService } from "@/src/services/SecurestoreService";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
export default function Index() {
  const router = useRouter();
  const [visible, setVisible] = useState(false);
  const [nombre, setNombre] = useState('');
  const [storageResult, setStorageResult] = useState<string | null>(null);
  const [secureStore, setSecureStore] = useState<string | null>(null);
  const STORAGE_KEY = "prueba_async";
  const { logout } = useAuth();

  const handleLogin = async () => {
    const body: LoginInDTO = {
      username: "simon",
      password: "admin123"
    }
    const response = await apiClient.post<LoginOutDTO, LoginInDTO>("/auth/login", body, false);
    await secureStoreService.set<LoginOutDTO>("auth_session", response);
    const saved = await secureStoreService.get<LoginOutDTO>("auth_session");
    setSecureStore(saved ? saved.token : null);

  }

  const handleSet = async () => {
    await asyncStorageService.set(STORAGE_KEY, "Hola desde el AsyncStorage");
    setStorageResult("Valor guardado");
  }

  const handleGet = async () => {
    const value = await asyncStorageService.get<string>(STORAGE_KEY);
    if (value === null) return;
    setStorageResult(value);
  }

  const handleClean = async () => {
    await asyncStorageService.clear();
    setStorageResult("Async Storage Limpio");
  }

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
      <Text style={{ fontSize: 40 }}>Async Storage</Text>
      <TouchableOpacity onPress={handleSet}><Text style={{ fontSize: 30 }}>Guardar</Text></TouchableOpacity>
      <TouchableOpacity onPress={handleGet}><Text style={{ fontSize: 30 }}>Obtener</Text></TouchableOpacity>
      <TouchableOpacity onPress={handleClean}><Text style={{ fontSize: 30 }}>Limpiar</Text></TouchableOpacity>
      {storageResult && <Text style={{ fontSize: 30 }}> {storageResult}</Text>}

      <Text style={{ fontSize: 40 }}>Secure Storage</Text>
      <TouchableOpacity onPress={handleLogin}><Text style={{ fontSize: 30 }}>Iniciar sesion</Text></TouchableOpacity>
      {secureStore && <Text style={{ fontSize: 30 }}> {secureStore}</Text>}
      <TouchableOpacity onPress={logout}>
        <Text>Cerrar sesion</Text>
      </TouchableOpacity>
    </View >
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
