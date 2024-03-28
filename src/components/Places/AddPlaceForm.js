import React from "react";
import {Text, View} from "react-native";
import {styles} from "../styles";
import {Icon, Input} from "@rneui/themed";
import {useForm, Controller} from "react-hook-form";
import {CustomButton} from "../Elements/CustomButton";
import UploadedImages from "./UploadedImages";
import {storePlace} from "../../api/apiPlace";
import {myToast} from "../Elements/myToast";
import {useNavigation} from "@react-navigation/native";

export default function AddPlaceForm(props) {
    const navigation = useNavigation();
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
            location: ''
        }
    });
    const onSubmit = async (data) => {
        if(!images.length || !images ){
            myToast("Debe subir una imagen del lugar por lo menos");
            return;
        };
        if(!location){
            myToast("Debe agregar ubicación geografica");
        }
        const res = await storePlace(data, location, images);
        if(res.status !== 200) {
            myToast('Error al guardar lugar');
            return;
        }
        myToast('Lugar almacenado');
        navigation.reset({
            index: 0,
            routes: [{ name: "places" }]
        });
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
                            errorMessage={errors.name && "Nombre es requerido"}
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
                            errorMessage={errors.description && "Descripción es requerido"}
                        />
                    )}
                    name="description"
                />

                <Controller
                    control={control}
                    rules={{
                        required: true
                    }}
                    render={({ field: {onChange, onBlur, value} }) => (
                        <Input
                            placeholder="Ubicación"
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
                            errorMessage={errors.location && "Ubicación es requerido"}
                        />
                    )}
                    name="location"
                />
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