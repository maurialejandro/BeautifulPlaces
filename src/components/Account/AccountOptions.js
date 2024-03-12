import { View, Text } from 'react-native';
import { ListItem, Icon } from "@rneui/themed";
import { map } from "lodash";
import {useState} from "react";
import { ChangeDisplayName } from "./ChangeDisplayName";
import { ChangePasswordForm } from "./ChangePasswordForm";
import { ChangeEmailForm } from "./ChangeEmailForm";
import {Modal} from "../Shared/Modal";

export function AccountOptions(props){
    const { onReload, nav } = props;
    const [ showModal, setShowModal ] = useState(false);
    const [ renderComponent, setRenderComponent ] = useState(null);

const onCloseOpenModal = () => setShowModal(prevState => !prevState);
    const selectedComponent = (key) => {
        if (key === "displayName") {
            setRenderComponent(
                <ChangeDisplayName onClose={onCloseOpenModal} onReload={onReload} />
           );
        }
        if (key === "email") {
            setRenderComponent(
                <ChangeEmailForm onClose={onCloseOpenModal} onReload={onReload} />
            );
        }

        if (key === "password") {
            setRenderComponent(<ChangePasswordForm onClose={onCloseOpenModal} onReload={onReload} />);
        }
        onCloseOpenModal();
   };

    const menuOptions = getMenuOptions(selectedComponent);

    return (
        <View>
            {
                map(menuOptions, (menu, index) => (
                    <ListItem key={index} bottomDivider onPress={menu.onPress}>
                        <Icon
                            type={menu.iconType}
                            name={menu.iconNameLeft}
                            color={menu.iconColorLeft}
                        />
                        <ListItem.Content>
                            <ListItem.Title>{menu.title}</ListItem.Title>
                        </ListItem.Content>
                        <Icon
                            tyoe={menu.iconType}
                            name={menu.iconNameRight}
                            color={menu.iconColorRight}
                        />
                    </ListItem>
                ))
            }
            <Modal show={showModal} close={onCloseOpenModal} >
                {renderComponent}
            </Modal>
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
            title: "Cambiar Correo",
            iconType: "material-community",
            iconNameLeft: "at",
            iconColorLeft: "#ccc",
            iconNameRight: "chevron-right",
            iconColorRight: "#ccc",
            onPress: () => selectedComponent("email"),
        },
        {
            title: "Cambiar Contraseña",
            iconType: "material-community",
            iconNameLeft: "lock-reset",
            iconColorLeft: "#ccc",
            iconNameRight: "chevron-right",
            iconColorRight: "#ccc",
            onPress: () => selectedComponent("password"),
        },
    ];
}