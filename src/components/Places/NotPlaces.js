import React from "react";
import {Text, View} from "react-native";
import {Icon} from "@rneui/themed";
import {useNavigation} from "@react-navigation/native";
import {styles} from "../styles";

export default function NotPlaces(){
    const navigation = useNavigation();
    return(
        <View style={styles.viewNotLogged}>
            <Icon
                type="material-community"
                name="database-off"
                color="#000000"
                size={150}
                onPress={() => navigation.navigate('add-place')}
            />
            <Text style={styles.txtName} > Sin lugares para mostrar </Text>
        </View>
    )
}