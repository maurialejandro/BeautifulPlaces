import React, {useState} from "react";
import {Text, View} from "react-native";
import {styles} from "../styles";
import {calculateUploadedTime} from "../Shared/calculateUploadedTime";

export default function Header(props){
    const { place } = props;
    const { user } = place;
    return(
        <View style={styles.viewPlaceE}>
            <View style={styles.contentViewHeader}>
                <View style={styles.titleViewHeader} >
                    <Text style={styles.txtName} >{place.name}</Text>
                </View>
                <View style={styles.txtUserDescription}>
                    <Text style={styles.txtUserE}>{user.name}</Text>
                    <Text style={styles.txtDescriptionE}> {place.description}</Text>
                </View>
            </View>
            <View style={styles.viewDate} >
                <Text style={styles.txtDateE} > {calculateUploadedTime(user.created_at)} </Text>
            </View>
        </View>

    )
}