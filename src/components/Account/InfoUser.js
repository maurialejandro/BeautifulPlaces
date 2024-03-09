import React, {useEffect, useState} from 'react';
import {Text, View, Platform} from "react-native";
import { Avatar } from "@rneui/base";
import { styles } from "../styles";
import {useAuthContext, useUserUpdateData} from "../../context/AuthContext";
import * as ImagePicker from 'expo-image-picker';
import * as ImageManipulator from 'expo-image-manipulator';
import {storeAvatar} from "../../api/apiUser";
import {myToast} from "../Elements/myToast";
const apiUrl = process.env.API_URL;

export function InfoUser(props){
    const user = useAuthContext();
    const updateUser = useUserUpdateData();
    const [ image, setImage ] = useState(null);
    const [status, requestPermission] = ImagePicker.useMediaLibraryPermissions();
    useEffect(() => {
        if(user.userAvatar){
            setImage(`${apiUrl}/user/${user.userAvatar}`);
        }
    }, [user]);
    const changeAvatar = async () => {
        await requestPermission();
        if(status.status === 'granted'){
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
            });
            await resizeImageManipulator(result.assets[0]);
        }
    }

    const resizeImageManipulator = async (result) => {

        const file = await ImageManipulator.manipulateAsync(
            result.uri,
            [
                {resize : {width: result.width * 0.5 , height: result.height * 0.5}}
            ],
            { compress: 0.5, format: ImageManipulator.SaveFormat.JPEG }
        )
        await uploadAvatar(file.uri)
    }

    const uploadAvatar = async (uri) => {
        let formData = new FormData();
        const response = await fetch(uri);
        const blob = await response.blob();
        formData.append("avatar", {
            file: blob,
            uri: Platform.OS === "ios" ? uri.replace('file://', '') : uri,
            type: blob.type,
            size: blob.size,
            name: blob._data.name
        })
        const res = await storeAvatar(formData);
        if(res.status === 200){
            myToast('Imagen Actualizada')
            await updateUser(res.user);
        } else {
            myToast('Error');
        }
    }
    return(
        <View style={styles.contentAvatar}>
            <Avatar
                size="large"
                containerStyle={styles.avatar}
                rounded
                icon={{ type: "material-community", name: "account" }}
                source={ image ? { uri: image } : require('../../../assets/avatar.png')}
            >
                <Avatar.Accessory size={25} onPress={() => changeAvatar()} />
            </Avatar>
            <View>
                <Text style={styles.displayNameAvatar} >
                    { user.userName }
                </Text>
                <Text>
                    { user.userEmail }
                </Text>
            </View>
        </View>
    )
}