import {ActivityIndicator, Text, TouchableOpacity, View} from "react-native";
import {Image} from "@rneui/themed";
import React from "react";
import {styles} from "../styles";
const apiUrl = process.env.API_URL;


export default function RenderPlace(props){
    const { place, navigation } = props
    const { place_id, id, files, name, description } = place.item;
    const goToPlato = () => {
        navigation.navigate('place', {place: place});
    }
    return(
        <TouchableOpacity key={id + place_id}  onPress={() => goToPlato()}>
            <View style={styles.viewPlace} >
                <View style={styles.viewPlaceImage}>
                    <Image
                        resizeMode="cover"
                        PlaceholderContent={<ActivityIndicator color="#000"/>}
                        source={
                            files ? { uri : `${apiUrl}/file/${files[0].file}` } : require("../../../assets/default-image.png")
                        }
                        style={styles.imagePlace}
                    />
                </View>
                <View>
                    <Text>{name}</Text>
                    <Text>{description.substr(0, 36)}...</Text>
                </View>

            </View>
        </TouchableOpacity>
    )
}