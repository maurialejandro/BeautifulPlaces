import {AxiosInstance} from "./axiosInstance/AxiosInstance";
import {getSecureToken} from "./token/handleToken";

export async function getRanking(id){
    let token = await getSecureToken();
    AxiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    return AxiosInstance.post('place/ranking',
        JSON.stringify({ place_id: id })
    ).then((res) => {
        return res.data;
    }).catch((e) => {
        return e;
    });
}

export async function updateRankingPlace(ranking,ranking_id){
    let token = await getSecureToken();
    AxiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    return AxiosInstance.post('place/update-ranking',
        JSON.stringify({
            ranking: ranking,
            ranking_id: ranking_id
        })
    ).then((res) => {
        return res.data;
    }).catch((e) => {
        console.log(e);
        return e;
    })
}

export async function storeRankingPlace(ranking, place_id){
    let token = await getSecureToken();
    AxiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    return AxiosInstance.post('place/add-ranking',
        JSON.stringify({
            ranking: ranking,
            place_id: place_id
        })
    ).then((res) => {
        return res.data
    }).catch((e) => {
        console.log(e);
        return e;
    })
}