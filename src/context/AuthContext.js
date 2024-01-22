import React, {useCallback, useContext, useEffect, useMemo, useState} from 'react';

const authContext = React.createContext();
const userLoginContext = React.createContext();

export function useAuthContext(){
    return useContext(authContext);
}

export function useUserLoginContext(){
    return useContext(userLoginContext);
}

export const AuthProvider = (props) => {
    const [isLogged,setIsLogged] = useState(false);

    const login = () => {
        if(!isLogged){
            setIsLogged(true);
        }
    }

    return (
        <authContext.Provider value={isLogged}>
            <userLoginContext.Provider value={login} >
                {props.children}
            </userLoginContext.Provider>
        </authContext.Provider>
    )
 }