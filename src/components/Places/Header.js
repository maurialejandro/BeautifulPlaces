import React, {useEffect, useState} from "react";
import {View, Text} from "react-native";
import {styles} from "../styles";
import { Rating } from 'react-native-ratings';
import {getRanking} from "../../api/apiRanking";
import {myToast} from "../Elements/myToast";
export default function Header(props){
    const { place } = props;
    const [ ranking, setRanking ] = useState(0);
    useEffect(() => {
        (async () => {
            await getRankingApi(place.id);
        })()
    }, []);
    const getRankingApi = async (place_id) => {
        const res = await getRanking(place_id);
        if(res.status === 200){
            setRanking(res.ranking);
            return;
        }
        myToast('Error al obtener ranking');
    }
    return (
        <View style={styles.contentViewHeader}>
            <View style={styles.titleViewHeader} >
                <Text style={styles.txtName} >{place.name}</Text>
                <Rating
                    ratingCount={5}
                    imageSize={25}
                    startingValue={ranking}
                />
            </View>
            <Text style={styles.txtDescription} >{place.description}</Text>
        </View>
    )
}