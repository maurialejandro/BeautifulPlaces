import React, {useState} from "react";
import { Text, TextInput, View } from "react-native";
import {styles} from "../styles";
import {Icon} from "@rneui/themed";
import {useForm, Controller} from "react-hook-form";
import {CustomButton} from "../Elements/CustomButton";
import * as ImagePicker from "expo-image-picker";
import * as ImageManipulator from "expo-image-manipulator";
import UploadedImages from "./UploadedImages";

export default function AddPlaceForm(props) {
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

    const onSubmit = (data) => {
        console.log(data, location)
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
                            style={styles.inputInto}
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