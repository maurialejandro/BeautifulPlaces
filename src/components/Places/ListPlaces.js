import React from 'react';
import {FlatList} from 'react-native';
import RenderPlace from "./RenderPlace";
import {usePlaceContext} from "../../context/PlaceContext";


function FooterList(props) {
    return null;
}

FooterList.propTypes = {};
export default function ListPlaces(props){
    // now using context
    const { nav, isLoading } = props
    const places = usePlaceContext();

    return(
        <FlatList
            data={places}
            renderItem={(place) => <RenderPlace navigation={nav} place={place}/>}
            keyExtractor={(item, index) => index.toString()}
            onEndReachedThreshold={0.5}
            ListFooterComponent={<FooterList isLoading={isLoading} />}
        />
    )
}

