import React, {useEffect, useState} from "react";
import {ScrollView, Text} from "react-native";
import {getPlaceFavorite} from "../../api/apiFavorite";
import {PlaceFavorite} from "../../components/Favorites/PlaceFavorite";
import {useAddPlacesFavoriteContext, usePlacesFavoriteContext} from "../../context/FavoritesPlaceContext";
import {myToast} from "../../components/Elements/myToast";
import {map} from "lodash";
import {Loading} from "../../components/Elements/Loading";
import {useAuthContext} from "../../context/AuthContext";
import NotLogged from "../../components/Places/NotLogged";
import NotPlaces from "../../components/Places/NotPlaces";
import { useIsFocused } from "@react-navigation/native";

export function Favorites(){
    const isFocused = useIsFocused();
    const placesFavorites = usePlacesFavoriteContext();
    const addPlacesFavorite = useAddPlacesFavoriteContext();
    const [isLoading, setIsLoading ] = useState(null);
    const user = useAuthContext();
    useEffect(() => {
        ((async() => {
            if(user.isLogged){
                await getFavoritePlace();
            }
            setIsLoading(false);
        })())
    }, [isFocused]);
    const getFavoritePlace = async () => {
        setIsLoading(true);
        const res = await getPlaceFavorite();
        setIsLoading(false);
        if(res.status === 200){
            await addPlacesFavorite(res.placesFavorites);
            return
        }
        myToast('Algo Paso');
    }
    return (
        <ScrollView key={1}>
            {
                (isLoading === true ) ? (
                    <Loading text={"Cargando lugares"} />
                ) : placesFavorites[0].name ? (
                    map(placesFavorites, (place, index) => (
                        <PlaceFavorite index={index} place={place} />
                    ))
                ) : (user.isLogged === true) ? (
                    <NotPlaces />
                ) : (
                    <NotLogged />
                )
            }
        </ScrollView>
    )
}