import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        backgroundColor: '#000000c0',
        marginHorizontal: 10,
        marginVertical: 10,
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10
    },
    innercontainer:{
        borderWidth:2,
        borderColor:'#fff',
        borderRadius: 10,
        padding:10
    },
    headercontainer:{
        zIndex:1,
        position:"absolute",
        right:10,
        bottom:10
    },
    et: {
        flexDirection: 'row'
    },
    bas:{
        color:'#fff',
        fontWeight:'bold'
    }
})