import { StyleSheet, Dimensions } from "react-native";

export const styles = StyleSheet.create({
    viewNotLogged: {
        marginTop: 100,
        alignItems: "center",
    },
    containerIconPlace: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 5,
    },
    containerIconPlaceE: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    contentHeaderExplore: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    containerCard: {
        alignItems: 'center',
    },
    medal: {
        marginRight: 5,
    },
    content: {
        backgroundColor: "#fff",
        marginVertical: 10,
        marginHorizontal: 15,
        borderRadius: 20,
    },
    contentRating: {
        margin: 10,
    },
    image: {
        width: "100%",
        height: 150,
    },
    namePlaceFavorite: {
        fontSize: 18,
        fontWeight: "bold",
    },
    iconContainerPlaceFavorite: {
        position: "absolute",
        backgroundColor: "#fff",
        borderRadius: 50,
        padding: 15,
        top: -30,
        right: 20,
    },
    contentPlaceFavorite: {
        backgroundColor: "#fff",
        marginVertical: 10,
        marginHorizontal: 15,
    },
    infoContentPlaceFavorite: {
        paddingHorizontal: 20,
        paddingVertical: 15,
    },
    contentLocation: {
        flexDirection: "row",
        alignItems: "center",
        marginLeft: 15,
    },
    infoContent: {
        paddingHorizontal: 20,
        paddingTop: 15,
        flexDirection: "row",
        alignItems: "center",
    },
    rankingHeader: {
        paddingHorizontal: 20,
        paddingTop: 15,
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: "center",
    },
    infoContentUser: {
        position: 'absolute',
        top: 0,
        right: 0,
        paddingHorizontal: 10,
        paddingTop: 5,
        flexDirection: 'row',
        alignItems: 'center',
    },
    nameContent: {
        flexDirection: "row",
        alignItems: "center",
    },
    name: {
        fontSize: 18,
        fontWeight: "bold",
    },
    userName: {
        color: "#828282",
        fontSize: 15,
    },
    description: {
        color: "#828282",
        fontSize: 12,
        paddingHorizontal: 20,
        paddingBottom: 15,
        paddingTop: 5,
    },
    txtFavorite: {
        color: "#828282",
        fontSize: 12,
    },
    txtUserE: {
        fontWeight: "bold",
        color: "#828282",
        fontSize: 15,
    },
    viewDate: {
        position: "absolute",
        top: 0,
        right: 0,
        margin: 10,
        alignItems: "center",
    },
    txtDateE: {
        color: "#828282",
        fontSize: 12,
    },
    location: {
        color: "#828282",
        fontSize: 12,
    },
    favorites: {
        color: "#828282",
        fontSize: 10,
        marginLeft: 3,
    },
    contentPlaceAll: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 15,
        marginBottom: 15
    },
    containerViewCardPlace: {
        borderRadius: 10,
        overflow: "hidden",
    },
    containerTitleCardPlace: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 1,
    },
    containerFavoritesCardPlace: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 15
    },
    containerIconEartPlace:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 5,
        marginTop: -10
    },
    imgPlace: {
        width: '100px',
        height: 220,
    },
    container: {
        width: "90%"
    },
    containerNotLogged: {
        width: "70%"
    },
    containerImg:{
        width: "100%",
    },
    containerPlaceForm: {
        flex: 1,
        alignItems: 'center'
    },
    viewImage:{
        flexDirection: "row",
    },
    viewPlace: {
        flexDirection: "row",
        backgroundColor: "#ffffff",
        margin: 7,
    },
    viewPlaceImage: {
        marginRight: 15
    },
    imagePlace: {
        width: 80,
        height: 80
    },
    imagePlaceCard: {
        width: "100%",
        height: 100
    },
    textArea: {
        width: "100%",
        height: 100,
        marginTop: 20,
        borderCurve: "circular",
        opacity: 0.5,
        backgroundColor: "#000000",
        borderRadius: 16,
        paddingLeft: 10,
        color: "#ffffff"
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
    inputForm: {
        width: "100%",
        fontSize: 15,
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
        fontSize: 15,
        color: "#000000",
    },
    txtNamePlace: {
        fontWeight: "bold",
    },
    txtNameUser: {
        fontWeight: "bold"
    },
    txtListPlace: {
        color: "#828282",
    },
    txtInfoPlace: {
        fontSize: 17,
        fontWeight: "bold",
        marginLeft: 15
    },
    btn: {
        alignItems: "center",
        borderRadius: 16,
        backgroundColor: "#ACF6C8",
        height: 40,
        padding: 10,
        marginTop: 15,
        elevation: 3,
        marginBottom: 5
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
    contentMap: {
        height: 215,
        width: "100%",
    },
    iconPlaces: {
        position: "absolute",
        bottom: 10,
        right: 10
    },
    iconPlace: {
        flex: 1,
        position: "absolute",
    },
    loadingView: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    rating:{
        paddingVertical: 10,
    },
    titleViewHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    txtUserDescription: {
        flexDirection: "row",
        alignItems: "center",
    },
    contentViewHeader: {
        margin: 15,
    },
    contentViewHeaderOpinion: {
        margin: 15,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    contentViewHeaderOpinionView: {
        flexDirection: "row",
        alignItems: "center",
    },
    viewPlaceE: {
        backgroundColor: "#fff",
        margin: 10,
        borderRadius: 20
    },
    contentBtnFavorite: {
        position: "absolute",
        top: 200,
        right: 0,
        backgroundColor: "#fff",
        padding: 5,
        paddingLeft: 10,
        borderBottomLeftRadius: 20,
        borderTopLeftRadius: 20,
    },
    txtName: {
        fontSize: 20,
        fontWeight: "bold",
    },
    txtCustomButton: {
        fontSize: 15,
        fontWeight: "bold",
    },
    txtTitleLoading: {
        fontSize: 20,
        fontWeight: "bold",
    },
    txtDescription: {
        marginTop: 5,
        color: "#828282",
    },
    txtDescriptionE:{
        color: "#828282",
    },
    contentViewMap: {
        marginHorizontal: 15,
        marginTop: 20,
    },
    viewInfoPlace: {
        marginTop: 15
    }
})