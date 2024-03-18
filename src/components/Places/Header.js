import React, {useEffect, useState} from "react";
import {View, Text} from "react-native";
import {styles} from "../styles";
import { Rating } from 'react-native-ratings';
import {storeRankingPlace, updateRankingPlace} from "../../api/apiRanking";
import {myToast} from "../Elements/myToast";
export default function Header(props){
    const { place } = props;
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
    return (
        <View style={styles.contentViewHeader}>
            <View style={styles.titleViewHeader} >
                <Text style={styles.txtName} >{place.name}</Text>
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