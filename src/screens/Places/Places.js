import React, {useEffect, useState} from "react"
import { View, Text } from "react-native";
import {useAuthContext} from "../../context/AuthContext";
import { Icon } from '@rneui/themed';
import {styles} from "../../components/styles";
import {useNavigation} from "@react-navigation/native";
import ListPlaces from "../../components/Places/ListPlaces";
import {getPlaces} from "../../api/apiPlace";
import {useAddPlaceContext, usePlaceContext} from "../../context/PlaceContext";
import {Loading} from "../../components/Elements/Loading";

export function Places(){

    const user = useAuthContext();
    const navigation = useNavigation();
    const places = usePlaceContext();
    const addPlaces = useAddPlaceContext();

    useEffect(() => {
        (async() => {
            if(user.isLogged){
                setTimeout(async () => {
                    await getPlacesBack();
                }, 1000)
            }
        })()
    }, []);

    const getPlacesBack = async () => {
        const res = await getPlaces();
        if(res.places.length === 0){
            return;
        }
        if(res.status === 200){
            await addPlaces(res.places);
        }
    }
    return (
        <View
            style={styles.viewPlacesBody}
        >{
            places[0].name ? (
                <ListPlaces
                    nav={navigation}
                />
            ) : (
                <Loading text={"Cargando lugares"} />
            )
        }
            {
                user.isLogged && (
                    <Icon
                        reverse
                        type="material-community"
                        name="plus"
                        style={styles.iconPlaces}
                        color="#FFB534"
                        onPress={() => navigation.navigate('add-place')}
                    />
                )
            }
        </View>
    )
}