import React from "react";
import {Text, View} from "react-native";
import {Modal} from "../Shared/Modal";
import {styles} from "../styles";
import {Button} from "@rneui/themed";
import {myToast} from "../Elements/myToast";
import {useNavigation} from "@react-navigation/native";
import { Input } from "@rneui/themed";
import {useForm, Controller} from "react-hook-form";
import {comment} from "../../api/apiComment";
export default function ModalComment(props){
    const {modalCommentIsVisible, setModalCommentIsVisible, idPlace} = props;
    const navigation = useNavigation();
    const {control, handleSubmit, formState: { errors }, } = useForm({
        defaultValues: {
            comment: ""
        }
    });
    const closeModal = () => {
        setModalCommentIsVisible(false);
    }

    const onSubmit = async (data) => {
        console.log(data, idPlace);
        const res = await comment(data, idPlace);
        if(res.error === 'Network Error'){
            myToast('Error de conexion con el servidor');
        }
        if(res.error === 'bad credentials'){
            myToast('Email o contrasena incorrectos');
        }
        if(res.status){
            myToast('Comentado');
            setModalCommentIsVisible(false);
        }
    }

    return(
            <View style={styles.containerModal} >
                <Modal
                    show={modalCommentIsVisible}
                >
                    <View>
                        <Controller
                            control={control}
                            rules={{
                                required: true
                            }}
                            render={({ field: {onChange, onBlur, value} })=>(
                                <Input
                                    placeholder="Commentario"
                                    onBlur={onBlur}
                                    style={styles.inputForm}
                                    onChangeText={onChange}
                                    value={value}
                                    errorMessage={errors.comment ? "Comentario requerido" : ""}
                                />
                            )}
                            name="comment"
                        />
                        <Button title='Comentar' onPress={handleSubmit(onSubmit)} type="outline" />
                        <Button title="Cancelar" onPress={closeModal} type="outline" />
                    </View>
                </Modal>
            </View>
     );
}