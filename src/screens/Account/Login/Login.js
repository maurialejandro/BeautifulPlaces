import React, {useEffect} from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LoginForm } from "../../../components/Auth/LoginForm/LoginForm";
import {useNetInfoContext} from "../../../context/NetInfoContext";
import {myToast} from "../../../components/Elements/myToast";

export function Login(){
    const navigation = useNavigation();
    const netInfoState = useNetInfoContext();
    const goToRegister = () => {
        navigation.navigate("register");
    }

    useEffect(() => {
        if(netInfoState.isConnected && netInfoState.isInternetReachable){
            // Add function to check connection in apiFetch data
            myToast('Conectado a internet')
        } else {
            myToast('Desconectado a internet');
        }
    }, []);
    return(
        <View style={styles.container}>
            <Image 
                style={styles.img}
                source={require('../../../../assets/BeautifulPlaces.png')}
            />
            <LoginForm nav={navigation} />

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
        color: "#ACF6C8"
    },
    img: {
        width: 260,
        height: 260,
    }
})