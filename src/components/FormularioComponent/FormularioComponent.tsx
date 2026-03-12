import { Picker } from '@react-native-picker/picker';
import { useState } from 'react';
import { Alert, Keyboard, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
export default function FormularioComponent() {
    const opcionesPicker = [
        { label: "Opción 1", value: "opcion1", color: "#000" },
        { label: "Opción 2", value: "opcion2", color: "#000" },
        { label: "Opción 3", value: "opcion3", color: "#000" },
        { label: "Opción 4", value: "opcion4", color: "#000" },
        { label: "Opción 5", value: "opcion5", color: "#000" },
    ]
    const [formulario, setFomulario] = useState({
        nombre: '',
        password: '',
        numero: '',
        correo: '',
        telefono: '',
        multilinea: '',
        selector: 'opcion1'
    });
    const [errores, setErrores] = useState({
        nombre: false,
        password: false,
        numero: false,
        correo: false,
        telefono: false,
        multilinea: false,
    });
    const [enviado, setEnviado] = useState(false);

    const handleInput = (campo: string, valor: string) => {
        setFomulario({
            ...formulario,
            [campo]: valor
        });
        setErrores({
            ...errores,
            [campo]: valor === ''
        });
        setEnviado(false);
    }

    const handleSubmit = () => {
        const nuevosErrores = {
            nombre: formulario.nombre === '',
            password: formulario.password === '',
            numero: formulario.numero === '',
            correo: formulario.correo === '',
            telefono: formulario.telefono === '',
            multilinea: formulario.multilinea === '',
        }
        setErrores(nuevosErrores);
        if (nuevosErrores.nombre || nuevosErrores.password || nuevosErrores.nombre
            || nuevosErrores.correo || nuevosErrores.telefono || nuevosErrores.multilinea
        ) {
            Alert.alert("Error", "Todos los campos son obligatorios");
            setEnviado(false);
        } else {
            setEnviado(true);
        }
    }

    return (
        <ScrollView>
            <Pressable
                onPress={() => Keyboard.dismiss()} accessible={false}
            >
                <View>
                    <Text style={styles.titulo}>Formulario</Text>
                    <View>
                        <TextInput
                            style={[styles.input, errores.nombre && styles.inputError]}
                            placeholder="Nombre"
                            placeholderTextColor="#888"
                            value={formulario.nombre}
                            onChangeText={(valor) => handleInput('nombre', valor)}

                        />
                        <TextInput
                            style={[styles.input, errores.password && styles.inputError]}
                            placeholder="Password"
                            placeholderTextColor="#888"
                            secureTextEntry={true}
                            autoCorrect={false}
                            autoCapitalize="none"
                            value={formulario.password}
                            onChangeText={(valor) => handleInput('password', valor)}
                        />
                        <TextInput
                            style={[styles.input, errores.numero && styles.inputError]}
                            placeholder="Numero"
                            placeholderTextColor="#888"
                            keyboardType="numeric"
                            value={formulario.numero}
                            onChangeText={(valor) => handleInput('numero', valor)}
                        />
                        <TextInput
                            style={[styles.input, errores.correo && styles.inputError]}
                            placeholder="Correo"
                            placeholderTextColor="#888"
                            keyboardType="email-address"
                            value={formulario.correo}
                            onChangeText={(valor) => handleInput('correo', valor)}
                        />
                        <TextInput
                            style={[styles.input, errores.telefono && styles.inputError]}
                            placeholder="Telefono"
                            placeholderTextColor="#888"
                            keyboardType="phone-pad"
                            value={formulario.telefono}
                            onChangeText={(valor) => handleInput('telefono', valor)}
                        />
                        <TextInput
                            style={[styles.input, errores.multilinea && styles.inputError]}
                            placeholder="Mulilinea"
                            placeholderTextColor="#888"
                            multiline={true}
                            value={formulario.multilinea}
                            onChangeText={(valor) => handleInput('multilinea', valor)}
                        />
                        <Picker
                            style={{ width: "80%", alignSelf: "center" }}
                            selectedValue={formulario.selector}
                            onValueChange={(valor) => handleInput('selector', valor)}
                        >
                            {opcionesPicker.map((opcion) => (
                                <Picker.Item
                                    key={opcion.value}
                                    label={opcion.label}
                                    value={opcion.value}
                                    color={opcion.color}
                                />
                            ))}
                        </Picker>
                        <Pressable
                            style={styles.boton}
                            onPress={handleSubmit}
                        >
                            <Text style={{ textAlign: "center" }}>Enviar</Text>
                        </Pressable>
                        {enviado && (<Text>{formulario.nombre}</Text>)}
                        {enviado && (<Text>{formulario.password}</Text>)}
                        {enviado && (<Text>{formulario.numero}</Text>)}
                        {enviado && (<Text>{formulario.correo}</Text>)}
                        {enviado && (<Text>{formulario.telefono}</Text>)}
                        {enviado && (<Text>{formulario.multilinea}</Text>)}
                        {enviado && (<Text>{formulario.selector}</Text>)}
                    </View>
                </View>
            </Pressable>
        </ScrollView>
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
    },
    boton: {
        backgroundColor: "red",
        padding: 10,
        width: "80%",
        alignSelf: "center",
        borderRadius: 5,
    },
    inputError: {
        borderColor: 'red',
        backgroundColor: '#fff5f5'
    }
})