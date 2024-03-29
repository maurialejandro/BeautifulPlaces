import {AxiosInstance, AxiosInstancentance, AxiosIntanceImage} from "./axiosInstance/AxiosInstance";
import {getSecureToken, saveSecureToken} from "./token/handleToken";


export async function storePlace(data, location, files){
    let token = await getSecureToken();
    AxiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    return await AxiosInstance.post('place/store',
        JSON.stringify({
            name: data.name,
            description: data.description,
            location: data.location,
            lat: location.latitude,
            long: location.longitude,
            images: files
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

export async function deleteStoreFile(data){
    let token = await getSecureToken();
    AxiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    return AxiosInstance.post('file/place/delete',
        JSON.stringify({ image: data })
    ).then((res) => {
        return res.data
    }).catch((e) => {
        return e ;
    })
}

export async function getPlaces(){
    let token = await getSecureToken();
    AxiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    return AxiosInstance.post('place/get-places').then((res) => {
        return res.data;
    }).catch((e) => {
        return e;
    })
}

export async function getPlace(data) {
    let token = await getSecureToken();
    AxiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    return AxiosInstance.post('url',
        JSON.stringify({ id: data.id })
    ).then((res) => {
        return res.data;
    }).catch((e) =>{
        return e;
    })
}

export async function getAllPlaces(){
    return AxiosInstance.post('place/get-all-places').then((res) => {
        return res.data;
    }).catch((e) => {
        return e;
    })
}

export async function getAllPlacesRanking(){
    let token = await getSecureToken();
    AxiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    return AxiosInstance.post('place/get-places-ranking').then((res) => {
        return res.data;
    }).catch((e) => {
        console.log(e);
        return e;
    })
}

export async function deletePlace(id){
    let token = await getSecureToken();
    AxiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    return AxiosInstance.post('place/delete',
        JSON.stringify({ id: id })
    ).then((res) => {
        return res.data
    }).catch((e) => {
        return e;
    })
}

export async function editPlace(data, files, location, id_place){
    let token = await getSecureToken();
    AxiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    return AxiosInstance.post('place/update',
        JSON.stringify({
            id_place: id_place,
            name: data.name,
            description: data.description,
            location: data.location,
            lat: location.latitude,
            long: location.longitude,
            images: files
        })
    ).then((res) => {
        return res.data
    }).catch((e) => {
        console.log(e);
        return e;
    })
}

export async function searchPlace(search){
    let token = await getSecureToken();
    AxiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    return AxiosInstance.post('place/search',
        JSON.stringify({search: search})
    ).then((res) => {
        return res.data
    }).catch((e) => {
        console.log(e);
        return e;
    })
}
