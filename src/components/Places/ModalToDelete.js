import React from "react";
import {Text, View} from "react-native";
import {styles} from "../styles";
import {Modal} from "../Shared/Modal";
import { Button } from '@rneui/themed';
import {myToast} from "../Elements/myToast";
import {useNavigation} from "@react-navigation/native";
import {deletePlace} from "../../api/apiPlace";
import {useRemovePlaceContext} from "../../context/PlaceContext";

export default function ModalToDelete(props){
    const { modalIsVisible, setModalIsVisible, idPlace } = props;
    const navigation = useNavigation();
    const removePlace = useRemovePlaceContext()
    const toDelete =  () => {
        deletePlaceApi();
    }
    const closeModal = () => {
        setModalIsVisible(false);
    }

    const deletePlaceApi = async () => {
        const res = await deletePlace(idPlace);
        if(res.status === 200){
            myToast('Eliminado');
            removePlace();
            navigation.reset({
                index: 0,
                routes: [{ name: "places" }]
            });
            return;
        }
        myToast("Algo ocurrio");
    }
    return (
        <View style={styles.containerModal} >
            <Modal
                show={modalIsVisible}
            >
                <Text style={styles.text} > Seguro que deseas eliminar? </Text>
                <View >
                    <Button title="Eliminar" onPress={toDelete} type="Outline" />
                    <Button title="Cancelar" onPress={closeModal} type="Outline" />
                </View>
            </Modal>

        </View>
    );
}