import React from "react"
import { View, Text, Image, StyleSheet, ScrollView, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {CustomButton} from "../../../components/Elements/CustomButton";

export function UserGuest() {
    const navigation = useNavigation();

    const goToLogin = () => {
        navigation.navigate('login');
    }

    return (
        <View style={styles.container}>
            <Image 
                style={styles.img}
                source={require('../../../../assets/BeautifulPlaces.png')}
            />
            <Text>¿Te gusta recorrer el mundo?</Text>
            <Text>
                Te invitamos a BeautifulPlaces
                busca, comparte y recorre de
                forma interactiva donde
                tu quieras
            </Text>
            <CustomButton
                title="Ir al perfil"
                onPress={goToLogin}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    img: {
        width: 330,
        height: 330,
    }
})
