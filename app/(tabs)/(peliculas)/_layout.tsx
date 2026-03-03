import { Stack } from 'expo-router';
export default function HomePeliculasLayout() {
    return (
        <Stack>
            <Stack.Screen name="HomePeliculasComponent" options={{ headerShown: false }} />
        </Stack>
    );
}