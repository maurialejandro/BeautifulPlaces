import React, {useEffect, useState} from "react";
import {Text, View} from "react-native";
import {getAllPlaces} from "../../api/apiPlace";
import ListPlaces from "../../components/Places/ListPlaces";
import {useAddPlacesContext, usePlacesContext} from "../../context/PlaceContext";
import {Loading} from "../../components/Elements/Loading";
import {styles} from "../../components/styles";
import {useNavigation} from "@react-navigation/native";
import {ListAllPlaces} from "../../components/Places/ListAllPlaces";

export default function Explore(){
    const addPlaces = useAddPlacesContext();
    const places = usePlacesContext();
    const navigation = useNavigation();
    const [ isVisibleLoading, setIsVisibleLoading ] = useState(true);
    useEffect(() => {
        (async () => {
            await getAllPlacesApi();
        })()
    }, []);
    const getAllPlacesApi = async () => {
        const res = await getAllPlaces();
        setIsVisibleLoading(false);
        console.log(res);
        if(res.status === 200){
            await addPlaces(res.places);
        }
    }
    return(
        <View style={styles.container} >
            {
                isVisibleLoading && (
                    <Loading text={"Cargando lugares"}/>
                )
            }
            {
                places[0]?.name && (
                    <ListAllPlaces nav={navigation} />
                )
            }
        </View>
    )
}