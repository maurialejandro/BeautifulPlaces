import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import {Icon, Image} from "@rneui/themed";
import {styles} from "../styles";
import {removeFavorite, updateFavorite} from "../../api/apiFavorite";
import {myToast} from "../Elements/myToast";
import {useRemovePlaceFavoriteContext} from "../../context/FavoritesPlaceContext";
const apiUrl = process.env.API_URL;
export function PlaceFavorite(props) {
    const { place, index } = props;
    const { files } = place;
    const removePlace = useRemovePlaceFavoriteContext();
    const goToRestaurant = () => {
        console.log("GO TO PLACE")
    };

    const onRemoveFavorite = async () => {
        const res = await removeFavorite(place.favorite.id);
        console.log(res);
        if(res.status === 200){
            await removePlace(place.id);
            myToast("Eliminado de tus favoritos");
            return;
        }
        myToast("Algo paso");
    };
    return (
        <TouchableOpacity  key={index+place.id} onPress={goToRestaurant}>
            <View key={`${Math.random()}`} style={styles.contentPlaceFavorite}>
                <Image key={`${Math.random()}`} source={{ uri : `${apiUrl}/file/${files[0]?.file}` }} style={styles.image} />
                <View key={`${Math.random()}`} style={styles.infoContentPlaceFavorite}>
                    <Text key={`${Math.random()}`} style={styles.namePlaceFavorite}>{place.name}</Text>
                    <Icon
                        key={`${Math.random()}`}
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