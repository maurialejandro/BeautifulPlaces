import { View, Text, TextInput } from 'react-native';
import { CustomButton } from "../Elements/CustomButton";
import { useForm, Controller } from "react-hook-form";
import {styles} from "../styles";
import {updateNameUser} from "../../api/apiUser";
import {useUserUpdateData} from "../../context/AuthContext";
import {myToast} from "../Elements/myToast";

export function ChangeDisplayName(props){

    const { onClose, onReload } = props;
    const updateUser = useUserUpdateData();
    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            name: ''
        }
    })
    const onSubmit = async (data) => {

        const res = await updateNameUser(data);
        if(res.status === 200){
            await updateUser(res.user);
            myToast('Nombre actualizado');
            onReload();
            onClose();
        }
    }

    return(
        <View style={styles.containerModal} >
            <Controller
                control={control}
                rules={{
                    required: true
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        placeholder="Nombre y apellidos"
                        onBlur={onBlur}
                        onChangeText={onChange}
                        style={styles.inputModal}
                        value={value}
                        placeholderTextColor="#ffffff"
                        cursorColor="#ffffff"
                    />
                )}
                name="name"
            />
            { errors.name && <Text style={styles.txtModal} > Nombre es requerido </Text> }
            <CustomButton title = "Guardar" onPress={handleSubmit(onSubmit)} />
        </View>
    )
}