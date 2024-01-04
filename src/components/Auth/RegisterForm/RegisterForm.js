import React, { useRef } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { userRegister } from '../../../api/apiUser';

export function RegisterForm(){
    const toastRef = useRef();
    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            email: '',
            password: '',
        }
    });

    const onSubmit = async (data) => {
        //const res = await userRegister(data)
        console.log(toastRef.current)
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