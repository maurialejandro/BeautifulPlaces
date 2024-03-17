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