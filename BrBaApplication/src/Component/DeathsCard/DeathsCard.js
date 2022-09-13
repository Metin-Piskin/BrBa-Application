import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Heart, HeartPress } from '../Svc/İcons';

import styles from './DeathsCard.style';

const DeathsCard = ({ input }) => {
    const [fav, setFav] = useState(true);
    const Favpres = () => {
        fav === true ? (
            setFav(false)
        ) : (
            setFav(true)
        )
    }
    return (
        <View style={styles.container}>
            <View style={styles.innercontainer}>
                <TouchableOpacity style={styles.headercontainer} onPress={Favpres}>
                    {
                        fav ? (
                            <Heart size={25} fill='#fff' />
                        ) : (
                            <HeartPress size={25} fill='red' />
                        )
                    }
                </TouchableOpacity>

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