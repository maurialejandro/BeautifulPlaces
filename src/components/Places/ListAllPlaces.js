import React from "react";
import {FlatList} from "react-native";
import {usePlacesContext} from "../../context/PlaceContext";
import RenderPlacesE from "./RenderPlacesE";

export function ListAllPlaces (props){
    const { nav } = props;
    const places = usePlacesContext();
    return(
        <FlatList
            data={places}
            renderItem={(place) => <RenderPlacesE place={place} navigation={nav} /> }
            keyExtractor={(item, index) => index.toString()}
            onEndReachedThreshold={0.5}
        />
    );
}