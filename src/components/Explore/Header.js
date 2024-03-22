import React, {useState} from "react";
import {Text, View} from "react-native";
import {styles} from "../styles";
import {Icon} from "@rneui/themed";
import {Rating} from "react-native-ratings";

export default function Header(props){
    const { place } = props;
    const { averageRatings, countFavorites, user } = place;
    console.log(user);
    return(
        <View style={styles.contentViewHeader}>
            <View style={styles.titleViewHeader} >
                <Text style={styles.txtName} >{place.name}</Text>
                <Icon
                    type="material-community"
                    name={countFavorites ? "heart" : "heart-outline"}
                    color="#dc3a3a"
                />
                <Rating
                    ratingCount={5}
                    imageSize={25}
                    startingValue={averageRatings}
                />
            </View>
            <Text style={styles.txtDescription} >{place.description}</Text>
        </View>
    )
}