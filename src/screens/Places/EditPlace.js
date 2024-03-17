import React, {useState} from "react";
import {Text, View} from "react-native";
import {styles} from "../../components/styles";
import { useForm, Controller } from "react-hook-form";
import {editPlace} from "../../api/apiPlace";
import {myToast} from "../../components/Elements/myToast";
import {Icon, Input} from "@rneui/themed";
import UploadedImages from "../../components/Places/UploadedImages";
import {CustomButton} from "../../components/Elements/CustomButton";
import PlaceImage from "../../components/Places/PlaceImage";
import ModalMap from "../../components/Elements/ModalMap";
import {useNavigation} from "@react-navigation/native";
import {useRemovePlaceContext} from "../../context/PlaceContext";
export default function EditPlace({route}){

    const place = route.params;
    const [ images, setImages ] = useState(place.files.map(file => file.file));
    const [isVisibleMap, setIsVisibleMap] = useState(false);
    const [location, setLocation] = useState({
        latitude: parseFloat(place.lat), longitude: parseFloat(place.long), latitudeDelta: 0.007, longitudeDelta: 0.007 });
    const navigation = useNavigation();
    const removePlaces = useRemovePlaceContext();
    const { handleSubmit, control, formState: { errors }, getValues } = useForm({
        defaultValues: {
            name: place.name,
            description: place.description,
            location: place.location,
        }
    });
    const onSubmit = async (data) => {
        const res = await editPlace(data, images, location, place.id);
        console.log(res);
        if(res.status === 200){
            myToast('Lugar actualizado');
            await removePlaces();
            navigation.reset({
                index: 0,
                routes: [{ name: "places" }]
            });
        }
    }
    return(
        <>
        <View style={{ marginTop: -17 }} >
            <PlaceImage images={place.files[0].file} setImages={setImages}/>
        </View>
        <View style={styles.contentViewHeader} >
                <Controller
                    control={control}
                    rules={{
                        required: true
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <Input
                            placeholder="Nombre del lugar"
                            onBlur={onBlur}
                            onChangeText={onChange}
                            style={styles.inputForm}
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
                            onChangeText={onChange}
                            value={value}
                            style={styles.inputForm}
                        />
                    )}
                    name="description"
                />
                {errors.description && <Text> Descripción es requerida </Text>}

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
                        />
                    )}
                    name="location"
                />
                {errors.location && <Text style={styles.txt} > Ubicación es requerida </Text>}

            <UploadedImages
                images={images} setImages={setImages}
            />
            <CustomButton
                title="Actualizar"
                onPress={handleSubmit(onSubmit)}
                style={styles.btn}
            />
            <ModalMap
                isVisibleMap={isVisibleMap}
                setIsVisibleMap={setIsVisibleMap}
                location={location}
                setLocation={setLocation}
            />
        </View>
        </>
    );
}