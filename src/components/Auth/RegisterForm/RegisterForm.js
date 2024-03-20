import React from 'react';
import { View } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { userRegister } from '../../../api/apiUser';
import { Input } from '@rneui/themed';
import { useNavigation } from "@react-navigation/native";
import { CustomButton } from "../../Elements/CustomButton";
import {myToast} from "../../Elements/myToast";
import { styles } from "../../styles";
import {Loading} from "../../Elements/Loading";

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
                                <Input
                                    placeholder="Correo"
                                    onBlur={onBlur}
                                    style={styles.inputForm}
                                    errorMessage={errors.email ? "Debe ingresar correo": ""}
                                    onChangeText={onChange}
                                    value={value}
                                />
                            )}
                            name="email"
                        />
                        <Controller
                            control={control}
                            rules={{
                                required: true
                            }}
                            render={({ field: {onBlur, onChange, value} }) => (
                                <Input
                                    placeholder="Contraseña"
                                    secureTextEntry={true}
                                    onBlur={onBlur}
                                    style={styles.inputForm}
                                    errorMessage={errors.password ? "debe ingresar contraseña" : ""}
                                    onChangeText={onChange}
                                    value={value}
                                />

                            )}
                            name="password"
                        />
                        <Controller
                            control={control}
                            rules={{
                                required: true
                            }}
                            render={({ field: {onBlur, onChange, value} }) => (
                                <Input
                                    placeholder="Reingresar contraseña"
                                    secureTextEntry={true}
                                    onBlur={onBlur}
                                    errorMessage={errors.rePassword ? "Debe ingresar re-contraseña" : ""}
                                    style={styles.inputForm}
                                    onChangeText={onChange}
                                    value={value}
                                />
                            )}
                            name="rePassword"
                        />
                        <CustomButton
                            title="Registrarme"
                            onPress={handleSubmit(onSubmit)}
                        />
                    </>
                ) : (
                    <>
                        <Loading text={"Registrando"} />
                    </>
                )
            }
        </View>
    )
}