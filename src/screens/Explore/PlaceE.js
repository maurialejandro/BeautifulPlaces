import React, {useEffect, useState} from "react";
import {ScrollView, Text, View} from "react-native";
import {CarouselSnap} from "../../components/Elements/CarouselSnap";
import {Info} from "../../components/Places/Info";
import Header from "../../components/Explore/Header";
import AddRaiting from "../../components/Explore/AddRaiting";
import YourOpinion from "../../components/Explore/YourOpinion";
import {useAuthContext} from "../../context/AuthContext";

export default function PlaceE({route}){
    const place = route.params;
    const userContext = useAuthContext();
    const [ rankingUser, setRankingUser ] = useState(null);
    const [ isRaitingUser, setIsRaitingUser ] = useState(null);

    useEffect(() => {
        (async() =>{
            const searchUserLoggedInRankings = await place.rankings.filter((ranking) => ranking.user_id === userContext.id);
            if(searchUserLoggedInRankings.length){
                await setRankingUser(searchUserLoggedInRankings)
                setIsRaitingUser(true);
            }
        })()
    }, [])
    return(
        <ScrollView style={{ marginTop: -17 }}>
            <CarouselSnap
                place={place}
                height={250}
            />
            <Header place={place} />
            {
                isRaitingUser ? (
                    <YourOpinion place={place} rankingUser={rankingUser} />
                ) : (
                    <AddRaiting place={place} />
                )
            }
            <Info place={place} />
        </ScrollView>
    )
}