
import { Stack } from "expo-router";
export default function HomeLayout() {
    return (
        <Stack
            screenOptions={{
                headerShown: false,
                headerTitle: "",
            }}
        >
            <Stack.Screen name="index"

            />
            <Stack.Screen name="ComponenteInternoComponent"
                options={{
                    headerShown: true,
                }}
            />
        </Stack>
    );
}