import { View, Text } from 'react-native';
import {CustomButton} from "../../../components/Elements/CustomButton";
import {AccountOptions} from "../../../components/Account/AccountOptions";
import {useState} from "react";

export function UserLogged(){
    const [_, setReload] = useState(false);
    const onReload = () => setReload((prevState) => !prevState);

    return (
        <View>
            <AccountOptions onReload={onReload} />
            <CustomButton
                title="SingOut"
            />

        </View>
    )
}