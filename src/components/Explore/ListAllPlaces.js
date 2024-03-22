import React, {useState} from "react";
import {FlatList} from "react-native";
import {usePlacesContext} from "../../context/PlaceContext";
import RenderPlacesE from "./RenderPlacesE";
function FooterList(props) {
    return null;
}
FooterList.propTypes = {};

export function ListAllPlaces (props){
    const { nav } = props;
    const [ isLoading, setIsLoading ] = useState(null);
    const places = usePlacesContext();
    return(
        <FlatList
            data={places}
            renderItem={(place) => <RenderPlacesE place={place} navigation={nav} />}
            keyExtractor={(item, index) => index.toString()}
            onEndReachedThreshold={0.5}
            ListFooterComponent={<FooterList isLoading={isLoading} />}
        />
    );
}