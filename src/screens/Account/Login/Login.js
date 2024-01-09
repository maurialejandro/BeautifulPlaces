import React from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { CustomButton } from "../../../components/Elements/CustomButton";
import {LoginForm} from "../../../components/Auth/LoginForm/LoginForm";

export function Login(){
    const navigation = useNavigation();

    const goToRegister = () => {
        navigation.navigate("register");
    }
    return(
        <View style={styles.container}>
            <Image 
                style={styles.img}
                source={require('../../../../assets/BeautifulPlaces.png')}
            />
            <LoginForm />

            <Text>
                No tienes cuenta
                <Text onPress={goToRegister} style={styles.text} > registrate</Text>
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    text: {
        color: "#FDFFAB"
    },
    img: {
        width: 260,
        height: 260,
    }
})