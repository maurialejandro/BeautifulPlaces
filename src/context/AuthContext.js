import React, {useContext, useState} from 'react';

const authContext = React.createContext();
const userLoginContext = React.createContext();
const userUpdateData = React.createContext();
const userLogoutContext = React.createContext();
const userData = {
    isLogged: false,
    userName: null,
    userEmail: null,
    userAvatar: null
}
export function useAuthContext(){
    return useContext(authContext);
}
export function useUserLoginContext(){
    return useContext(userLoginContext);
}
export function useUserUpdateData(){
    return useContext(userUpdateData);
}
export function useUserLogout(){
    return useContext(userLogoutContext);
}
export const AuthProvider = (props) => {
    const [ user, setUser ] = useState(userData)
    const login = (data) => {
        if(user.isLogged === false){
            setUser({
                id: data.id,
                isLogged: true,
                userName: data.name,
                userEmail: data.email,
                userAvatar: data.avatar
            });
        }
    }
    const logout = () => {
        if(user.isLogged === true) {
            setUser(userData);
        }
    }
    const updateData = async (data) => {
        if(user.isLogged === true){
            await setUser({
                isLogged: true,
                userName: data.name,
                userEmail: data.email,
                userAvatar: data.avatar
            });
        }
    }
    return (
        <authContext.Provider value={user}>
            <userLoginContext.Provider value={login}>
                <userLogoutContext.Provider value={logout}>
                    <userUpdateData.Provider value={updateData}>
                        {props.children}
                    </userUpdateData.Provider>
                </userLogoutContext.Provider>
            </userLoginContext.Provider>
        </authContext.Provider>
    )
 }