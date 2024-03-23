import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import {Icon, Image} from "@rneui/themed";
import {styles} from "../styles";
import {removeFavorite, updateFavorite} from "../../api/apiFavorite";
import {myToast} from "../Elements/myToast";
const apiUrl = process.env.API_URL;
export function PlaceFavorite(props) {
    const { place, index } = props;
    const { files } = place;
    const goToRestaurant = () => {
        console.log("GO TO PLACE")
    };

    const onRemoveFavorite = async () => {
        const res = removeFavorite(place.favorite.id);
        if(res.status === 200){
            myToast("Eliminado de tus favoritos");
            return;
        }
        myToast("Algo paso");
    };

    return (
        <TouchableOpacity  key={index} onPress={goToRestaurant}>
            <View key={index}r style={styles.contentPlaceFavorite}>
                <Image source={{ uri : `${apiUrl}/file/${files[0]?.file}` }} style={styles.image} />
                <View style={styles.infoContentPlaceFavorite}>
                    <Text style={styles.namePlaceFavorite}>{place.name}</Text>
                    <Icon
                        type="material-community"
                        name="heart"
                        color="#f00"
                        size={35}
                        containerStyle={styles.iconContainerPlaceFavorite}
                        onPress={onRemoveFavorite}
                    />
                </View>
            </View>
        </TouchableOpacity>
    );
}