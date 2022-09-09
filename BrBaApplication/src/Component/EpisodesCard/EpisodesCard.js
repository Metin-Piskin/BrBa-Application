import React from "react";
import { View, Text } from "react-native";

import styles from './EpisodesCard.style';

const EpisodesCard = ({ input }) => {

    return (
        <View style={styles.container}>
            <View>
                <View style={styles.innercontainer}>
                    <Text style={styles.et}>Season:  </Text>
                    <Text>{input.season}</Text>
                </View>

                <View style={styles.innercontainer}>
                    <Text style={styles.et}>Title:  </Text>
                    <Text>{input.title}</Text>
                </View>

                <View style={styles.innercontainer}>
                    <Text style={styles.et} >Air Date:  </Text>
                    <Text>{input.air_date}</Text>
                </View>

                <View style={styles.innercontainer}>
                    <Text style={styles.et} >Episode:  </Text>
                    <Text>{input.episode}</Text>
                </View>

                <View style={styles.innercontainer}>
                    <Text style={styles.et}>Series:  </Text>
                    <Text>{input.series}</Text>
                </View>
            </View>

            <View>
                <Text style={styles.et}>Characters: </Text>
                <Text>* {input.characters[0]}</Text>
                <Text>* {input.characters[1]}</Text>
                <Text>* {input.characters[2]}</Text>
                <Text>* {input.characters[3]}</Text>
                <Text>* {input.characters[4]}</Text>
                <Text>* {input.characters[5]}</Text>
                <Text>* {input.characters[6]}</Text>
                <Text>* {input.characters[7]}</Text>
            </View>
        </View>
    );
}
export default EpisodesCard;