import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { userRegister } from '../../../api/apiUser';
import Toast from "react-native-root-toast";
import { useNavigation } from "@react-navigation/native";
import { CustomButton } from "../../Elements/CustomButton";

export function RegisterForm(){

    const navigation = useNavigation();

    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            email: '',
            password: '',
        }
    });

    const onSubmit = async (data) => {
        const res = await userRegister(data);
        Toast.show(res.message, {
            duration: Toast.durations.SHORT,
            position: 500,
            animation: true,
            opacity: 0.8
        });
        if(res.status === 'success'){
            navigation.navigate('login');
        }
    };

    return(
        <View style={styles.container}>
            <Controller 
                control={control}
                rules={{
                    required: true
                }}
                render={({ field: {onChange, onBlur, value} }) => (
                    <TextInput 
                        placeholder='Email'
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        style={styles.input}
                        placeholderTextColor="#ffffff"
                        cursorColor="#ffffff"
                    />
                )}
                name="email"
            />
            {errors.email && <Text> Debe ingresar email </Text>}
            <Controller 
                control={control}
                rules={{
                    required: true
                }}
                render={({ field: {onBlur, onChange, value} }) => (
                    <TextInput 
                        placeholder='Password'
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        style={styles.input}
                        placeholderTextColor="#ffffff"
                        cursorColor="#ffffff"
                    />
                )}
                name="password"
            />
            {errors.password && <Text style={styles.txt} > Debe ingresar password </Text>}
            <Controller
                control={control}
                rules={{
                    required: true
                }}
                render={({ field: {onBlur, onChange, value} }) => (
                    <TextInput
                        placeholder='Re-Password'
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        style={styles.input}
                        placeholderTextColor="#ffffff"
                        cursorColor="#ffffff"
                    />
                )}
                name="password"
            />
            {errors.password && <Text style={styles.txt} > Debe ingresar re-password </Text>}
            <CustomButton
                title="REGISTRARME"
                onPress={handleSubmit(onSubmit)}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        width: "70%"
    },
    input: {
        width: "100%",
        height: 50,
        marginTop: 20,
        borderCurve: "circular",
        opacity: 0.5,
        backgroundColor: "#000000",
        borderRadius: 16,
        paddingLeft: 10,
        color: "#ffffff"
    },
    txt: {
        color: "#BF3131"
    }
});