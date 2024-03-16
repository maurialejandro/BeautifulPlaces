import React from "react";
import {Dimensions, View} from "react-native";
import Carousel from 'react-native-snap-carousel';
import {Image, Icon} from "@rneui/themed";
import {styles} from "../styles";
import {myToast} from "./myToast";
import {useNavigation} from "@react-navigation/native";
import {deletePlace} from "../../api/apiPlace";
const apiUrl = process.env.API_URL;

export function CarouselSnap(props){
    const {place, height} = props;
    const { width } = Dimensions.get("window");
    const navigation = useNavigation();

    const renderItem = ({item, index}) => {
        return (
            <Image source={{uri: `${apiUrl}/file/${item.file}`}} style={{ height, width}} />
        )
    }

    const deletePlaceApi = async () => {
        const res = await deletePlace(place.id);
        if(res.status === 200){
            myToast('Eliminado');
            navigation.reset({
                index: 0,
                routes: [{ name: "places" }]
            });
        }
    }

    const goToEditPlace = () => {
        navigation.navigate({ name: 'edit-place', params: place });
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
            <View style={styles.containerIconPlace} >
                <Icon
                    reverse
                    type="material-community"
                    name="pencil"
                    color="#199319"
                    style={styles.iconPlace}
                    onPress={() => goToEditPlace()}
                />
                <Icon
                    reverse
                    type="material-community"
                    name="delete"
                    color="#dc3a3a"
                    style={styles.iconPlace}
                    onPress={() => deletePlaceApi()}
                />
            </View>
        </View>
    )
}