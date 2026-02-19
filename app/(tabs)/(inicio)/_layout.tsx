
import { Stack } from "expo-router";
export default function HomeLayout() {
    return (
        <Stack
            screenOptions={{
                headerShown: true,
                headerTitle: "",
            }}
        >
            <Stack.Screen name="index"
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen name="ComponenteInternoComponent"
                options={{
                    headerShown: false,
                }}
            />
        </Stack>
    );
}