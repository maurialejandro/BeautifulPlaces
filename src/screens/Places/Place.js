import React from "react";
import { ScrollView, Dimensions} from "react-native";
import {Icon} from "@rneui/base";
import CarouselImages from "../../components/Places/Carousel";

export default function Place({route}){
    const { place } = route.params;
    const screenWidth = Dimensions.get("window").width

    return (
        <ScrollView>
            <Icon
                type='material-community'
                name={ "heart" }
                color={"#f00"}
                size={35}
                underlayColor="transparent"
            />
            <CarouselImages
                files={place.item.files}
                height={250}
                width={screenWidth}
            />
        </ScrollView>
    );
}