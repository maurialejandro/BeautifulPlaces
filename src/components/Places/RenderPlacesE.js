import React from "react";
import {ActivityIndicator, Text, TouchableOpacity, View} from "react-native";
import {styles} from "../styles";
import {Image} from "@rneui/themed";
const apiUrl = process.env.API_URL;

export default function RenderPlacesE(props){
    const { place, navigation } = props;
    console.log(place);
    const { user, place_id, id, files, name, description, location } = place.item;
    const goToPlace = () => {
        console.log('GO TO PLACE ')
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
                <View>
                    <Text style={styles.txtNameUser}> {user.name} </Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}