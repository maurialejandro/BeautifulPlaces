import React, {useEffect} from "react";
import {View, Text, ScrollView} from "react-native";
import {useAddPlacesContext, usePlacesContext} from "../../context/PlaceContext";
import {map} from "lodash";
import {getAllPlaces, getPlaces} from "../../api/apiPlace";
import RankingPlace from "../../components/Explore/RankingPlace";

export function Ranking(){
    const places = usePlacesContext();
    const addPlaces = useAddPlacesContext();
    useEffect(() => {
        (async () => {
            // no hay lugares y si el usuario esta login entonces obtener
            if(!places[0].name){
                await getPlacesApi();
            }
        })();
    }, []);
    const getPlacesApi = async () => {
        const res = await getAllPlaces();
        console.log(res, "RANKING");
        await addPlaces(res.places);
    }
    return (
        <ScrollView>
            {map(places, (place, index) => (
                <RankingPlace
                    place={place}
                    index={index}
                />
            ))}
        </ScrollView>
    )
}