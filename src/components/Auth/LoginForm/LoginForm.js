import React from "react";
import { View } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { CustomButton } from "../../Elements/CustomButton";
import { Input } from '@rneui/themed';
import { userLogin } from "../../../api/apiUser";
import { useUserLoginContext } from "../../../context/AuthContext";
import {myToast} from "../../Elements/myToast";
import { styles } from "../../styles";
import {Loading} from "../../Elements/Loading";

export function LoginForm(props){
    const { nav } = props;
    const login = useUserLoginContext();
    const [ isLoading, setIsLoading ] = React.useState(false);
    const { control, handleSubmit, formState: { errors }, getValues } = useForm({
        defaultValues: {
            email: "",
            password: ""
        }
    });
    const onSubmit = async (data) => {
        setIsLoading(true);
        const res = await userLogin(data);
        // ToDo
        // Generar arquitectura de software para el manejo de distintos errores
        if(res.error === 'Network Error'){
            myToast('Error de conexion con el servidor');
        }
        if(res.error === 'bad credenctials'){
            myToast('Email o contraseña incorrecto');
        }
        if(res.error?.email || res.error?.password){
            myToast(res.error.email ? res.error.email : res.error.password);
        }
        if(res.status === 200){
            await login(res.user);
            nav.reset({
                index: 0,
                routes: [{ name: 'Mis Lugares' }]
            })
        }
        setIsLoading(false);
    };
    return(
        <View style={styles.container} >
            {
                !isLoading ? (
                    <>
                        <Controller
                            control={control}
                            rules={{
                                required: true
                            }}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <Input
                                    placeholder="Correo"
                                    onBlur={onBlur}
                                    style={styles.inputForm}
                                    onChangeText={onChange}
                                    value={value}
                                    errorMessage={errors.email ? "Correo requerido" : ""}
                                />
                            )}
                            name="email"
                        />
                        <Controller
                            control={control}
                            rules={{
                                required: true
                            }}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <Input
                                    placeholder="Contraseña"
                                    onBlur={onBlur}
                                    style={styles.inputForm}
                                    labelStyle={{ color: "red" }}
                                    secureTextEntry={true}
                                    onChangeText={onChange}
                                    value={value}
                                    errorMessage={errors.password ? "Contraseña es requerida" : "" }
                                />
                            )}
                            name="password"
                        />
                        <CustomButton
                            title="Iniciar sesión"
                            onPress={handleSubmit(onSubmit)}
                        />
                    </>
                ) : (
                    <>
                        <Loading text={"Iniciando sesion"} />
                    </>
                )
            }
        </View>
    )
}
