import {View, Text, TextInput} from "react-native";
import {CustomButton} from "../Elements/CustomButton";
import { Controller, useForm } from "react-hook-form";
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
                    <TextInput
                        placeholder="Email"
                        onBlur={onBlur}
                        onChangeText={onChange}
                        style={styles.inputModal}
                        value={value}
                        placeholderTextColor="#ffffff"
                        cursorColor="#ffffff"
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
                    <TextInput
                        placeholder="Password"
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
            {errors.password && <Text style={styles.txtModal} > Password es requerido </Text> }
            <CustomButton title="Guardar" onPress={handleSubmit(onSubmit)} />
        </View>
    )
}