import React from "react";
import {styles} from "../styles";
import {Button, Icon} from "@rneui/themed";
import {View} from "react-native";

export default function ButtonsPlace(props) {
    const { setModalIsVisible, navigation, place } = props;
    const goToEditPlace = () => {
        navigation.navigate({ name: 'edit-place', params: place });
    }

    const deletePlaceApi = async () => {
        setModalIsVisible(true);
    }
    return(
        <View style={styles.containerIconPlace} >
            <Button
                onPress={() => goToEditPlace()}
                buttonStyle={{
                    borderRadius: 10,
                    backgroundColor: "#6ad194"
                }}
                containerStyle={{
                    marginVertical: 10,
                    marginLeft: 10
                }}
            >
                Editar
                <Icon
                    type="material-community"
                    name="pencil"
                    style={{
                        marginLeft: 5
                    }}
                />
            </Button>
            <Button
                onPress={() => deletePlaceApi()}
                buttonStyle={{
                    borderRadius: 10,
                    backgroundColor: "#d16a6a"
                }}
                containerStyle={{
                    marginVertical: 10,
                    marginRight: 10,
                }}
            >
                Eliminar
                <Icon
                    type="material-community"
                    name="delete"
                    style={{
                        marginLeft: 5
                    }}
                />
            </Button>
        </View>
    )
}