import axios from "axios";
import * as SecureStore from 'expo-secure-store';
import {AxiosIntance} from "../axiosInstance/AxiosInstance";
const apiUrl = process.env.API_URL;
const key = process.env.KEY_STORE;

/**
 * handle token manage token in SecureStore
 * token is in Secure Store return token as string
 * if no token in Secure Store fetch to back
 * to get token and return as string
 */
export async function handleToken(){
    try {
        const tokenLocal = await SecureStore.getItemAsync(key);
        if(!tokenLocal){
            const response = await AxiosIntance.get('/token');
            await SecureStore.setItemAsync(key, response.data.token);
            return response.data.token;
        }
        return tokenLocal;
    } catch (e) {
        return console.log(e, 'here in error');
    }

}