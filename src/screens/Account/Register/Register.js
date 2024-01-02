import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import { RegisterForm } from '../../../components/Auth/RegisterForm/RegisterForm';

export function Register(){
    return(
        <View styles={styles.container} >
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
        marginTop: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    img: {
        width: 160,
        height: 160,
        marginBottom: 10,
    }
})