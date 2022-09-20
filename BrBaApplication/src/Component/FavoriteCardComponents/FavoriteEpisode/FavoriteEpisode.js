import React from "react";
import { View, Text } from "react-native";
import LinearGradient from 'react-native-linear-gradient';

import styles from './FavoriteEpisode.style';


const EpisodesCard = ({ ep }) => {
    return (
        <LinearGradient
            colors={['#000000c0', '#066337', '#000000c0']}
            style={styles.container}
        >
            <View style={styles.allinnercontainer}>
                <View style={styles.solcontainer}>
                    <View style={styles.innercontainer}>
                        <Text style={styles.et}>Season:  </Text>
                        <Text style={{ fontWeight: 'bold' }}>{ep.input.season}</Text>
                    </View>

                    <View style={styles.innercontainer}>
                        <Text style={styles.et}>Title:  </Text>
                        <Text style={{ fontWeight: 'bold' }}>{ep.input.title}</Text>
                    </View>

                    <View style={styles.innercontainer}>
                        <Text style={styles.et} >Air Date:  </Text>
                        <Text style={{ fontWeight: 'bold' }}>{ep.input.air_date}</Text>
                    </View>

                    <View style={styles.innercontainer}>
                        <Text style={styles.et} >Episode:  </Text>
                        <Text style={{ fontWeight: 'bold' }}>{ep.input.episode}</Text>
                    </View>

                    <View style={styles.innercontainer}>
                        <Text style={styles.et}>Series:  </Text>
                        <Text style={{ fontWeight: 'bold' }}>{ep.input.series}</Text>
                    </View>
                </View>

                <View style={styles.sağcontainer}>
                    <Text style={styles.et}>Characters: </Text>
                    <Text style={{ fontWeight: 'bold' }}>* {ep.input.characters[0]}</Text>
                    <Text style={{ fontWeight: 'bold' }}>* {ep.input.characters[1]}</Text>
                    <Text style={{ fontWeight: 'bold' }}>* {ep.input.characters[2]}</Text>
                    <Text style={{ fontWeight: 'bold' }}>* {ep.input.characters[3]}</Text>
                    <Text style={{ fontWeight: 'bold' }}>* {ep.input.characters[4]}</Text>
                    <Text style={{ fontWeight: 'bold' }}>* {ep.input.characters[5]}</Text>
                    <Text style={{ fontWeight: 'bold' }}>* {ep.input.characters[6]}</Text>
                    <Text style={{ fontWeight: 'bold' }}>* {ep.input.characters[7]}</Text>
                </View>

            </View>
        </LinearGradient>
    );
}
export default EpisodesCard;