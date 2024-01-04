import React from 'react';
import { View, Text, Button, Image, StyleSheet, ScrollView } from 'react-native';
import { RegisterForm } from '../../../components/Auth/RegisterForm/RegisterForm';

export function Register(){
    return(
        <ScrollView>
            <View styles={styles.containerR} >
                <Image 
                    style={styles.img}
                    source={require('../../../../assets/beautiful-places.png')} 
                />
                <RegisterForm />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    containerR: {
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