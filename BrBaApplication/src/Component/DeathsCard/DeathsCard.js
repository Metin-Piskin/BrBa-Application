import React from "react";
import { View, Text } from "react-native";

import styles from './DeathsCard.style';

const DeathsCard = ({ input }) => {
    return (
        <View style={styles.container}>
            <View style={styles.innercontainer}>
                <View style={styles.et}>
                    <Text style={styles.bas}>Death:  </Text>
                    <Text>{input.death}</Text>
                </View>

                <View style={styles.et}>
                    <Text style={styles.bas}>Cause:  </Text>
                    <Text>{input.cause}</Text>
                </View>

                <View style={styles.et}>
                    <Text style={styles.bas}>Responsible:  </Text>
                    <Text>{input.responsible}</Text>
                </View>

                <View style={styles.et}>
                    <Text style={styles.bas}>Last Words:  </Text>
                    <Text>{input.last_words}</Text>
                </View>

                <View style={styles.et}>
                    <Text style={styles.bas}>Season:  </Text>
                    <Text>{input.season}</Text>
                </View>

                <View style={styles.et}>
                    <Text style={styles.bas}>Episode:  </Text>
                    <Text>{input.episode}</Text>
                </View>

                <View style={styles.et}>
                    <Text style={styles.bas}>Number of Deaths:  </Text>
                    <Text>{input.number_of_deaths}</Text>
                </View>
            </View>
        </View>
    );
}
export default DeathsCard;