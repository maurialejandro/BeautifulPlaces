import {View, Text, TextInput} from "react-native";
import {CustomButton} from "../Elements/CustomButton";
import { Controller, useForm } from "react-hook-form";
import {styles} from "../styles";
import {useAuthContext, useUserLogout, useUserUpdateData} from "../../context/AuthContext";
import {apiLogout, updatePassword} from "../../api/apiUser";
import {myToast} from "../Elements/myToast";

export function ChangePasswordForm(props){

    const logout = useUserLogout();
    const user = useAuthContext();
    const { onClose, onReload } = props;
    const { control, handleSubmit, formState: { errors },  } = useForm({
        defaultValues: {
            password: '',
            newPassword: '',
            repeatNewPassword: ''
        }
    })
    const onSubmit = async (data) => {
        if(data.newPassword !== data.repeatNewPassword){
            myToast('Contraseña no coincide');
            return;
        }
        const res = await updatePassword(data, user.email);
        if(res.status === 200){
            myToast('Contraseña actualizada');
            onReload();
            onClose();
        }
        const logoutRes = await apiLogout();
        if(logoutRes.data.status === 200){
            await logout();
            myToast('Logged out');
        }
    }
    return (
        <View style={styles.containerModal} >
            <Controller
                control={control}
                rules={{
                    required: true
                }}
                render={({ field: { onChange, onBlur, value } })=> (
                    <TextInput
                        placeholder="Actual password"
                        onBlur={onBlur}
                        onChangeText={onChange}
                        style={styles.inputModal}
                        value={value}
                        placeholderTextColor="#ffffff"
                        cursorColor="#ffffff"
                    />
                )}
                name="password"
            />
            {errors.password && <Text style={styles.txtModal} > Actual contraseña es requerida </Text> }
            <Controller
                control={control}
                rules={{
                    required: true
                }}
                render={({ field: { onChange, onBlur, value } })=> (
                    <TextInput
                        placeholder="Nueva password"
                        onBlur={onBlur}
                        onChangeText={onChange}
                        style={styles.inputModal}
                        value={value}
                        placeholderTextColor="#ffffff"
                        cursorColor="#ffffff"
                    />
                )}
                name="newPassword"
            />
            {errors.newPassword && <Text style={styles.txtModal} > Nueva contraseña es requerida </Text> }
            <Controller
                control={control}
                rules={{
                    required: true
                }}
                render={({ field: { onChange, onBlur, value } })=> (
                    <TextInput
                        placeholder="Repetir nueva password"
                        onBlur={onBlur}
                        onChangeText={onChange}
                        style={styles.inputModal}
                        value={value}
                        placeholderTextColor="#ffffff"
                        cursorColor="#ffffff"
                    />
                )}
                name="repeatNewPassword"
            />
            {errors.repeatNewPassword && <Text style={styles.txtModal} > Repetir nueva contraseña es requerido </Text> }
            <CustomButton title="Guardar" onPress={handleSubmit(onSubmit)} />
        </View>
    )
}