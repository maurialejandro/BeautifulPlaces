import {AxiosIntance} from "./axiosInstance/AxiosInstance";
import {handleToken} from "./token/handleToken";

const apiUrl = process.env.API_URL;

export async function userRegister (data){

    AxiosIntance.defaults.headers['X-CSRF-TOKEN'] = await handleToken();
    const response = await AxiosIntance.post('/register',
        JSON.stringify({ name: data.email, email: data.email, password: data.password })
    ).then((res) => {
        return res.data;
    }).catch((e) => {
        return e;
    })
    return response;
}