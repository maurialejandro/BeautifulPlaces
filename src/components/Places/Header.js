import React, {useState} from "react";
import {View, Text} from "react-native";
import {styles} from "../styles";
import { Rating } from 'react-native-ratings';
export default function Header(props){
    const { place } = props;
    return (
        <View style={styles.contentViewHeader}>
            <View style={styles.titleViewHeader} >
                <Text style={styles.txtName} >{place.name}</Text>
                <Rating
                    ratingCount={5}
                    imageSize={25}
                    startingValue={3.3}
                />
            </View>
            <Text style={styles.txtDescription} >{place.description}</Text>
        </View>
    )
}