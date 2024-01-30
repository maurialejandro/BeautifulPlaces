import React from 'react';
import {Text, View} from "react-native";
import { Avatar } from "@rneui/base";
import { styles } from "../styles";
import {useAuthContext} from "../../context/AuthContext";

export function InfoUser(){
    const user = useAuthContext();
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
                    { user.userName }
                </Text>
                <Text>
                    { user.userEmail }
                </Text>
            </View>
        </View>
    )
}