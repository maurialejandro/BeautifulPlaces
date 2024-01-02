import React from "react"
import { View, Text, Image, StyleSheet, ScrollView, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

export function UserGuest() {
    const navigation = useNavigation();

    const goToLogin = () => {
        navigation.navigate('login');
    }

    return (
        <View style={styles.container}>
            <Image 
                style={styles.img}
                source={require('../../../../assets/beautiful-places.png')} 
            />
            <Text>¿Te gusta recorrer el mundo?</Text>
            <Text>
                Te invitamos a hechar un vistazo a BeautifulPlaces 
                Busca, Comparte y recorre de forma interactiva donde 
                tu quieras
            </Text>
            <Button 
                title="Ir al perfil"
                onPress={goToLogin}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 100,
        //justifyContent: 'center',
        alignItems: 'center',
    },
    img: {
        width: 160,
        height: 160,
        marginBottom: 10,
    }
})
