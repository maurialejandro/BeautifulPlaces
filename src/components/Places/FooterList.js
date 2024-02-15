import {ActivityIndicator, Text, View} from "react-native";
import React from "react";

function FooterList(props){
    const { isLoading } = props
    if(isLoading){
        return (
            <View>
                <ActivityIndicator size="large" />
            </View>
        )
    }else{
        return(
            <View>
                <Text>No quedan platos que mostrar</Text>
            </View>
        )
    }
}
