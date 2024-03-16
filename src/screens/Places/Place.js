import React from "react";
import {ScrollView, Text} from "react-native";
import {CarouselSnap} from "../../components/Elements/CarouselSnap";
import Header from "../../components/Places/Header";
import Map from "../../components/Places/Map";
import {styles} from "../../components/styles";
import {Info} from "../../components/Places/Info";
import {Icon} from "@rneui/themed";


export default function Place({route}){
    const place = route.params;
    return (
        <ScrollView style={{ marginTop: -17 }} >
            <CarouselSnap
                place={place}
                height={250}
            />
            <Header
                place={place}
            />
            <Info
                place={place}
            />

        </ScrollView>
    );
}