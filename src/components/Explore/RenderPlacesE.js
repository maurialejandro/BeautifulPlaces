import React from "react";
import {Text, TouchableOpacity, View} from "react-native";
import {styles} from "../styles";
import {Icon, Image} from "@rneui/themed";
import {Rating} from "react-native-ratings";
import {calculateUploadedTime} from "../Shared/calculateUploadedTime";
const apiUrl = process.env.API_URL;
export default function RenderPlacesE(props){
    const { place, navigation } = props;
    const { user, files, name,
        description, location, rankings_avg_ranking,
        countFavorites
    } = place.item;
    const goToPlace = () => {
        navigation.navigate({name: "place-e", params: place.item});
    }

    return(
        <TouchableOpacity onPress={goToPlace}>
            <View style={styles.content}>
                <Image source={{ uri : `${apiUrl}/file/${files[0]?.file}` }} style={styles.image} />
                <View>
                    <View style={styles.infoContent}>
                        <View style={styles.nameContent}>
                            <Text style={styles.name}>{name}</Text>
                        </View>
                    </View>
                    <View style={styles.infoContentUser}>
                        <Text style={styles.userName} > {user.name} </Text>
                        <Text style={styles.favorites}>{calculateUploadedTime(user.created_at)}</Text>
                    </View>
                    <View>
                        <Text style={styles.description}>{description}</Text>
                        <View style={styles.contentLocation} >
                            <Icon
                                type="material-community"
                                name={"map-marker"}
                            />
                            <Text style={styles.location}>{location}</Text>
                        </View>
                    </View>
                    <View style={styles.containerTitleCardPlace} >
                        <View style={styles.containerFavoritesCardPlace} >
                            <Icon
                                type="material-community"
                                name={countFavorites >= 1 ? "heart": "heart-outline"}
                                color="#dc3a3a"
                            />
                            <Text style={styles.favorites} >{countFavorites} favoritos</Text>
                        </View>
                        <View style={styles.content}>
                            <Rating
                                readonly={true}
                                ratingCount={5}
                                imageSize={15}
                                startingValue={
                                    rankings_avg_ranking ?
                                        rankings_avg_ranking :
                                        0
                                }
                            />
                        </View>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}