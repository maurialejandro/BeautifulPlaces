import React, {useEffect, useState} from "react"
import { View, Text } from "react-native";
import {useAuthContext} from "../../context/AuthContext";
import { Icon } from '@rneui/themed';
import {styles} from "../../components/styles";
import {useNavigation} from "@react-navigation/native";
import ListPlaces from "../../components/Places/ListPlaces";
import {getPlaces} from "../../api/apiPlace";

export function Places(){

    const user = useAuthContext();
    const navigation = useNavigation();
    const [places, setPlaces] = useState([]);
    const [ isLoading, setIsLoading ] = useState(false)

    useEffect(() => {
        (async() => {
            await getPlacesBack()
        })()
    }, []);

    const getPlacesBack = async () => {
        const res = await getPlaces();

        setPlaces(res.places);

    }
    return (
        <View
            style={styles.viewPlacesBody}
        >
            <ListPlaces
                isLoading={isLoading}
                places={places}
                nav={navigation}
            />
            {
                user.isLogged && (
                    <Icon
                        reverse
                        type="material-community"
                        name="plus"
                        color="#FFB534"
                        onPress={() => navigation.navigate('add-place')}
                    />
                )
            }
        </View>
    )
}