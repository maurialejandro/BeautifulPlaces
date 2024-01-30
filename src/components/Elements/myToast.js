import Toast from "react-native-root-toast";

export function myToast(message){
    Toast.show(message, {
        duration: Toast.durations.SHORT,
        position: 500,
        animation: true,
        opacity: 0.8
    });
}