import { View, Text } from 'react-native';
import {CustomButton} from "../../../components/Elements/CustomButton";
import {AccountOptions} from "../../../components/Account/AccountOptions";
import {useState} from "react";
import {InfoUser} from "../../../components/Account/InfoUser";
import {useNavigation} from "@react-navigation/native";
import {useUserLogout} from "../../../context/AuthContext";
import {apiLogout} from "../../../api/apiUser";
import {myToast} from "../../../components/Elements/myToast";
import {
    useRemovePlaceContext,
    useRemovePlacesContext,
    useRemovePlacesRankingContext
} from "../../../context/PlaceContext";
import {removeSecureToken} from "../../../api/token/handleToken";

export function UserLogged(){

    const logout = useUserLogout();
    const removePlace = useRemovePlaceContext();
    const removePlaces = useRemovePlacesContext();
    const removePlacesRanking = useRemovePlacesRankingContext();
    const [_, setReload] = useState(false);
    const navigation = useNavigation();

    const onReload = () => setReload((prevState) => !prevState);
    const toLogout = async () => {
        const res = await apiLogout();
        if(res.data.status === 200){
            myToast('Logged out');
            await removePlace();
            await logout();
            await removeSecureToken();
            await removePlaces();
            await removePlacesRanking();
            navigation.reset({
                index: 0,
                routes: [{ name: 'Mis Lugares' }]
            });
            return;
        }
        myToast('Algo sucedio');
    }
    return (
        <View>
            <InfoUser  />
            <AccountOptions onReload={onReload} nav={navigation} />
            <CustomButton
                onPress={toLogout}
                title="SingOut"
            />

        </View>
    )
}