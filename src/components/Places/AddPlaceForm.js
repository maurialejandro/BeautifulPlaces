import React, {useState} from "react";
import {Platform, Text, TextInput, View} from "react-native";
import {styles} from "../styles";
import {Icon, Input} from "@rneui/themed";
import {useForm, Controller} from "react-hook-form";
import {CustomButton} from "../Elements/CustomButton";
import UploadedImages from "./UploadedImages";
import {storeImagesPlace, storePlace} from "../../api/apiPlace";
import {myToast} from "../Elements/myToast";
import {useNavigation} from "@react-navigation/native";
import {useRemovePlaceContext} from "../../context/PlaceContext";

export default function AddPlaceForm(props) {

    const [resImageStatus, setResImageStatus] = useState(false);
    const navigation = useNavigation();
    const removePlace = useRemovePlaceContext();
    const { setIsVisibleMap,
        location,
        images,
        setImages
    } = props;

    const { handleSubmit, control,
        formState: { errors }, getValues
    } = useForm({
        defaultValues: {
            name: '',
            description: '',
        }
    });

    const onSubmit = async (data) => {

        if(!images || !location){
            return;
        }
        const res = await storePlace(data, location);

        if(res.status !== 200) {
            myToast('Error al guardar lugar');
            return;
        }
            let formData = new FormData();
            images.map(async (file, index) => {
                const response = await fetch(file)
                const blob = await response.blob()
                formData.append('image', {
                    file: blob,
                    uri: Platform.OS === 'ios' ? file.replace('file://', ''): file,
                    type: blob.type,
                    size: blob.size,
                    name: blob._data.name
                })
                formData.append('id', res.place.id);
                const imageRes = await storeImagesPlace(formData);
                if(imageRes.status !== 200 ){
                    setResImageStatus(true);
                }
            })
            if(!resImageStatus){
                    myToast('Lugar almacenado');
                    await removePlace();
                    navigation.reset({
                        index: 0,
                        routes: [{ name: "places" }]
                    });
            } else {
                myToast('Error al almacenar');
            }


    }


    return (
        <View style={styles.container} >
            <>
                <Controller
                    control={control}
                    rules={{
                        required: true
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <Input
                            placeholder="Nombre del lugar"
                            onBlur={onBlur}
                            style={styles.inputForm}
                            onChangeText={onChange}
                            value={value}
                        />
                    )}
                    name="name"
                />
                {errors.name && <Text style={styles.txt} > Nombre es requerido </Text>}

                <Controller
                    control={control}
                    rules={{
                        required: true
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <Input
                            placeholder="Descripción"
                            multiline={true}
                            onBlur={onBlur}
                            style={styles.inputForm}
                            onChangeText={onChange}
                            value={value}
                            rightIcon={
                                <Icon
                                    type="material-community"
                                    name="google-maps"
                                    onPress={() => setIsVisibleMap(true)}
                                />
                            }
                        />
                    )}
                    name="description"
                />
                {errors.description && <Text style={styles.txt} > Descripción es requerida </Text>}
            </>

            <UploadedImages images={images} setImages={setImages} />
            <CustomButton
                title="Guardar"
                onPress={handleSubmit(onSubmit)}
                style={styles.btn}
            />

        </View>
    );
}