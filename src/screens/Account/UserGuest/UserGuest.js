import React from "react"
import { View, Text, Image } from "react-native";

export function UserGuest() {
    return (
        <View>
            <Image source={require('beautiful-places,.png')} />
            <Text>UserGuest</Text>
        </View>
    )
}
