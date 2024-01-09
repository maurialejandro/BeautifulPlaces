import React from 'react';
import { View, Text, Button, Image, StyleSheet, ScrollView } from 'react-native';
import { RegisterForm } from '../../../components/Auth/RegisterForm/RegisterForm';

export function Register(){
    return(
        <View style={styles.container} >
            <Image
                style={styles.img}
                source={require('../../../../assets/BeautifulPlaces.png')}
            />
            <RegisterForm />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    img: {
        width: 260,
        height: 260,
    }
})