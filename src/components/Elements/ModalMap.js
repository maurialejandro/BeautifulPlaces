import React, {useEffect, useState} from "react";
import {Text, View} from "react-native";
import {Modal} from "../Shared/Modal";
import MapView, {Marker, PROVIDER_GOOGLE} from "react-native-maps";
import {styles} from "../styles";
import {CustomButton} from "./CustomButton";
import * as Location from 'expo-location';
import {myToast} from "./myToast";

export default function ModalMap (props){
    const { isVisibleMap,
        setIsVisibleMap,
        location,
        setLocation
    } = props;
    const [errorMsg, setErrorMsg] = useState(null);

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                myToast('Permisos para acceder a la localizacion ha sido denegada')
                setErrorMsg('Permisos para acceder a la localizacion ha sido denegada');
                return;
            }
            if(!location){
                let location = await Location.getCurrentPositionAsync({
                    accuracy: Location.Accuracy.High,
                    timeout: 5000,
                    mocked: true
                });
                await setLocation({
                    latitude: location.coords.latitude,
                    longitude: location.coords.longitude,
                    latitudeDelta: 0.007,
                    longitudeDelta: 0.007
                });
            }
        })()
    }, []);

    const changeLocation = (location) => {
        setLocation(location);
    }

    return(
        <Modal
            show={isVisibleMap}
        >
            { location && (
                <View style={styles.containerMap} >
                    <MapView
                        provider={PROVIDER_GOOGLE}
                        style={styles.mapStyle}
                        showsUserLocation={true}
                        initialRegion={location}
                        mapType="standard"
                        onRegionChange={(locationTemp) => setLocation(locationTemp)}
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
            <View style={styles.viewBtnModal} >
                <CustomButton title="Agregar" onPress={() => {
                    changeLocation(location);
                    setIsVisibleMap(false);
                    myToast('Ubicación agregada')
                }} />
                <CustomButton title="Cerrar" onPress={() => setIsVisibleMap(false)} />
            </View>
        </Modal>
    );
}