import React from "react";
import { View, Text } from "react-native";
import LinearGradient from 'react-native-linear-gradient';

import styles from './FavoriteDeath.style';

const DeathsCard = ({ de }) => {
    return (
        <LinearGradient
            colors={['#000000c0', '#066337', '#000000c0']}
            style={styles.container}
        >
            <View style={styles.innercontainer}>
                <View style={styles.et}>
                    <Text style={styles.bas}>Death:  </Text>
                    <Text style={{ fontWeight: 'bold' }}>{de.input.death}</Text>
                </View>

                <View style={styles.et}>
                    <Text style={styles.bas}>Cause:  </Text>
                    <Text style={{ fontWeight: 'bold' }}>{de.input.cause}</Text>
                </View>

                <View style={styles.et}>
                    <Text style={styles.bas}>Responsible:  </Text>
                    <Text style={{ fontWeight: 'bold' }}>{de.input.responsible}</Text>
                </View>

                <View style={styles.et}>
                    <Text style={styles.bas}>Last Words:  </Text>
                    <Text style={{ fontWeight: 'bold' }}>{de.input.last_words}</Text>
                </View>

                <View style={styles.et}>
                    <Text style={styles.bas}>Season:  </Text>
                    <Text style={{ fontWeight: 'bold' }}>{de.input.season}</Text>
                </View>

                <View style={styles.et}>
                    <Text style={styles.bas}>Episode:  </Text>
                    <Text style={{ fontWeight: 'bold' }}>{de.input.episode}</Text>
                </View>

                <View style={styles.et}>
                    <Text style={styles.bas}>Number of Deaths:  </Text>
                    <Text style={{ fontWeight: 'bold' }}>{de.input.number_of_deaths}</Text>
                </View>
            </View>
        </LinearGradient>
    );
}
export default DeathsCard;