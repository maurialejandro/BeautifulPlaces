import React, {useState} from "react";
import { SearchBar } from '@rneui/themed';
import {View} from "react-native";
import {searchPlace} from "../../api/apiPlace";
import {useAddPlacesContext, usePlacesContext, useRemovePlacesContext} from "../../context/PlaceContext";
export default function CustomSearchBar(){
    const [ search, setSearch ] = useState();
    const addPlaces = useAddPlacesContext();
    const removePlaces = useRemovePlacesContext();
    const updateSearch = async (search) => {
        setSearch(search)
        const res = await searchPlace(search);
        await removePlaces();
        if(res.status === 200){
            await addPlaces(res.placesSearch)
        }
    }
    return(
        <View>
            <SearchBar
                placeholder={"Buscar lugar"}
                onChangeText={updateSearch}
                value={search}
                containerStyle={{
                    borderRadius: 20,
                    backgroundColor: "#fff",
                    borderColor: "#fff",
                    marginTop: 15,
                    marginLeft: 15,
                    marginRight: 15,
                }}
                inputStyle={{
                    fontSize: 14,
                }}
                inputContainerStyle={{
                    backgroundColor: "#fff",
                }}
            />
        </View>
    )
}