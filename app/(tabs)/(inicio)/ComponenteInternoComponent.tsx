
import PeliculasApiComponent from "@/src/components/PeliculasApiComponent/PeliculasApiComponent";
import axios from 'axios';
import { useEffect, useState } from "react";
import { FlatList, View } from "react-native";
export default function ComponenteInternoComponent() {
    const [data, setData] = useState<any>([]);
    useEffect(() => {
        const url = process.env.EXPO_PUBLIC_API_URL;
        const fetchData = async () => {
            try {
                const response = await axios.get(`${url}`);
            } catch (error) {
                console.log("Error: ", error);
            }
        }
        fetchData();
    }, []);
    return (
        <View>
            <FlatList
                data={data}
                renderItem={({ item }) => <PeliculasApiComponent
                    pelicula={item} />}
                keyExtractor={item => item.id}
            />
        </View>
    );
}