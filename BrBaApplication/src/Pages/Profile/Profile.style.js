import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#18191A'
    },
    profileimagecontainer: {
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 20
    },
    profileimage: {
        width: 98,
        height: 98,
        borderRadius: 48,
        borderWidth: 3,
        borderColor: '#fff'
    },
    informationscontainer: {
        justifyContent: "center",
        alignItems: "center"
    },
    informationstext: {
        color: '#fff',
        fontWeight: "bold",
        fontSize: 25
    },
    informationsdetailcontainer: {
        borderWidth: 2,
        borderColor: '#fff',
        marginHorizontal: 10,
        marginVertical: 10,
        paddingHorizontal: 20,
        paddingVertical: 10,
        flexDirection: "row",
        justifyContent: "space-evenly"
    },
    informationsdetailinnercontainer:{
        flexDirection:"row"
    },
    informationsdetailtext: {
        color: '#fff',
        fontWeight: "bold"
    },
    informationsdetailtextss: {
        color: '#066337',
    },
    favoritecontainer: {
        alignItems:"center"
    },
    favoritetext: {
        color: '#fff',
        fontWeight: "bold",
        fontSize: 25
    }
})