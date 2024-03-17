import React from "react";
import {Text, View} from "react-native";
import {Icon} from "@rneui/themed";
import {useNavigation} from "@react-navigation/native";
import {styles} from "../styles";

export default function NotLogged(){
    const navigation = useNavigation();

    return(
        <View style={styles.viewNotLogged} >
            <Icon
                type="material-community"
                name="account-key"
                color="#000000"
                size={150}
                onPress={() => navigation.navigate('Cuenta')}
            />
            <View style={styles.containerNotLogged}>
                <Text style={styles.txtName}>Para ver y agregar lugares a tu lista primero debes iniciar sesion. </Text>
            </View>
        </View>
    );
}