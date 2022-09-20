import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Heart, HeartPress } from '../Svc/İcons';
import LinearGradient from 'react-native-linear-gradient';
import { useDispatch, useSelector } from 'react-redux';

import styles from './DeathsCard.style';
import { addToDeath, selectDeathItems, removeFromDeath } from '../../context/deathSlice';

const DeathsCard = ({ input }) => {
    const [fav, setFav] = useState(true);
    const items = useSelector(selectDeathItems);
    const dispatch = useDispatch();

    const Favpres = () => {
        fav === true ? (
            setFav(false),
            dispatch(addToDeath({ input }))
        ) : (
            setFav(true),
            dispatch(removeFromDeath({ input }))
        )
    }
    
    return (
        <LinearGradient
            colors={['#000000c0', '#066337', '#000000c0']}
            style={styles.container}
        >
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
                    <Text style={{ fontWeight: 'bold' }}>{input.death}</Text>
                </View>

                <View style={styles.et}>
                    <Text style={styles.bas}>Cause:  </Text>
                    <Text style={{ fontWeight: 'bold' }}>{input.cause}</Text>
                </View>

                <View style={styles.et}>
                    <Text style={styles.bas}>Responsible:  </Text>
                    <Text style={{ fontWeight: 'bold' }}>{input.responsible}</Text>
                </View>

                <View style={styles.et}>
                    <Text style={styles.bas}>Last Words:  </Text>
                    <Text style={{ fontWeight: 'bold' }}>{input.last_words}</Text>
                </View>

                <View style={styles.et}>
                    <Text style={styles.bas}>Season:  </Text>
                    <Text style={{ fontWeight: 'bold' }}>{input.season}</Text>
                </View>

                <View style={styles.et}>
                    <Text style={styles.bas}>Episode:  </Text>
                    <Text style={{ fontWeight: 'bold' }}>{input.episode}</Text>
                </View>

                <View style={styles.et}>
                    <Text style={styles.bas}>Number of Deaths:  </Text>
                    <Text style={{ fontWeight: 'bold' }}>{input.number_of_deaths}</Text>
                </View>
            </View>
        </LinearGradient>
    );
}
export default DeathsCard;