import {ActivityIndicator, Text, TouchableOpacity, View} from "react-native";
import {Image} from "@rneui/themed";
import React from "react";
import {styles} from "../styles";
const apiUrl = process.env.API_URL;
export default function RenderPlace(props){
    const { place, navigation } = props
    console.log(place);
    const { place_id, id, files, name, description, location } = place.item;
    const goToPlace = () => {
        navigation.navigate({name: 'place', params: place.item});
    }
    return(
        <TouchableOpacity key={id + place_id}  onPress={() => goToPlace()}>
            <View style={styles.viewPlace} >
                <View style={styles.viewPlaceImage}>
                    <Image
                        resizeMode="cover"
                        PlaceholderContent={<ActivityIndicator color="#000"/>}
                        source={
                            files ? { uri : `${apiUrl}/file/${files[0]?.file}` } : require("../../../assets/default-image.png")
                        }
                        style={styles.imagePlace}
                    />
                </View>
                <View>
                    <Text style={styles.txtNamePlace} >{name}</Text>
                    <Text style={styles.txtListPlace} >
                        {
                            description.length > 35
                                ?  description.substr(0, 35)+'...'
                                :  description
                        }
                    </Text>
                    <Text style={styles.txtListPlace} >
                        {
                            location.length > 35
                                ?  location.substr(0, 35)+'...'
                                :  location
                        }
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}