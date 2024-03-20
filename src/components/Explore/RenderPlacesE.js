import React from "react";
import {Text, TouchableOpacity, View} from "react-native";
import moment from 'moment';
import {styles} from "../styles";
import {Icon, Image} from "@rneui/themed";
import {Rating} from "react-native-ratings";
const apiUrl = process.env.API_URL;
export default function RenderPlacesE(props){
    const { place, navigation } = props;
    console.log(place);
    const { user, place_id, id, files, name,
        description, location, average_rating,
        countFavorites
    } = place.item;
    const goToPlace = () => {
        //navigation.navigate( '');
    }
    const calculateUploadedTime = (createdAt) => {
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
        <TouchableOpacity onPress={goToPlace}>
            <View style={styles.content}>
                <Image source={{ uri : `${apiUrl}/file/${files[0]?.file}` }} style={styles.image} />
                <View style={styles.infoContent}>
                    <View style={styles.nameContent}>
                        <Text style={styles.name}>{name}</Text>
                    </View>
                    <View style={styles.infoContent}>
                        <Text style={styles.userName} > {user.name} </Text>
                        <Text style={styles.favorites}>{calculateUploadedTime(user.created_at)}</Text>
                    </View>
                </View>
                <Text style={styles.description}>{description}</Text>
                <Text style={styles.description}>{location}</Text>
                <View style={styles.contentPlaceAll} >
                    <Icon
                        type="material-community"
                        name={countFavorites >= 1 ? "heart": "heart-outline"}
                        color="#dc3a3a"
                    />
                    <Text style={styles.favorites} >{countFavorites} favoritos</Text>

                    <Rating
                        imageSize={15}
                        readonly
                        startingValue={average_rating}
                    />

                </View>
                <View style={styles.contentPlaceAll} >

                </View>
            </View>
        </TouchableOpacity>
    )
}