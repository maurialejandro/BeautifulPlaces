import { StyleSheet, Dimensions } from "react-native";

export const styles = StyleSheet.create({
    imgPlace: {
        width: '100px',
        height: 200
    },
    container: {
        width: "70%"
    },
    containerPlaceForm: {
        flex: 1,
        alignItems: 'center'
    },
    viewImage:{
        flexDirection: "row",
    },
    inputInto: {
        width: "100%",
        height: 35,
        marginTop: 20,
        borderCurve: "circular",
        opacity: 0.5,
        backgroundColor: "#000000",
        borderRadius: 16,
        paddingLeft: 10,
        color: "#ffffff"
    },
    input: {
        width: "100%",
        height: 50,
        marginTop: 20,
        borderCurve: "circular",
        opacity: 0.5,
        backgroundColor: "#000000",
        borderRadius: 16,
        paddingLeft: 10,
        color: "#ffffff"
    },
    txt: {
        color: "#000000"
    },
    contentAvatar: {
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        paddingVertical: 30,
    },
    avatar: {
        marginRight: 20,
    },
    displayNameAvatar: {
        fontWeight: "bold",
        paddingBottom: 5,
    },
    containerModal: {
        minWidth: 250,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
        borderRadius: 20,
    },
    inputModal: {
        width: "100%",
        height: 50,
        marginTop: 20,
        borderCurve: "circular",
        opacity: 0.5,
        backgroundColor: "#000000",
        borderRadius: 16,
        paddingLeft: 10,
        color: "#ffffff"
    },
    txtModal: {
        color: "#000000"
    },
    viewPlacesBody: {
        flex: 1,
        backgroundColor: "#fff"
    },
    btnContainer: {
        position: "absolute",
        bottom: 10,
        right:10,
        backgroundColor: "#fff",
        shadowColor: "black",
        shadowOffset: {
            width: 2, height: 2
        },
        shadowOpacity: 0.5
    },
    text: {
        color: "#000000"
    },
    btn: {
        alignItems: "center",
        borderRadius: 16,
        backgroundColor: "#C1F2B0",
        width: "40%",
        height: 40,
        padding: 10,
        marginTop: 15,
        elevation: 3
    },
    viewBtnModal: {
        marginTop: "-30%",
        justifyContent: 'center',
    },
    btnModal: {
        alignItems: "center",
        borderRadius: 16,
        backgroundColor: "#C1F2B0",
        width: "40%",
        height: 40,
        padding: 10,
        marginTop: 15,
        elevation: 3
    },
    customButtonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerMap: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
    },
    mapStyle: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
})