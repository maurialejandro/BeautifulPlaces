import React from "react";
import {Text, View} from "react-native";
import Map from "./Map";
import {map} from "lodash";
import { ListItem, Icon } from '@rneui/themed';
import {styles} from "../styles";

export function Info(props){
    const { place } = props;
    const listInfo = [
        {
            text: place.location,
            iconType: "material-community",
            iconName: "map-marker",
        },
    ];

    return(
        <View style={styles.viewInfoPlace} >
            <Text style={styles.txtInfoPlace} > Información: </Text>
            <Map
                location={{
                    longitude: parseFloat(place.long),
                    latitude: parseFloat(place.lat),
                    latitudeDelta: 0.050,
                    longitudeDelta: 0.050
                }}
            />
            <View style={styles.contentViewHeader}>
                {map(listInfo, (item, index) => (
                    <ListItem key={index} bottomDivider>
                        <Icon type={item.iconType} name={item.iconName} color="#00a680" />
                        <ListItem.Content>
                            <ListItem.Title>{item.text}</ListItem.Title>
                        </ListItem.Content>
                    </ListItem>
                ))}
            </View>
        </View>
    )
}