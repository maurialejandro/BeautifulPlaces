import React from "react";
import { View} from "react-native";
import {Image} from "@rneui/themed";
import {styles} from "../styles";

export default function PlaceImage(props){
    const { images, setImages } = props;

    return(
        <View style={styles.containerImg} >
            <Image
                source={ images ? {uri: images } : require('../../../assets/default-image.png') }
                style={styles.imgPlace}
            />
        </View>
    );
}