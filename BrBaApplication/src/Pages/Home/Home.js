import React from 'react';
import { Text, Dimensions, StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import LinearGradient from 'react-native-linear-gradient';

import datam from '../../Data/İmage.js';

const HomePage = (props) => {
    const İmagesPress = () => {
        props.navigation.navigate('İmages');
    }
    return (
        <View style={{ backgroundColor: '#18191A', flex: 1 }}>
            <View style={styles.container}>
                <SwiperFlatList
                    autoplay
                    autoplayDelay={3}
                    autoplayLoop
                    index={2}
                    showPagination
                    data={datam}
                    renderItem={({ item }) => (
                        <View style={styles.child}>
                            <Image
                                source={{ uri: item }}
                                style={{ width, height: 265, resizeMode: 'contain' }}
                            />
                        </View>
                    )}
                />
            </View>
            <LinearGradient
                colors={['#000000c0', '#066337', '#000000c0']}
                style={styles.imagecontainer}
            >
                <Image
                    source={{ uri: 'https://cdn.dribbble.com/users/4603829/screenshots/13945896/media/a1ff48ead74c784a41694c5dcfa449ac.png?compress=1&resize=1000x750&vertical=top' }}
                    style={{ width: 180, height: 100, marginBottom: 5 }}
                />
                <Image
                    source={{ uri: 'https://cdn.dribbble.com/users/634508/screenshots/4623070/media/8f72831ff023e3e69f01df78bb822be0.gif' }}
                    style={{ width: 150, height: 100, marginBottom: 5 }}
                />
                <Image
                    source={{ uri: 'https://cdn.dribbble.com/users/211139/screenshots/11896181/media/ea7da9a7e63c9a896b5c64eb7ba17bc4.jpg?compress=1&resize=1000x750&vertical=top' }}
                    style={{ width: 180, height: 100, marginBottom: 5 }}
                />
                <Image
                    source={{ uri: 'https://cdn.dribbble.com/users/146798/screenshots/4115957/media/245d62b0e2646153d410217a1e6a2a33.png?compress=1&resize=800x600&vertical=top' }}
                    style={{ width: 150, height: 100, marginBottom: 5 }}
                />
                <Image
                    source={{ uri: 'https://cdn.dribbble.com/users/1162077/screenshots/4182197/media/bd166bd2bff8d564fa1892a3f7dc774b.png?compress=1&resize=800x600&vertical=top' }}
                    style={{ width: 180, height: 100 }}
                />
                <Image
                    source={{ uri: 'https://cdn.dribbble.com/users/1025917/screenshots/4072580/media/71f46f4c8b20a4e9a64eb76b064b4d80.jpg?compress=1&resize=800x600&vertical=top' }}
                    style={{ width: 150, height: 100 }}
                />
            </LinearGradient>
            <TouchableOpacity style={styles.imagebuttoncontainer} onPress={İmagesPress}>
                <Text style={styles.imagebuttontext}>İmages</Text>
            </TouchableOpacity>
        </View>
    )
}

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
    container: { backgroundColor: 'white', height: 250 },
    child: { width, justifyContent: 'center', backgroundColor: '#18191A' },
    text: { fontSize: width * 0.1, textAlign: 'center' },
    imagecontainer: {
        borderWidth: 2,
        borderColor: '#fff',
        marginHorizontal: 10,
        marginVertical: 15,
        paddingHorizontal: 10,
        paddingVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap'
    },
    imagebuttoncontainer: {
        zIndex: 1,
        position: 'absolute',
        bottom: 50,
        left: 125,
        backgroundColor: '#000000c0',
        borderRadius: 60
    },
    imagebuttontext: {
        color: '#fff',
        fontSize: 30,
        marginHorizontal: 35,
        marginVertical: 10,

    }
})

export default HomePage;
