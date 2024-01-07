import React from 'react';
import { View, Text, Button, Image, StyleSheet, ScrollView } from 'react-native';
import { RegisterForm } from '../../../components/Auth/RegisterForm/RegisterForm';

export function Register(){
    return(
        <View style={styles.container} >
            <Image
                style={styles.img}
                source={require('../../../../assets/beautiful-places.png')}
            />
            <RegisterForm />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    img: {
        width: 60,
        height: 60,
        marginBottom: 10,
    }
})