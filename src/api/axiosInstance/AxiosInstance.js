import axios from "axios";
import {getSecureToken} from "../token/handleToken";
const apiUrl = process.env.API_URL;
export const AxiosInstance = axios.create(
    {
        baseURL: apiUrl,
        timeout: 10000,
        headers: {
            'Content-Type': 'application/json',
        }
    }
);

export const AxiosIntanceImage = axios.create(
    {
        baseURL: apiUrl,
        timeout: 10000,
        headers: {
            'Content-Type': 'multipart/form-data',
        }
    }
);
