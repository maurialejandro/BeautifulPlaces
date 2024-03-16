import React from "react";
import MapView, {Marker, PROVIDER_GOOGLE} from "react-native-maps";
import {View} from "react-native";
import {styles} from "../styles";
export default function Map(props){
    const { location } = props;
    return(
        <View style={styles.contentViewMap} >
            { location && (
                <View style={styles.containerMap} >
                    <MapView
                        style={styles.contentMap}
                        showsUserLocation={true}
                        initialRegion={location}
                        mapType="standard"
                    >
                        <Marker
                            coordinate={{
                                latitude: location.latitude,
                                longitude: location.longitude
                            }}
                            draggable
                        />
                    </MapView>
                </View>
            )}
        </View>
    )
}