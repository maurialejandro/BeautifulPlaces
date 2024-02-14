import React from "react";
import {View, Text, Alert} from "react-native";
import {filter, size} from "lodash";
import {Avatar} from "@rneui/base";
import {Icon} from "@rneui/themed";
import * as ImagePicker from "expo-image-picker";
import * as ImageManipulator from "expo-image-manipulator";
import {styles} from "../styles";

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
        await setImages([...images, file.uri]);
        console.log(images);
    }
    const removeImage = (image) => {
        Alert.alert(
            "Eliminar Imagen",
            "¿Estas seguro que quieres eliminar imagen?",
            [
                {
                    text: "Calncelar",
                    onPress: () => console.log("cancel"),
                    style: "cancel"
                },
                {
                    text: "Eliminar",
                    onPress: () => {
                        setImages(
                            filter(images, (imageUrl) => imageUrl !== image)
                        )
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
                        uri:file
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