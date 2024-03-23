import React, {useContext, useState} from "react";

const placesFavoriteContext = React.createContext();
const addPlacesFavoriteContext = React.createContext();
const removePlacesFavoriteContext = React.createContext();

const placeData = [
    {
        id: null,
        name: null,
        description: null,
        lat: null,
        long: null,
        files: []
    }
];

export function usePlacesFavoriteContext(){
    return useContext(placesFavoriteContext);
}
export function useAddPlacesFavoriteContext(){
    return useContext(addPlacesFavoriteContext);
}
export function useRemovePlacesFavoriteContext(){
    return useContext(removePlacesFavoriteContext);
}

export const FavoritePlaceProvider = (props) => {
    const [placesFavorite, setPlacesFavorite] = useState(placeData);
    const addPlacesFavorite = (data) => {
        setPlacesFavorite(data);
    }
    const removePlacesFavorite = () => {
        setPlacesFavorite(placeData)
    }
    return(
        <placesFavoriteContext.Provider value={placesFavorite} >
            <addPlacesFavoriteContext.Provider value={addPlacesFavorite}>
                <removePlacesFavoriteContext.Provider value={removePlacesFavorite}>
                    {props.children}
                </removePlacesFavoriteContext.Provider>
            </addPlacesFavoriteContext.Provider>
        </placesFavoriteContext.Provider>
    )
}