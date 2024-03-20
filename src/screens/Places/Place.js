import React, {useState} from "react";
import {ScrollView, Text} from "react-native";
import {CarouselSnap} from "../../components/Elements/CarouselSnap";
import Header from "../../components/Places/Header";
import Map from "../../components/Places/Map";
import {styles} from "../../components/styles";
import {Info} from "../../components/Places/Info";
import {Icon} from "@rneui/themed";
import ModalToDelete from "../../components/Places/ModalToDelete";
import {useNavigation} from "@react-navigation/native";
export default function Place({route}){
    const place = route.params;
    const [ modalIsVisible, setModalIsVisible ] = useState(false);
    return (
        <ScrollView style={{ marginTop: -17 }} >
            <CarouselSnap
                place={place}
                height={250}
                setModalIsVisible={setModalIsVisible}
            />
            <Header
                place={place}
            />
            <Info
                place={place}
            />
            <ModalToDelete
                setModalIsVisible={setModalIsVisible}
                modalIsVisible={modalIsVisible}
                idPlace={place.id}
            />
        </ScrollView>
    );
}