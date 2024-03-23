import React, {useState} from "react";
import {ScrollView} from "react-native";
import {CarouselSnap} from "../../components/Elements/CarouselSnap";
import Header from "../../components/Places/Header";
import {Info} from "../../components/Places/Info";
import ModalToDelete from "../../components/Places/ModalToDelete";
import {useNavigation} from "@react-navigation/native";
import ButtonsPlace from "../../components/Places/ButtonsPlace";
import ButtonFavorite from "../../components/Places/Buttonfavorite";
export default function Place({route}){
    const place = route.params;
    const navigation = useNavigation();
    const [ modalIsVisible, setModalIsVisible ] = useState(false);

    return (
        <ScrollView style={{ marginTop: -17 }} >
            <CarouselSnap
                place={place}
                height={250}
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
            <ButtonsPlace
                navigation={navigation}
                setModalIsVisible={setModalIsVisible}
                place={place}
            />
            <ButtonFavorite place={place} />
        </ScrollView>
    );
}