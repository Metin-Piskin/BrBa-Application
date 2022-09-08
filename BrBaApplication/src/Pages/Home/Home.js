import React from 'react';
import { Text, Dimensions, StyleSheet, View, Image } from 'react-native';
import { SwiperFlatList } from 'react-native-swiper-flatlist';


import datam from '../../Data/İmage.js';

const HomePage = () => (
    <View style={{ backgroundColor: '#2AB670', flex: 1 }}>
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
    </View>
);

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
    container: { backgroundColor: 'white', height: 250 },
    child: { width, justifyContent: 'center', backgroundColor: '#2AB670' },
    text: { fontSize: width * 0.1, textAlign: 'center' },
});

export default HomePage;
