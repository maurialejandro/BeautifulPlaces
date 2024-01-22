import React from 'react';
import {Text, View} from "react-native";
import { Avatar } from "@rneui/base";
import { styles } from "../styles";

export function InfoUser(){

    return(
        <View style={styles.contentAvatar}>
            <Avatar
                size="large"
                containerStyle={styles.avatar}
                rounded
                icon={{ type: "material-community", name: "account" }}
                source={require('../../../assets/avatar.png')}
            >
                <Avatar.Accessory size={25} />
            </Avatar>
            <View>
                <Text style={styles.displayNameAvatar} >
                    Nombre
                </Text>
                <Text>
                    Email
                </Text>
            </View>
        </View>
    )
}