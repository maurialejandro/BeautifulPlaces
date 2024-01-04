import axios from "axios";

const myToken = '';

// create handle token in account user guest, save token in localstorage
// search if save token in localstorage is pro
export async function getXCSRFToken (){
    const response = await instance.get('/token').then((res) => {
        console.log('getToken',res.data.token);
        instance.defaults.headers['X-CSRF-TOKEN'] = res.data.token;
    })
}

const instance = axios.create({
    baseURL: 'http://192.168.100.15:8000/api',
    timeout: 1000,
    headers: { 
        "Content-type": 'application/json',
    }
});

export async function userRegister (data){;
    await getXCSRFToken();
    const response = await instance.post('/register',
        JSON.stringify({ name: data.email, email: data.email, password: data.password })
    ).then((res) => {
        return res.data.status;
    }).catch((e) => {
        return e;
    })
    return response;
}