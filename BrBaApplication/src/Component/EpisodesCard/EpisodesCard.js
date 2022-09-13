import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Heart, HeartPress } from '../Svc/İcons';

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
        <View style={styles.container}>
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

                <View style={styles.sağcontainer}>
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
        </View>
    );
}
export default EpisodesCard;