import {View, Text, TextInput} from "react-native";
import {CustomButton} from "../Elements/CustomButton";
import { Controller, useForm } from "react-hook-form";
import { Input } from "@rneui/themed";
import {styles} from "../styles";
import {apiLogout, updateEmail} from "../../api/apiUser";
import {myToast} from "../Elements/myToast";
import {useUserLogout, useUserUpdateData} from "../../context/AuthContext";

export function ChangeEmailForm(props){

    const logout = useUserLogout();
    const updateUser = useUserUpdateData();
    const { onClose, onReload } = props;
    const { control, handleSubmit, formState: { errors },  } = useForm({
        defaultValues: {
            email: '',
            password: ''
        }
    })

    const onSubmit = async (data) => {
        const res = await updateEmail(data);
        if(res.errors){
            onReload();
            onClose();
            myToast(res.errors.email ? res.errors.email : res.errors.password);
            return;
        }
        if(res.status === 400){
            myToast(res.message);
            onReload();
            onClose();
            return;
        }
        if(res.status === 200){
            await updateUser(res.user);
            myToast('Correo actualizado');
            onReload();
            onClose();
        }
        const logoutRes = await apiLogout();
        if(logoutRes.data.status === 200){
            await logout();
        }
    }
    return(
        <View style={styles.containerModal}>
            <Controller
                control={control}
                rules={{
                    required: true
                }}
                render={({ field: { onChange, onBlur, value } })=>(
                    <Input
                        placeholder="Correo"
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                    />
                )}
                name="email"
            />
            { errors.email && <Text style={styles.txtModal} > Email es requerido </Text> }
            <Controller
                control={control}
                rules={{
                    required: true
                }}
                render={({ field: { onChange, onBlur, value }  }) =>(
                    <Input
                        placeholder="Contraseña"
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                    />
                )}
                name="password"
            />
            {errors.password && <Text style={styles.txtModal} > Password es requerido </Text> }
            <CustomButton title="Guardar" onPress={handleSubmit(onSubmit)} />
        </View>
    )
}