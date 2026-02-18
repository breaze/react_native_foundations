import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

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
  return <Stack
    screenOptions={{
      title: "Welcome to Native Class One",
      headerShown: false
    }}
  />;
}
