import React from "react";
import { View, Text, Image, ImageBackground } from "react-native";
import LinearGradient from 'react-native-linear-gradient';

import styles from './FavoriteCharacter.style';

const FavoriteCharacter = ({ veri }) => {
    return (
        <ImageBackground style={styles.container} source={{ uri: veri.input.img }}>
            <LinearGradient
                colors={['#000000c0', '#000000c0']}
                style={styles.inner_container}
            >
                <View>
                    <Image source={{ uri: veri.input.img }} style={styles.image} />
                </View>
                <View style={styles.text_container}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ color: '#fff', fontWeight: 'bold' }}>Name:  </Text>
                        <Text style={styles.text}>{veri.input.name}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ color: '#fff', fontWeight: 'bold' }}>Birthday:  </Text>
                        <Text style={styles.text}>{veri.input.birthday}</Text>
                    </View>
                    <View style={{}}>
                        <Text style={{ color: '#fff', fontWeight: 'bold' }}>Occupation:  </Text>
                        <Text style={styles.text}>* {veri.input.occupation[0]}</Text>
                        <Text style={styles.text}>* {veri.input.occupation[1]}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ color: '#fff', fontWeight: 'bold' }}>Status:  </Text>
                        <Text style={styles.text}>{veri.input.status}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ color: '#fff', fontWeight: 'bold' }}>Nickname:  </Text>
                        <Text style={styles.text}>{veri.input.nickname}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ color: '#fff', fontWeight: 'bold' }}>Portrayed:  </Text>
                        <Text style={styles.text}>{veri.input.portrayed}</Text>
                    </View>

                    <Text style={styles.text}>{veri.input.category}</Text>
                </View>
            </LinearGradient>
        </ImageBackground>
    );
}
export default FavoriteCharacter;