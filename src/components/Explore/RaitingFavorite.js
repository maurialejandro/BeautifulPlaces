import React, {useEffect, useState} from "react";
import {Text, View} from "react-native";
import {Icon} from "@rneui/themed";
import {Rating} from "react-native-ratings";
import {styles} from "../styles";
import {useAuthContext} from "../../context/AuthContext";
import {storeFavorite} from "../../api/apiFavorite";
import {myToast} from "../Elements/myToast";

export default function RaitingFavorite(props){
    const { place } = props;
    const userContext = useAuthContext();
    const { rankings_avg_ranking, user } = place;
    const [ countFavorites, setFavorites ] = useState(place.countFavorites);
    const [ belongsToUser, setBelongsToUser ] = useState(false);
    const storeFavoriteE = async () => {
        if(belongsToUser === true){
            myToast("Ya existe en tus favoritos");
            return;
        }
        const res = await storeFavorite(place.id);
        if(res.status === 200){
            setFavorites(countFavorites + 1);
            setBelongsToUser(true);
            myToast("Favorito guardado");
            return;
        }
        myToast("Algo sucedio");
    }
    useEffect(() => {
        const findPlaceFavoriteUser = place.favorites.filter((favorite) => favorite.user_id === userContext.id);
        if(findPlaceFavoriteUser.length){
            setBelongsToUser(true);
        }
    }, [])
    return (
        <View style={styles.contentHeaderExplore} >
            <View style={styles.contentHeaderExplore} >
                <Icon
                    type="material-community"
                    name={belongsToUser ? "heart" : "heart-outline"}
                    color="#dc3a3a"
                    onPress={() => storeFavoriteE()}
                />
                <Text style={styles.txtFavorite} > { countFavorites } favorites </Text>
            </View>
                <Rating
                    readonly={true}
                    showReadOnlyText={false}
                    ratingCount={5}
                    imageSize={15}
                    startingValue={
                        rankings_avg_ranking ?
                            rankings_avg_ranking :
                            0
                    }
                />
        </View>
    )
}