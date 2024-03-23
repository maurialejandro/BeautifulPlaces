import React, {useState} from "react";
import {Text, View} from "react-native";
import {styles} from "../styles";
import moment from "moment/moment";

export default function Header(props){
    const { place } = props;
    const { user } = place;

    const calculateUploadedTimeE = (createdAt) => {
        const currentTime = moment();
        const uploadedTime = moment(createdAt);
        const duration = moment.duration(currentTime.diff(uploadedTime));

        if (duration.asMinutes() < 1) {
            return 'Hace unos segundos';
        } else if (duration.asHours() < 1) {
            return 'Hace ' + Math.floor(duration.asMinutes()) + ' minutos';
        } else if (duration.asDays() < 1) {
            return 'Hace ' + Math.floor(duration.asHours()) + ' horas';
        } else {
            return 'Hace ' + Math.floor(duration.asDays()) + ' días';
        }
    };

    return(
        <View style={styles.viewPlaceE}>
            <View style={styles.contentViewHeader}>
                <View style={styles.viewDate} >
                    <Text style={styles.txtUserE}></Text>
                    <Text style={styles.txtDateE} > {calculateUploadedTimeE(user.created_at)} </Text>
                </View>

                <View style={styles.titleViewHeader} >
                    <Text style={styles.txtName} >{place.name}</Text>
                </View>
                <View style={styles.txtUserDescription}>
                    <Text style={styles.txtUserE}>{user.name}</Text>
                    <Text style={styles.txtDescriptionE}> {place.description}</Text>
                </View>
            </View>
        </View>

    )
}