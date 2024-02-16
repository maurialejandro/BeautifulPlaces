import {ActivityIndicator, Text, TouchableOpacity, View} from "react-native";
import {Image} from "@rneui/themed";
import React from "react";

export default function RenderPlace(props){
    const { place, navigation } = props

    console.log(place)
    const goToPlato = () => {
        console.log('HERE');
    }
    return(
        <TouchableOpacity onPress={() => goToPlato()}>
            <View>
                <View>
                    <Text>{place.item.name}</Text>
                </View>
                <View>
                    <Text>{place.item.description}</Text>
                </View>

            </View>
        </TouchableOpacity>
    )
}