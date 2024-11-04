import React, {useState, useEffect} from "react";
import {ScrollView, Text, View, StyleSheet} from "react-native";
import {CarouselSnap} from "../../components/Elements/CarouselSnap";
import Header from "../../components/Places/Header";
import {Info} from "../../components/Places/Info";
import ModalToDelete from "../../components/Places/ModalToDelete";
import {useNavigation} from "@react-navigation/native";
import ButtonsPlace from "../../components/Places/ButtonsPlace";
import ModalComment from "../../components/Places/ModalComment";
import {ListUserComments} from "../../components/Elements/ListUserComments";
import {getUserComment} from "../../api/apiComment";

export default function Place({route}){
    const place = route.params;
    const navigation = useNavigation();
    const [ modalIsVisible, setModalIsVisible ] = useState(false);
    const [ modalCommentIsVisible, setModalCommentIsVisible ] = useState(false);
    const [ listUserCommentIsVisible, setListUserCommentIsVisible ] = useState(false);
    const [ isLoading, setIsLoading ] = useState(true);
    const [ usersComments, setUsersComments ] = useState(null);

    // hacer la funcion de la forma mas correcta posible para obtener
    // la informacion de la forma mas eficiente
    const callUserComments = async () => {
        await setIsLoading(true);
        await setListUserCommentIsVisible(true);
        const res = await getUserComment(place.id);
        await setUsersComments(res.placeUsersComments[0].user);
        await setIsLoading(false);
        await console.log("CALL_USER_COMMENTS", res.placeUsersComments[0].user.comments);

    }

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
            <View style={styles.container} >
                <Text
                    style={styles.text}
                    onPress={() => callUserComments() }
                >
                    Comentarios
                    <Text style={styles.textNumber} > {place.countComments} </Text>
                </Text>
            </View>

            {/*
                Este list view se muestra con un set manejado internamente
                Analizar la mejor forma de albergar los seter y geter del front
            */}
            <ListUserComments
                setListUserCommentIsVisible={setListUserCommentIsVisible}
                listUserCommentIsVisible={listUserCommentIsVisible}
                place={place}
                isLoading={isLoading}
                usersComments={usersComments}
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-end',
        marginEnd: 25
    },
    text: {
        color: "#000"
    },
    textNumber:{
        color: "red"
    },
    img: {
        width: 260,
        height: 260,
    }
})