import React, {useEffect, useState} from "react";
import { View, Text } from "react-native";
import {getPlaceFavorite} from "../../api/apiFavorite";

export function Favorites(){
    const [ places, setPlaces ] = useState();
    useEffect(() => {
        ((async() => {
            const res = await getPlaceFavorite();
            console.log(res);
        })())
    }, []);
    return (
        <View>
            <Text> Favorites stack </Text>
        </View>
    )
}