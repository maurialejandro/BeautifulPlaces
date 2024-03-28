import React, {useEffect, useState} from "react";
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
import {useAuthContext} from "../../context/AuthContext";
import {Loading} from "../../components/Elements/Loading";
import NotLogged from "../../components/Places/NotLogged";
import NotPlaces from "../../components/Places/NotPlaces";

export function Ranking(){
    const places = usePlacesRankingContext();
    const addPlaces = useAddPlacesRankingContext();
    const user = useAuthContext();
    const [ isLoading, setIsLoading ] = useState(true);
    useEffect(() => {
        (async () => {
            if(!places[0].name && user.isLogged === true){
                await getPlacesRankingApi();
            }
            setIsLoading(false);
        })();
    }, []);
    const getPlacesRankingApi = async () => {
        const res = await getAllPlacesRanking();
        if(res.status === 200){
            await addPlaces(res.places);
            setIsLoading(false);
            return;
        }
        myToast('Algo sucedió');
    }
    return (
        <ScrollView key={2} >
            {
                (isLoading === true) ? (
                    <Loading text={"Cargando lugares"} />
                ) : places[0].name ? (
                    map(places, (place, index) => (
                        <RankingPlace
                            key={index}
                            place={place}
                            index={index}
                        />
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