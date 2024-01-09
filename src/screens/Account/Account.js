import React, {useEffect, useState} from 'react';
import * as SecureStore from 'expo-secure-store';
import { UserGuest } from "./UserGuest/UserGuest";
import { UserLogged } from "./UserLogged/UserLogged";
const tokenKey = process.env.KEY_TOKEN;

export function Account(){
    const [ isLogged, setIsLogged ] = useState(false);
    const [ token, setToken ] = useState(null);
    useEffect(() => {
        (async () => {
            await setToken(SecureStore.getItemAsync(tokenKey));
            console.log(token)
            if(token){
                await setIsLogged(true)
            }
        })()
    }, []);
    return  isLogged ? <UserLogged /> : <UserGuest />;
}