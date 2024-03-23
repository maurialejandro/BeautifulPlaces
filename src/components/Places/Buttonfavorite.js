import React, {useState} from "react";
import {View} from "react-native";
import {Icon} from "@rneui/themed";
import {removeFavorite, storeFavorite} from "../../api/apiFavorite";
import {myToast} from "../Elements/myToast";
import {styles} from "../styles";
import {useRemovePlacesFavoriteContext} from "../../context/FavoritesPlaceContext";

export default function ButtonFavorite(props){
    const { place } = props;
    const [ favorite, setFavorite ] = useState(place.favorite);
    const removeFavorites = useRemovePlacesFavoriteContext();

    const setFavorites =  async () => {

        if(favorite){
            const res = await removeFavorite(favorite.id);
            if(res.status === 200){
                myToast('Favorito Eliminado')
                setFavorite(null);
            }
            return;
        }
        const res2 = await storeFavorite(place.id);
        if(res2.status === 200){
            myToast("Favorito agregado");
            setFavorite(res2.favorite);
            return;
        }
        myToast("Algo sucedió");
    }
    return(
        <View style={styles.contentBtnFavorite}>
            <Icon
                type="material-community"
                name={favorite ? "heart" : "heart-outline"}
                color="#dc3a3a"
                onPress={() => setFavorites()}
            />
        </View>
    )
}