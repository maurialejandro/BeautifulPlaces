import {AxiosIntance, AxiosIntanceImage} from "./axiosInstance/AxiosInstance";
import {getSecureToken, saveSecureToken} from "./token/handleToken";
import {Axios} from "axios";

export async function storePlace(data, location){
    let token = await getSecureToken();
    AxiosIntance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    return await AxiosIntance.post('place/store',
        JSON.stringify({
            name: data.name,
            description: data.description,
            lat: location.latitude,
            long: location.longitude
        })
    ).then((res) => {
        return res.data;
    }).catch((e) => {
        return e;
    })
}

export async function storeImagesPlace(data) {
    let token = await getSecureToken();
    AxiosIntanceImage.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    return AxiosIntanceImage.post('place/store-file',
        data
    ).then((res) => {
        return res.data;
    }).catch((e) => {
        return e;
    })
}

export async function getPlaces(data){
    let token = await getSecureToken();
    AxiosIntance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    return AxiosIntance.post('place/get-places').then((res) => {
        return res.data;
    }).catch((e) => {
        return e;
    })
}

export async function getPlace(data) {
    let token = await getSecureToken();
    AxiosIntance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    return AxiosIntance.post('url',
        JSON.stringify({ id: data.id })
    ).then((res) => {
        return res.data;
    }).catch((e) =>{
        return e;
    })
}

export async function getAllPlace(){
    let token = await getSecureToken();
    AxiosIntance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    return AxiosIntance.post('url').then((res) => {
        return res.data;
    }).catch((e) => {
        return e;
    })
}