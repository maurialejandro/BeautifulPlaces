import React from "react";
import { View} from "react-native";
import {Image} from "@rneui/themed";
import {styles} from "../styles";
const apiUrl = process.env.API_URL;

export default function PlaceImage(props){
    const { images, setImages } = props;
    return(
        <View style={styles.containerImg} >
            <Image
                source={ images ? {uri: `${apiUrl}/file/${images}` } : require('../../../assets/default-image.png') }
                style={styles.imgPlace}
            />
        </View>
    );
}