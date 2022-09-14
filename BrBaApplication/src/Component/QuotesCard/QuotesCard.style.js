import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        backgroundColor: '#000000c0',
        marginVertical: 15,
        marginHorizontal: 10,
        paddingHorizontal: 10,
        borderLeftWidth: 2,
        borderRightWidth: 2,
        borderRadius: 15,
        borderColor:'#fff'
    },
    heartcontainer: {
        zIndex: 1,
        position: "absolute",
        bottom: 5,
        left: 10
    },
    quotecontainer: {
        marginHorizontal: 10,
        marginVertical: 3,
        alignItems: "center"
    },
    quote: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
        fontFamily: 'QwitcherGrypen-Regular'
    },
    authorcontainer: {
        alignItems: "flex-end",
        marginHorizontal: 15,
        paddingHorizontal: 10,
    },
    author: {
        color: '#fff',
    },
    seriescontainer: {
        alignItems: "center"
    },
    series: {
        color: '#fff',
    },
})