import React from "react";
import {View, Text, Button} from "react-native";
import AddPlaceForm from "../../components/Places/AddPlaceForm";
import ModalMap from "../../components/Elements/ModalMap";

export default function AddPlace(){
    return (
        <View>
            <Text>
                Add Place
            </Text>
            <AddPlaceForm />
            <ModalMap />
            <Button title='Guardar'></Button>
        </View>
    );
}