import React from "react";
import {ScrollView, TextInput, View} from "react-native";
import {useForm, Control, Controller} from "react-hook-form";

export default function AddPlaceForm() {

    const { handleSubmit, control,
        formState: { errors }, getValues
    } = useForm({
        defaultValues: {
            name: '',
            description: ''
        }
    });
    return (
        <View>
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
                            onChangeText={onChange}
                            value={value}
                            placeholderTextColor="#ffffff"
                            cursorColor="#ffffff"
                        />
                    )}
                    name="name"
                />
                <Controller
                    control={control}
                    rules={{
                        required: true
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            placeholder="Descripción"
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            placeholderTextColor="#ffffff"
                            cursorColor="#ffffff"
                        />
                    )}
                    name="description"
                />
            </>
        </View>
    );
}