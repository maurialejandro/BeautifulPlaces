import {AxiosIntance} from "./axiosInstance/AxiosInstance";
import {handleToken} from "./token/handleToken";
import * as SecureStore from "expo-secure-store";
const tokenKey = process.env.KEY_TOKEN;

export async function userRegister (data){

    AxiosIntance.defaults.headers['X-CSRF-TOKEN'] = await handleToken();
    return await AxiosIntance.post('/register',
        JSON.stringify({name: data.email, email: data.email, password: data.password})
    ).then((res) => {
        return res.data;
    }).catch((e) => {
        return e;
    });
}

export async function userLogin(data){
    AxiosIntance.defaults.headers['X-CSRF-TOKEN'] = await handleToken();
    return await AxiosIntance.post('/login',
         JSON.stringify({email: data.email, password: data.password})
    ).then((res) => {
        if(res.data.token){
            SecureStore.setItemAsync(tokenKey, res.data.token);
        }
        return { status: 200 };
    }).catch((e) => {
        return { status: 400 };
    });
}