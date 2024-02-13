import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
    }
})