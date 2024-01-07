import React from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { CustomButton } from "../../../components/Elements/CustomButton";

export function Login(){
    const navigation = useNavigation();

    const goToRegister = () => {
        navigation.navigate("register");
    }
    return(
        <View style={styles.container}>
            <Image 
                style={styles.img}
                source={require('../../../../assets/beautiful-places.png')} 
            />
            <Text>
                No tienes cuenta
                <Text onPress={goToRegister} >Registrate</Text>
            </Text>

            <CustomButton
                title="LOGIN"
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