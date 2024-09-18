import React, {useState} from "react";
import {ScrollView} from "react-native";
import {CarouselSnap} from "../../components/Elements/CarouselSnap";
import Header from "../../components/Places/Header";
import {Info} from "../../components/Places/Info";
import ModalToDelete from "../../components/Places/ModalToDelete";
import {useNavigation} from "@react-navigation/native";
import ButtonsPlace from "../../components/Places/ButtonsPlace";
import ModalComment from "../../components/Places/ModalComment";
export default function Place({route}){
    const place = route.params;
    const navigation = useNavigation();
    const [ modalIsVisible, setModalIsVisible ] = useState(false);
    const [ modalCommentIsVisible, setModalCommentIsVisible ] = useState(false);
    console.log(place, 'IN PLACE COMPONENT');
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
            <ModalComment
                setModalCommentIsVisible={setModalCommentIsVisible}
                modalCommentIsVisible={modalCommentIsVisible}
                idPlace={place.id}
            />
            <ButtonsPlace
                navigation={navigation}
                setModalIsVisible={setModalIsVisible}
                setModalCommentIsVisible={setModalCommentIsVisible}
                place={place}
            />
        </ScrollView>
    );
}