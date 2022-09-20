import React from "react";
import { View, Text } from "react-native";
import LinearGradient from 'react-native-linear-gradient';

import styles from './FavoriteQuote.style';

const QuotesCard = ({ qu }) => {
    return (
        <LinearGradient
            colors={['#000000c0', '#066337', '#000000c0']}
            style={styles.container}
        >
            <View style={styles.quotecontainer}>
                <Text style={styles.quote}>"{qu.input.quote}"</Text>
            </View>
            <View style={styles.authorcontainer}>
                <Text style={styles.author}>{qu.input.author}</Text>
            </View>
            <View style={styles.seriescontainer}>
                <Text style={styles.series}>{qu.input.series}</Text>
            </View>
        </LinearGradient>
    )
}
export default QuotesCard;