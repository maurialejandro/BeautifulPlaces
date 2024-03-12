import React, {useState} from "react";
import {View, Text, Button, ScrollView} from "react-native";
import AddPlaceForm from "../../components/Places/AddPlaceForm";
import ModalMap from "../../components/Elements/ModalMap";
import PlaceImage from "../../components/Places/PlaceImage";
import {styles} from "../../components/styles";

export default function AddPlace(){

    const [isVisibleMap, setIsVisibleMap] = useState(false);
    const [location, setLocation] = useState(null);
    const [ images, setImages ] = useState([]);

    return(
            <ScrollView showsVerticalScrollIndicator={false} >
                <PlaceImage images={images[0]} setImages={setImages} />
                <View style={styles.containerPlaceForm} >
                    <AddPlaceForm
                        setIsVisibleMap={setIsVisibleMap}
                        location={location}
                        images={images}
                        setImages={setImages}
                    />
                    <ModalMap
                        isVisibleMap={isVisibleMap}
                        setIsVisibleMap={setIsVisibleMap}
                        location={location}
                        setLocation={setLocation}
                    />
                </View>
            </ScrollView>
    );
}