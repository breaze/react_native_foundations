import { AuthProvider, useAuth } from "@/src/context/AuthContext";
import { useFonts } from "expo-font";
import { Stack, useRouter, useSegments } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();


function AuthRedirect() {
  const { token, isLoading } = useAuth();
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    if (isLoading) return;
    const inAuthGroup = segments[0] === "(auth)"
    if (!token && !inAuthGroup) router.replace("/(auth)/LoginComponent")
    else if (token && inAuthGroup) router.replace("/(tabs)")
  }, [token, isLoading, segments]);
  return null;
}

export default function RootLayout() {
  const [loaded, error] = useFonts({
    'ShadowIntoLight': require("@/assets/fonts/ShadowsIntoLight-Regular.ttf")
  });
  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);
  if (!loaded || error) {
    return null;
  }
  return (
    <AuthProvider>
      <AuthRedirect />
      <Stack>
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false, headerTintColor: "red" }} />
      </Stack>
    </AuthProvider>
  );
}
