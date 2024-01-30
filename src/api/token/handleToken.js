import * as SecureStore from 'expo-secure-store';
const keyToken = process.env.KEY_TOKEN;

export async function saveSecureToken(token){
    await SecureStore.setItemAsync(keyToken, token)
}

export async function getSecureToken(){
    return await SecureStore.getItemAsync(keyToken);
}

export async function removeSecureToken(){
    return await SecureStore.setItemAsync(keyToken, null);
}
