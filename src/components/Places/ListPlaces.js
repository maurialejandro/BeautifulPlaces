import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, FlatList, ActivityIndicator} from 'react-native';
import { Image } from '@rneui/themed';
import {size} from "lodash";
import RenderPlace from "./RenderPlace";
import * as PropTypes from "prop-types";


function FooterList(props) {
    return null;
}

FooterList.propTypes = {};
export default function ListPlaces(props){
    const { places, nav, isLoading } = props
    return(
        <View>
            {size(places) > 0 ? (
                <FlatList
                    data={places}
                    renderItem={(place) => <RenderPlace navigation={nav} place={place}/>}
                    keyExtractor={(item, index) => index.toString()}
                    onEndReachedThreshold={0.5}
                    ListFooterComponent={<FooterList isLoading={isLoading} />}
                />
            ) : (
                <View >
                    <ActivityIndicator size="large" />
                    <Text>Cargando lugares</Text>
                </View>
            )}
        </View>
    )
}

