import React from "react"
import { View, Text } from "react-native";
import {useAuthContext} from "../../context/AuthContext";
import { Icon } from '@rneui/themed';
import {styles} from "../../components/styles";
import {useNavigation} from "@react-navigation/native";

export function Places(){

    const user = useAuthContext();
    const navigation = useNavigation();
    return (
        <View
            style={styles.viewPlacesBody}
        >

            {
                user.isLogged && (
                    <Icon
                        reverse
                        type="material-community"
                        name="plus"
                        color="#FFB534"
                        iconStyle={styles.btnAddPlacesContainer}
                        onPress={() => navigation.navigate('add-place')}
                    />
                )
            }
        </View>
    )
}