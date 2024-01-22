import { AxiosIntance } from "./axiosInstance/AxiosInstance";
import { saveSecureToken } from "./token/handleToken";

export async function userRegister (data){

    return await AxiosIntance.post('/register',
        JSON.stringify({name: data.email, email: data.email, password: data.password})
    ).then((res) => {
        return res.data;
    }).catch((e) => {
        if(e.response.data.errors){
            return { 'error': e.response.data.errors }
        }
        console.log(e);
        return e;
    });
}

export async function userLogin(data){

    return await AxiosIntance.post('/login',
         JSON.stringify({email: data.email, password: data.password})
    ).then((res) => {
        if(res.data.status === 200 && res.data.token){
            saveSecureToken(res.data.token);
        }
        return res.data;
    }).catch((e) => {
        if(e.response.data.errors){
            return { 'error': e.response.data.errors }
        }
        return e;
    });
}
