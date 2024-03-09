import React, {useContext, useState} from "react";

const placeContext = React.createContext();
const addPlaceContext = React.createContext();
const removePlaceContext = React.createContext();

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

export function usePlaceContext(){
    return useContext(placeContext);
}

export function useAddPlaceContext(){
    return useContext(addPlaceContext);
}

export function useRemovePlaceContext(){
    return useContext(removePlaceContext);
}
export const PlaceProvider = (props) => {
    const [ places, setPlace ] = useState(placeData);

    const addPlaces = (data) => {
        setPlace(data);
    }

    const removePlaces = () => {
        setPlace(placeData);
    }
    return (
        <placeContext.Provider value={places}>
            <addPlaceContext.Provider value={addPlaces}>
                <removePlaceContext.Provider value={removePlaces}>
                    {props.children}
                </removePlaceContext.Provider>
            </addPlaceContext.Provider>
        </placeContext.Provider>
    )
}