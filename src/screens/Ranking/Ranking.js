import React, {useEffect} from "react";
import {View, Text, ScrollView} from "react-native";
import {
    useAddPlacesContext,
    useAddPlacesRanking, useAddPlacesRankingContext,
    usePlacesContext,
    usePlacesRankingContext
} from "../../context/PlaceContext";
import {map} from "lodash";
import {getAllPlaces, getAllPlacesRanking, getPlaces} from "../../api/apiPlace";
import RankingPlace from "../../components/Explore/RankingPlace";
import {myToast} from "../../components/Elements/myToast";

export function Ranking(){
    const places = usePlacesRankingContext();
    const addPlaces = useAddPlacesRankingContext();
    useEffect(() => {
        (async () => {
            if(!places[0].name){
                await getPlacesRankingApi();
            }
        })();
    }, []);
    const getPlacesRankingApi = async () => {
        const res = await getAllPlacesRanking();
        console.log(res, "RANKING");
        if(res.status === 200){
            await addPlaces(res.places);
            return;
        }
        myToast('Algo sucedió');
    }
    return (
        <ScrollView key={2} >
            {
                places[0].name ? (
                    map(places, (place, index) => (
                        <RankingPlace
                            key={index}
                            place={place}
                            index={index}
                        />
                    ))
                ) : (
                    <Text> No Places </Text>
                )
            }
        </ScrollView>
    )
}