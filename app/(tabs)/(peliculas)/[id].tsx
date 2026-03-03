import { StackActions } from "@react-navigation/native";
import { Stack, useFocusEffect, useLocalSearchParams, useNavigation } from "expo-router";
import { useCallback } from "react";
import { Text, View } from "react-native";

export default function PeliculaDetalle() {
    const { id, titulo } = useLocalSearchParams();
    const navigation = useNavigation();
    useFocusEffect(
        useCallback(() => {
            return () => {
                if (navigation.canGoBack()) {
                    navigation.dispatch(StackActions.popToTop());
                }
            }
        }, [navigation])
    );
    return (
        <View>
            <Stack.Screen
                options={{
                    title: titulo as string || "Detalle",
                    headerBackTitle: ""
                }}
            />
            <View>
                <Text>{id}</Text>
                <Text>{titulo}</Text>
                <Text>Descripción de la pelicula "{titulo}"</Text>
            </View>

        </View>
    );
}