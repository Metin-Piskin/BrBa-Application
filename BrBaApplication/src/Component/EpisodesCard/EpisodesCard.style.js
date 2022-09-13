import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        backgroundColor: '#000000c0',
        marginVertical: 10,
        marginHorizontal: 10,
        padding: 15,
        borderRadius: 20,
        flexDirection: "row",
        justifyContent: "space-around"
    },
    allinnercontainer: {
        flexDirection: "row",
        borderWidth: 2,
        borderColor: '#fff',
        borderRadius: 10,
        padding: 10
    },
    heartcontainer: {
        zIndex: 1,
        position: "absolute",
        top: 10,
        right: 10
    },
    solcontainer: {
        marginRight: 10,
        justifyContent: "space-evenly"
    },
    sağcontainer: {},
    innercontainer: {
        flexDirection: "row"
    },
    et: {
        color: '#fff',
        fontWeight: "bold",
    }
})