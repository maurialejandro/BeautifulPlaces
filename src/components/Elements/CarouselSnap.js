import React from "react";
import {Dimensions, View} from "react-native";
import Carousel from 'react-native-snap-carousel';
import {Image, Icon, Button} from "@rneui/themed";
import {styles} from "../styles";
import {useNavigation} from "@react-navigation/native";
const apiUrl = process.env.API_URL;

export function CarouselSnap(props){
    const {place, height} = props;
    const { width } = Dimensions.get("window");
    const renderItem = ({item, index}) => {
        return (
            <Image source={{uri: `${apiUrl}/file/${item.file}`}} style={{ height, width}} />
        )
    }
    return (
        <View style={{ position: "relative" }} >
            <Carousel
                layout="default"
                data={place.files}
                renderItem={renderItem}
                sliderWidth={width}
                itemWidth={width}
            />
        </View>
    )
}