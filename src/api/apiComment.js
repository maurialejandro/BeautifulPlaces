//create-commen

import {getSecureToken} from "./token/handleToken";
import {AxiosInstance} from "./axiosInstance/AxiosInstance";

export async function comment(data, idPlace){
       let token = await getSecureToken();
        AxiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        return await AxiosInstance.post('place/create-comment',
            JSON.stringify({
                place_id: idPlace,
                comment: data.comment
            })
        ).then((res) => {
            return res.data;
        }).catch((error) => {
            return error;
        })
}