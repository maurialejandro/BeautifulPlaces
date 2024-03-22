import React from "react";
import { View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {Icon, Image} from "@rneui/themed";
import {styles} from "../styles";
const apiUrl = process.env.API_URL;
export function PlaceFavorite(props) {
    const { place } = props;
    const navigation = useNavigation();

    const goToRestaurant = () => {
        console.log("GO TO PLACE")
    };

    const onRemoveFavorite = async () => {
        console.log("REMOVE")
    };

    return (
        <TouchableOpacity onPress={goToRestaurant}>
            <View style={styles.content}>
                <Image source={{ uri : `${apiUrl}/file/${files[0]?.file}` }} style={styles.image} />
                <View style={styles.infoContent}>
                    <Text style={styles.name}>{place.name}</Text>
                    <Icon
                        type="material-community"
                        name="heart"
                        color="#f00"
                        size={35}
                        containerStyle={styles.iconPlaces}
                        onPress={onRemoveFavorite}
                    />
                </View>
            </View>
        </TouchableOpacity>
    );
}