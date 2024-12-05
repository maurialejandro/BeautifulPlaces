import React, { useState } from "react";
import {View, Text, StyleSheet} from "react-native";
import { ListItem } from "@rneui/themed";
import {getUserComment} from "../../api/apiComment";
import {Avatar} from "@rneui/base";
import {Loading} from "./Loading";
import {map} from "lodash";
import {ListItemTitle} from "@rneui/base/dist/ListItem/ListItem.Title";
const apiUrl = process.env.API_URL;

export function ListUserComments(props){
    const {
        listUserCommentIsVisible,
        setListUserCommentIsVisible,
        place,
        isLoading,
        usersComments
    } = props;
    return (
        <>
            { listUserCommentIsVisible === true &&
                (isLoading === true) ? (
                    <Loading text={"Cargando comentarios"} />
                ) : (
                    usersComments !== null && (
                        <View>
                                {
                                    map(usersComments, (userComment, index) => (
                                        <>
                                            <ListItem
                                                bottomDivider
                                            >
                                                    <Avatar
                                                        rounded
                                                        source={ userComment.user.avatar ?
                                                            { uri: `${apiUrl}/user/${userComment.user.avatar}` } :
                                                            require('../../../assets/avatar.png')}
                                                    />
                                                    <ListItem.Content>
                                                        <ListItem.Title>{ userComment.user.name }</ListItem.Title>
                                                        <ListItem.Subtitle key={index+2} > { userComment.comment }</ListItem.Subtitle>
                                                    </ListItem.Content>
                                            </ListItem>
                                        </>
                                    ))
                                }
                        </View>
                    )
                )
             }
        </>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-end',
        marginEnd: 25
    },
    titleText: {
        fontWeight: 'bold'
    },
    text: {
        width: "100%",
        color: "#000"
    },
    img: {
        width: 260,
        height: 260,
    }
})