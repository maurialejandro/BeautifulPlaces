import React from "react";
import {Text, View} from "react-native";
import {styles} from "../styles";
import {Rating} from "react-native-ratings";
import {storeRankingPlace} from "../../api/apiRanking";
import {myToast} from "../Elements/myToast";
import {useNavigation} from "@react-navigation/native";

export default function AddRaiting(props){
    const { place } = props;
    const navigation = useNavigation();
    const addRating = async (rating) => {
        const res = await storeRankingPlace(rating, place.id);
        if(res.status === 200){
            myToast("Rating agregado");
            navigation.goBack();
        }
    }
    return(
        <View style={styles.content} >
            <View style={styles.contentViewHeaderOpinion}>
                <Text> Califica este lugar </Text>
            </View>
            <View style={styles.contentRating} >
                <Rating
                    readonly={false}
                    showReadOnlyText={false}
                    ratingCount={5}
                    imageSize={35}
                    startingValue={0}
                    onFinishRating={(r) => addRating(r) }
                />
            </View>
        </View>
    )
}