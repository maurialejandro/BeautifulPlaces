import {AxiosIntance, AxiosIntanceImage} from "./axiosInstance/AxiosInstance";
import {getSecureToken, saveSecureToken} from "./token/handleToken";

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

export async function updateNameUser(data){
    let token = await getSecureToken();
    AxiosIntance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    return await AxiosIntance.post('/user/update-name',
        JSON.stringify({name: data.name})
    ).then((res) => {
        return res.data;
    }).catch((e) => {
        // handle unautorized response with context
        console.log(e.response.data)
        return e.response.data
    })
}

export async function updateEmail(data){
    let token = await getSecureToken();
    AxiosIntance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    return await AxiosIntance.post('/user/update-email',
        JSON.stringify({ email: data.email, password: data.password })
    ).then((res) => {
        return res.data
    }).catch((e) => {
        if(e.response.data.errors){
            return e.response.data
        }
        console.log(e, e.response.data);
        return e;
    })
}

export async function updatePassword(data, email) {
    let token = await getSecureToken();
    AxiosIntance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    return await AxiosIntance.post('/user/update-password',
        JSON.stringify({ email: email, password: data.newPassword })
    ).then((res) => {
        return res.data
    }).catch((e) => {
        if(e.response.data){
            return e.response.data
        }
        console.log(e, e.response.data);
        return e;
    })
}

export async function storeAvatar(data) {
    let token = await getSecureToken();
    AxiosIntanceImage.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    return await AxiosIntanceImage.post('/user/store-avatar',
        data
    ).then((res) => {
        return res.data;
    }).catch((e) => {
        if(e.response.data){
            return e.response.data
        }
        console.log(e, e.response.data);
        return e;
    })
}

export async function apiLogout(){
    let token = await getSecureToken();
    AxiosIntance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    return await AxiosIntance.post('logout')
        .then((res) => {
            return res
        })
        .catch((e) => {
            console.log(e);
            if(e.response.data){
                return e.response.data;
            }
            return e;
        })
}
