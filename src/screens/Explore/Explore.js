import React, {useEffect, useState} from "react";
import {View} from "react-native";
import {getAllPlaces} from "../../api/apiPlace";
import {useAddPlacesContext, usePlacesContext} from "../../context/PlaceContext";
import {Loading} from "../../components/Elements/Loading";
import {styles} from "../../components/styles";
import {useIsFocused, useNavigation} from "@react-navigation/native";
import {ListAllPlaces} from "../../components/Explore/ListAllPlaces";
import CustomSearchBar from "../../components/Explore/CustomSearchBar";

export default function Explore(){
    const addPlaces = useAddPlacesContext();
    const places = usePlacesContext();
    const navigation = useNavigation();
    const [ isVisibleLoading, setIsVisibleLoading ] = useState(true);
    const isFocused = useIsFocused();
    useEffect(() => {
        (async () => {
            await getAllPlacesApi();
        })()
    }, [isFocused]);
    const getAllPlacesApi = async () => {
        const res = await getAllPlaces();

        setIsVisibleLoading(false);
        if(res.status === 200){
            await addPlaces(res.places);
        }
    }
    return(
        <View style={styles.viewPlacesBody} >
            <CustomSearchBar />
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