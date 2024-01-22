import { View, Text } from 'react-native';
import { ListItem, Avatar } from "@rneui/themed";
import { map } from "lodash";
import {useState} from "react";
import { ChangeDisplayName } from "./ChangeDisplayName";

export function AccountOptions(props){
    const { onReload } = props;
    const [ showModal, setShowModal ] = useState(false);
    const [ renderComponent, setRenderComponent ] = useState(null);

const onCloseOpenModal = () => setShowModal(prevState => !prevState);
    const selectedComponent = (key) => {
        if (key === "displayName") {
            setRenderComponent(
                <ChangeDisplayName onClose={onCloseOpenModal} onReload={onReload} />
           );
        }
        onCloseOpenModal();
   };

    const menuOptions = getMenuOptions(selectedComponent);

    return (
        <View>
            <Text>
                USER LOGGED
            </Text>
        </View>
    )
}

function getMenuOptions(selectedComponent) {
    return [
        {
            title: "Cambiar Nombre y Apellidos",
            iconType: "material-community",
            iconNameLeft: "account-circle",
            iconColorLeft: "#ccc",
            iconNameRight: "chevron-right",
            iconColorRight: "#ccc",
            onPress: () => selectedComponent("displayName"),
        },
        {
            title: "Cambiar Email",
            iconType: "material-community",
            iconNameLeft: "at",
            iconColorLeft: "#ccc",
            iconNameRight: "chevron-right",
            iconColorRight: "#ccc",
            onPress: () => selectedComponent("email"),
        },
    ];
}