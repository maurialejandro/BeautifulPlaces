import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { userRegister } from '../../../api/apiUser';
import Toast from "react-native-root-toast";
import { useNavigation } from "@react-navigation/native";
import { CustomButton } from "../../Elements/CustomButton";
import {CustomLoading} from "../../Elements/CustomLoading";
import {myToast} from "../../Elements/myToast";
import { styles } from "../../styles";

export function RegisterForm(){

    const navigation = useNavigation();
    const [ isLoading, setIsLoading ] = React.useState(false);
    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            email: '',
            password: '',
            rePassword: ''
        }
    });

    const onSubmit = async (data) => {
        setIsLoading(true);
        if(data.password !== data.rePassword){
            myToast('Las contraseñas no coinciden')
            setIsLoading(false);
            return;
        }
        const res = await userRegister(data);

        if(res.status === 200){
            myToast('Registrado');
            navigation.navigate('login');
        }
        if(res.error?.email || res.error?.password){
            myToast(res.error.email ? res.error.email : res.error.password);
        }
        setIsLoading(false);
    };

    return(
        <View style={styles.container}>
            {
                !isLoading ? (
                    <>
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
                                    secureTextEntry={true}
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
                                    secureTextEntry={true}
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                    style={styles.input}
                                    placeholderTextColor="#ffffff"
                                    cursorColor="#ffffff"
                                />
                            )}
                            name="rePassword"
                        />
                        {errors.password && <Text style={styles.txt} > Debe ingresar re-password </Text>}
                        <CustomButton
                            title="Registrarme"
                            onPress={handleSubmit(onSubmit)}
                        />
                    </>
                ) : (
                    <>
                        <CustomLoading />
                    </>
                )
            }


        </View>
    )
}