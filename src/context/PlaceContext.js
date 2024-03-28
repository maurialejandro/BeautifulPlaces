import React, {useContext, useState} from "react";

const placeContext = React.createContext();
const addPlaceContext = React.createContext();
const removePlaceContext = React.createContext();
const placesContext = React.createContext();
const addPlacesContext = React.createContext();
const removePlacesContext = React.createContext();
const placesRankingContext = React.createContext();
const addPlacesRankingContext = React.createContext();
const removePlacesRankingContext = React.createContext();
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
export function usePlacesContext(){
    return useContext(placesContext)
}
export function useAddPlacesContext(){
    return useContext(addPlacesContext);
}
export function useRemovePlacesContext(){
    return useContext(removePlacesContext);
}
export function usePlacesRankingContext(){
    return useContext(placesRankingContext);
}
export function useAddPlacesRankingContext(){
    return useContext(addPlacesRankingContext);
}
export function useRemovePlacesRankingContext(){
    return useContext(removePlacesRankingContext);
}
export const PlaceProvider = (props) => {
    const [ placesUser, setPlaceUser ] = useState(placeData);
    const [ places, setPlaces ] = useState(placeData);
    const [ placesRanking, setPlacesRanking ] = useState(placeData);
    const addPlacesUser = (data) => {
        setPlaceUser(data);
    }
    const removePlacesUser = () => {
        setPlaceUser(placeData);
    }
    const addPlaces = (data) => {
        setPlaces(data);
    }
    const removePlaces = () => {
        setPlaces(placeData);
    }
    const addPlacesRanking = (data) => {
        setPlacesRanking(data);
    }
    const removePlacesRanking = () => {
        setPlacesRanking(placeData);
    }
    return (
        <placeContext.Provider value={placesUser}>
            <addPlaceContext.Provider value={addPlacesUser}>
                <removePlaceContext.Provider value={removePlacesUser}>
                    <placesContext.Provider value={places}>
                        <addPlacesContext.Provider value={addPlaces}>
                            <removePlacesContext.Provider value={removePlaces}>
                                <placesRankingContext.Provider value={placesRanking}>
                                    <addPlacesRankingContext.Provider value={addPlacesRanking}>
                                        <removePlacesRankingContext.Provider value={removePlacesRanking}>
                                            {props.children}
                                        </removePlacesRankingContext.Provider>
                                    </addPlacesRankingContext.Provider>
                                </placesRankingContext.Provider>
                            </removePlacesContext.Provider>
                        </addPlacesContext.Provider>
                    </placesContext.Provider>
                </removePlaceContext.Provider>
            </addPlaceContext.Provider>
        </placeContext.Provider>
    )
}