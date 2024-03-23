import React from "react";
import {ScrollView, Text, View} from "react-native";
import {CarouselSnap} from "../../components/Elements/CarouselSnap";
import {Info} from "../../components/Places/Info";
import Header from "../../components/Explore/Header";
import RaitingFavorite from "../../components/Explore/RaitingFavorite";

export default function PlaceE({route}){
    const place = route.params;
    console.log(place);
    return(
        <ScrollView style={{ marginTop: -17 }}>
            <CarouselSnap
                place={place}
                height={250}
            />
            <Header place={place} />
            <RaitingFavorite place={place} />
            <Info place={place} />
        </ScrollView>
    )
}