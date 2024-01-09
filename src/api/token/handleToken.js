import * as SecureStore from 'expo-secure-store';
import { AxiosIntance } from "../axiosInstance/AxiosInstance";
const xcsrfKey = process.env.KEY_XCSRF;

/**
 * handle token manage token in SecureStore
 * token is in Secure Store return token as string
 * if no token in Secure Store fetch to back
 * to get token and return as string
 */
export async function handleToken(){
        const tokenLocal = await SecureStore.getItemAsync(xcsrfKey);
        if(!tokenLocal){
            return await getXCSRFToken();
        }
        const checkToken = await checkXCSRFToken();
        if(checkToken.status === 400){
            return await getXCSRFToken();
        }
        return tokenLocal;
}

async function getXCSRFToken(){
    try {
        const response = await AxiosIntance.get('/token');
        return response.data.token;
    } catch (e) {
        return 'error';
    }
}
async function checkXCSRFToken(){
    return await AxiosIntance.post('/check-token-x-csrf').then((res) => {
        return true;
    }).catch((e) => {
        return {'status': 400}
    })
}
