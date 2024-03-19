import React, {useEffect, useState} from "react";
import {View, Text} from "react-native";
import {styles} from "../styles";
import { Rating } from 'react-native-ratings';
import {storeRankingPlace, updateRankingPlace} from "../../api/apiRanking";
import {myToast} from "../Elements/myToast";
import {Icon} from "@rneui/themed";
import {storeFavorite, updateFavorite} from "../../api/apiFavorite";
export default function Header(props){
    const { place } = props;
    const [ like, setLike ] = useState(place.favorite?.favorite);

    const storeRanking = async (raiting) => {
        if(place.rankings[0]?.ranking){
            const updateRes = await updateRankingPlace(raiting, place.rankings[0].id);
            if(updateRes.status === 200){
                myToast('Raiting actualizado');
            }
            return;
        }
        const storeRes = await storeRankingPlace(raiting, place.id);
        if(storeRes.status === 200){
            myToast('Raiting guardado');
        }
    }

    const favorite =  async () => {
        switch (like) {
            case 0:
                const res0 = await updateFavorite(place.favorite.id, 1);
                if(res0.status === 200){
                    myToast("Favorito Actualizado");
                    setLike(1);
                    return;
                }
                myToast("Algo sucedió");
                break;
            case 1:
                const res1 = await updateFavorite(place.favorite.id, 0);
                if(res1.status === 200){
                    myToast("Favorito Actualizado");
                    setLike(0);
                    return;
                }
                myToast("Algo sucedió")
                break;
            default:
                const store = await storeFavorite(place.id);
                if(store.favorite.status === 200){
                    myToast("Favorito agregado");
                    setLike(1);
                }
                myToast("Algo sucedió");
        }
    }
    return (
        <View style={styles.contentViewHeader}>
            <View style={styles.titleViewHeader} >
                <Text style={styles.txtName} >{place.name}</Text>
                <Icon
                    type="material-community"
                    name={like ? "heart" : "heart-outline"}
                    color="#dc3a3a"
                    onPress={() => favorite()}
                />
                <Rating
                    ratingCount={5}
                    imageSize={25}
                    startingValue={
                        place.rankings[0]?.ranking ?
                            place.rankings[0]?.ranking :
                            0
                    }
                    onFinishRating={(r) => storeRanking(r)}
                />
            </View>
            <Text style={styles.txtDescription} >{place.description}</Text>
        </View>
    )
}