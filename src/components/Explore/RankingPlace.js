import React, {useEffect} from "react";
import { Icon, Image } from '@rneui/themed';
import {TouchableOpacity, View, Text} from "react-native";
import {Rating} from "react-native-ratings";
import {styles} from "../styles";
const apiUrl = process.env.API_URL;
export default function RankingPlace(props){
    const { place, index } = props;
    const { rankings_avg_ranking } = place;

    const goToPlace = () => {
        console.log("GO TO PLACE");
    }
    const renderMedal = () => {
        if (index > 2) return null;

        let color = "";
        if (index === 0) color = "#FFD700";
        if (index === 1) color = "#BEBEBE";
        if (index === 2) color = "#CD7F32";

        return (
            <Icon
                type="material-community"
                name="medal-outline"
                color={color}
                containerStyle={styles.medal}
            />
        );
    };
    return (
        <TouchableOpacity onPress={goToPlace} ke >
            <View style={styles.content}>
                <Image source={{ uri : `${apiUrl}/file/${place.files[0]?.file}` }} style={styles.image} />
                <View style={styles.infoContent}>
                    <View style={styles.nameContent}>
                        {renderMedal()}
                        <Text style={styles.name}>{place.name}</Text>
                    </View>
                    <Rating
                        imageSize={15}
                        readonly
                        startingValue={rankings_avg_ranking}
                    />
                </View>
                <Text style={styles.description}>{place.description}</Text>
            </View>
        </TouchableOpacity>
    );
}