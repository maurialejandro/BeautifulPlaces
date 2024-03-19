import {getSecureToken} from "./token/handleToken";
import {AxiosInstance} from "./axiosInstance/AxiosInstance";

export async function getFavorites(){
    let token = await getSecureToken();
    AxiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    return AxiosInstance.post('place/get-favorite-place').then((res) => {
        return res.data
    }).catch((e) => {
        console.log(e);
        return e;
    })
}

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

export async function updateFavorite(id, favorite){
    let token = await getSecureToken();
    AxiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    return AxiosInstance.post('place/update-favorite',
        JSON.stringify({ id: id, favorite: favorite })
    ).then((res) => {
        return res.data;
    }).catch((e) => {
        console.log(e);
        return e;
    })
}