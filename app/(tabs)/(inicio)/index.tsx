import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
export default function Index() {
  const router = useRouter();
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

    </View>
  );
}
