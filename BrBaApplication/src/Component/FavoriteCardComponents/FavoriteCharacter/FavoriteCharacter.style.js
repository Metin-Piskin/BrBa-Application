import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        marginVertical: 10,
        marginHorizontal: 20,
    },
    inner_container: {
        flexDirection: 'row',
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: '#000000c0'
    },
    image: {
        width: 150,
        height: 300,
        resizeMode: "cover",
        marginVertical: 50,
        marginHorizontal: 15,
        borderRadius: 20
    },
    text_container: {
        marginVertical: 10,
        flex: 1
    },
    text: {
        color: '#fff',
        marginVertical: 3,
    }
})