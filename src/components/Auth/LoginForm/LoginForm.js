import React from "react";
import {View, Text, TextInput, StyleSheet} from "react-native";
import { useForm, Controller } from "react-hook-form";
import { useNavigation } from "@react-navigation/native";
import {CustomButton} from "../../Elements/CustomButton";
import {userLogin} from "../../../api/apiUser";
import Toast from "react-native-root-toast";

export function LoginForm(){
    const navigation = useNavigation();
    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            email: "",
            password: ""
        }
    });
    const onSubmit = async (data) => {
        const res = await userLogin(data);
        if(res.status === 200){
            Toast.show("logged", {
                duration: Toast.durations.SHORT,
                position: 500,
                animation: true,
                opacity: 0.8
            });
            navigation.navigate('Places');
        }
    };

    return(
        <View style={styles.container} >
            <Controller
                control={control}
                rules={{
                    required: true
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        placeholder="Email"
                        onBlur={onBlur}
                        onChangeText={onChange}
                        style={styles.input}
                        value={value}
                        placeholderTextColor="#ffffff"
                        cursorColor="#ffffff"
                    />
                )}
                name="email"
            />
            {errors.email && <Text style={styles.txt} > Email es requerido </Text>}
            <Controller
                control={control}
                rules={{
                    required: true
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        placeholder="password"
                        onBlur={onBlur}
                        style={styles.input}
                        onChangeText={onChange}
                        value={value}
                        placeholderTextColor="#ffffff"
                        cursorColor="#ffffff"
                    />
                )}
                name="password"
            />
            {errors.password && <Text style={styles.txt} > Password es requerida </Text>}
            <CustomButton
                title="Login"
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
        color: "#FFFFDD"
    }
});