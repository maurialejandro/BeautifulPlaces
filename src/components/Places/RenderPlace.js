import {ActivityIndicator, Text, TouchableOpacity, View} from "react-native";
import {Image} from "@rneui/themed";
import React from "react";

export default function RenderPlace(props){
    const { place, navigation } = props
    const goToPlato = () => {
        console.log('HERE');
    }
    return(
        <TouchableOpacity onPress={() => goToPlato()}>
            <View>
                <View>
                    <Text>IMAGE</Text>
                </View>
                <View>
                    <Text>INFO</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}