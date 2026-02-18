import FormularioComponent from "@/src/components/FormularioComponent/FormularioComponent";
import { View } from "react-native";
export default function Index() {
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
      <FormularioComponent />
    </View>
  );
}
