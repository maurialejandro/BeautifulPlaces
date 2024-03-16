import React, {useContext, useEffect, useState} from "react";
import NetInfo from '@react-native-community/netinfo';

const netInfoContext = React.createContext();

const netState = {
    ip: null,
    isWifiEnabled: null,
    type: null,
    isConnected: false,
    isInternetReachable: false
}
export function useNetInfoContext(){
    return useContext(netInfoContext);
}
export const NetInfoProvider = (props) => {
    const { children } = props;
    const [ state, setState ] = useState();
    useEffect(() => {
        NetInfo.fetch().then(state => {
            setState({
                ip: state.details.ipAddress,
                isWifiEnabled: state.isWifiEnabled,
                type: state.type,
                isConnected: state.isConnected,
                isInternetReachable: state.isInternetReachable
            });
        });
    }, []);
    return (
        <netInfoContext.Provider value={state}>
            {children}
        </netInfoContext.Provider>
    )
}