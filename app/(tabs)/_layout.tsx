import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
export default function TabsLayout() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: "red",

            }}
        >
            <Tabs.Screen
                name="(inicio)"
                options={{
                    title: "Inicio",
                    tabBarIcon: ({ color }) => <Ionicons name="home" size={24} color={color} />
                }}
            />
            <Tabs.Screen
                name="SegundoTabComponent"
                options={{
                    title: "Segundo",
                    tabBarIcon: ({ color }) => <Ionicons name="list" size={24} color={color} />
                }}
            />
            <Tabs.Screen
                name="(peliculas)"
                options={{
                    title: "Peliculas",
                    tabBarIcon: ({ color }) => <MaterialIcons name="local-movies" size={24} color={color} />
                }}
            />
        </Tabs>
    );
}