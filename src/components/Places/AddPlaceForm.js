import React, {useState} from "react";
import {Platform, Text, TextInput, View} from "react-native";
import {styles} from "../styles";
import {Icon} from "@rneui/themed";
import {useForm, Controller} from "react-hook-form";
import {CustomButton} from "../Elements/CustomButton";
import UploadedImages from "./UploadedImages";
import {storeImagesPlace, storePlace} from "../../api/apiPlace";
import {myToast} from "../Elements/myToast";

export default function AddPlaceForm(props) {

    const [resImageStatus, setResImageStatus] = useState(false);

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
            let formData = new FormData()
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
                        <TextInput
                            placeholder="Nombre del lugar"
                            onBlur={onBlur}
                            style={styles.inputInto}
                            onChangeText={onChange}
                            value={value}
                            placeholderTextColor="#ffffff"
                            cursorColor="#ffffff"
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
                        <TextInput
                            placeholder="Descripción"
                            style={styles.textArea}
                            multiline={true}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            placeholderTextColor="#ffffff"
                            cursorColor="#ffffff"
                        />
                    )}
                    name="description"
                />
                {errors.description && <Text style={styles.txt} > Descripción es requerida </Text>}
            </>
            <Icon
                reverse
                type="material-community"
                name="google-maps"
                color="#FFB534"
                onPress={() => setIsVisibleMap(true)}
            />
            <UploadedImages images={images} setImages={setImages} />
            <CustomButton title="Guardar" onPress={handleSubmit(onSubmit)} />

        </View>
    );
}