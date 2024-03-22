import React, {useState} from "react";
import {View} from "react-native";
import {Icon} from "@rneui/themed";
import {storeFavorite, updateFavorite} from "../../api/apiFavorite";
import {myToast} from "../Elements/myToast";
import {styles} from "../styles";

export default function ButtonFavorite(props){
    const { place } = props;
    const [ favorite, setFavorite ] = useState(place.favorite?.favorite);
    const setFavorites =  async () => {
        switch (favorite) {
            case 0:
                const res0 = await updateFavorite(place.favorite.id, 1);
                if(res0.status === 200){
                    myToast("Favorito Actualizado");
                    setFavorite(1);
                    return;
                }
                myToast("Algo sucedió");
                break;
            case 1:
                const res1 = await updateFavorite(place.favorite.id, 0);
                if(res1.status === 200){
                    myToast("Favorito Actualizado");
                    setFavorite(0);
                    return;
                }
                myToast("Algo sucedió")
                break;
            default:
                const store = await storeFavorite(place.id);
                if(store.favorite.status === 200){
                    myToast("Favorito agregado");
                    setFavorite(1);
                }
                myToast("Algo sucedió");
        }
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