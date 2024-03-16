import React from "react";
import {View, Text, Alert, Platform} from "react-native";
import {filter, size} from "lodash";
import {Avatar} from "@rneui/base";
import {Icon} from "@rneui/themed";
import * as ImagePicker from "expo-image-picker";
import * as ImageManipulator from "expo-image-manipulator";
import {styles} from "../styles";
import {myToast} from "../Elements/myToast";
import {storeImagesPlace, deleteStoreFile} from "../../api/apiPlace";
const apiUrl = process.env.API_URL;

export default function UploadedImages (props){
    const { images, setImages } = props;
    const [status, requestPermission] = ImagePicker.useMediaLibraryPermissions();
    const selectImage = async () => {
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
        await uploadImage(file.uri);
    }

    const uploadImage = async (uri) => {
        let formData = new FormData();
        const response = await fetch(uri);
        const blob = await response.blob();
        formData.append('image', {
            file: blob,
            uri: Platform.OS === 'ios' ? uri.replace('file://', ''): uri,
            type: blob.type,
            size: blob.size,
            name: blob._data.name
        });
        const imageRes = await storeImagesPlace(formData);
        if(imageRes.status === 200){
            await setImages([...images, imageRes.file]);
            myToast('Imagen subida satisfactoriamente');
        }
        if(imageRes.status === 400){
            myToast('Error al subir imagen');
        }
    }
    const removeImage = (image) => {
        Alert.alert(
            "Eliminar Imagen",
            "¿Estas seguro que quieres eliminar imagen?",
            [
                {
                    text: "Cancelar",
                    onPress: () => console.log("cancel"),
                    style: "cancel"
                },
                {
                    text: "Eliminar",
                    onPress: async  () => {
                        const resDelete = await deleteStoreFile(image);
                        if(resDelete.status === 200){
                            setImages(
                                filter(images, (imageUrl) => imageUrl !== image)
                            )
                            return;
                        }
                        myToast("Algo ocurrio");
                    }
                }
            ],
            {cancelable: false}
        )
    }
    return(
        <View style={styles.viewImage}>
            {size(images) < 5 &&  (
                <Icon
                    reverse
                    type="material-community"
                    name="camera"
                    color="#7a7a7a"
                    onPress={() => selectImage()}
                />
            )}
            {images.map((file, index) => (
                <Avatar
                    key={index}
                    source={{
                        uri:  `${apiUrl}/file/${file}`
                    }}
                    containerStyle={{margin: 7}}
                    size="medium"
                    onPress={() => {
                        removeImage(file)
                    }}
                />
            ))}
        </View>
    );
}