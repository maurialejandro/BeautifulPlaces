import React, { useRef } from 'react';
import { View, Text, TextInput, Button, Alert, ToastAndroid } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { userRegister } from '../../../api/apiUser';
import Toast from "react-native-root-toast";
import {useNavigation} from "@react-navigation/native";

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
        <View>
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
                    />
                )}
                name="password"
            />
            {errors.password && <Text> Debe ingresar password </Text>}
            <Button title="Registrarme" onPress={handleSubmit(onSubmit)} />
        </View>
    )
}