import React from "react";
import {Text, View} from "react-native";
import {Icon} from "@rneui/themed";
import {Rating} from "react-native-ratings";
import {styles} from "../styles";

export default function RaitingFavorite(props){
    const { place } = props;
    const { averageRatings, countFavorites, user } = place;
    return (
        <View style={styles.containerIconPlaceE} >
            <View style={styles.containerIconPlace} >
                <Icon
                    type="material-community"
                    name={countFavorites ? "heart" : "heart-outline"}
                    color="#dc3a3a"
                />
                <Text style={styles.txtFavorite} > { countFavorites } favorites </Text>
            </View>
            <Rating
                ratingCount={5}
                imageSize={25}
                tintColor="#EEEDED"
                startingValue={averageRatings}
            />
        </View>
    )
}