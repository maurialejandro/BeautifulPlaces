import {View, Text, TextInput} from "react-native";
import {CustomButton} from "../Elements/CustomButton";
import { Controller, useForm } from "react-hook-form";
import {styles} from "../styles";
import { Input } from "@rneui/themed";
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
                    <Input
                        placeholder="Actual contraseña"
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        errorMessage={errors.password && "Contraseña es requerido"}
                    />
                )}
                name="password"
            />
            <Controller
                control={control}
                rules={{
                    required: true
                }}
                render={({ field: { onChange, onBlur, value } })=> (
                    <Input
                        placeholder="Nueva contraseña"
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        errorMessage={errors.newPassword && "Nueva contraseña es requerido"}
                    />
                )}
                name="newPassword"
            />
            <Controller
                control={control}
                rules={{
                    required: true
                }}
                render={({ field: { onChange, onBlur, value } })=> (
                    <Input
                        placeholder="Repetir nueva contraseña"
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        errorMessage={errors.repeatNewPassword && "Repetir nueva contraseña es requerido"}
                    />
                )}
                name="repeatNewPassword"
            />
            <CustomButton title="Guardar" onPress={handleSubmit(onSubmit)} />
        </View>
    )
}