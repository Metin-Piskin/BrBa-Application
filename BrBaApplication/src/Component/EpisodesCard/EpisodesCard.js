import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Heart, HeartPress } from '../Svc/İcons';
import LinearGradient from 'react-native-linear-gradient';

import styles from './EpisodesCard.style';

const EpisodesCard = ({ input }) => {
    const [fav, setFav] = useState(true);
    const Favpres = () => {
        fav === true ? (
            setFav(false)
        ) : (
            setFav(true)
        )
    }
    return (
        <LinearGradient
            colors={['#000000c0', '#066337', '#000000c0']}
            style={styles.container}
        >
            <View style={styles.allinnercontainer}>
                <TouchableOpacity style={styles.heartcontainer} onPress={Favpres}>
                    {
                        fav ? (
                            <Heart size={20} fill='#fff' />
                        ) : (
                            <HeartPress size={20} fill='red' />
                        )
                    }
                </TouchableOpacity>
                <View style={styles.solcontainer}>
                    <View style={styles.innercontainer}>
                        <Text style={styles.et}>Season:  </Text>
                        <Text style={{ fontWeight: 'bold' }}>{input.season}</Text>
                    </View>

                    <View style={styles.innercontainer}>
                        <Text style={styles.et}>Title:  </Text>
                        <Text style={{ fontWeight: 'bold' }}>{input.title}</Text>
                    </View>

                    <View style={styles.innercontainer}>
                        <Text style={styles.et} >Air Date:  </Text>
                        <Text style={{ fontWeight: 'bold' }}>{input.air_date}</Text>
                    </View>

                    <View style={styles.innercontainer}>
                        <Text style={styles.et} >Episode:  </Text>
                        <Text style={{ fontWeight: 'bold' }}>{input.episode}</Text>
                    </View>

                    <View style={styles.innercontainer}>
                        <Text style={styles.et}>Series:  </Text>
                        <Text style={{ fontWeight: 'bold' }}>{input.series}</Text>
                    </View>
                </View>

                <View style={styles.sağcontainer}>
                    <Text style={styles.et}>Characters: </Text>
                    <Text style={{ fontWeight: 'bold' }}>* {input.characters[0]}</Text>
                    <Text style={{ fontWeight: 'bold' }}>* {input.characters[1]}</Text>
                    <Text style={{ fontWeight: 'bold' }}>* {input.characters[2]}</Text>
                    <Text style={{ fontWeight: 'bold' }}>* {input.characters[3]}</Text>
                    <Text style={{ fontWeight: 'bold' }}>* {input.characters[4]}</Text>
                    <Text style={{ fontWeight: 'bold' }}>* {input.characters[5]}</Text>
                    <Text style={{ fontWeight: 'bold' }}>* {input.characters[6]}</Text>
                    <Text style={{ fontWeight: 'bold' }}>* {input.characters[7]}</Text>
                </View>

            </View>
        </LinearGradient>
    );
}
export default EpisodesCard;