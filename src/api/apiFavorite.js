import {getSecureToken} from "./token/handleToken";
import {AxiosInstance} from "./axiosInstance/AxiosInstance";
export async function storeFavorite(id) {
    let token = await getSecureToken();
    AxiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    return AxiosInstance.post('place/add-favorite',
        JSON.stringify({ place_id: id, favorite: 1 })
    ).then((res) => {
        return res.data;
    }).catch((e) => {
        console.log(e);
        return e;

    })
}

export async function removeFavorite(id){
    let token = await getSecureToken();
    AxiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    return AxiosInstance.post('favorite/place/remove',
        JSON.stringify({ id: id })
    ).then((res) => {
        return res.data;
    }).catch((e) => {
        console.log(e);
        return e;
    })
}

export async function getPlaceFavorite(){
    let token = await getSecureToken();
    AxiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    return AxiosInstance.post('favorite/place/user').then((res) => {
        return res.data;
    }).catch((e) => {
        console.log(e);
        return e;
    })
}

