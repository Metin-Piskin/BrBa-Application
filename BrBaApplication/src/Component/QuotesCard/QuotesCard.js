import React from "react";
import { View, Text } from "react-native";

import styles from './QuotesCard.style';

const QuotesCard = ({ input }) => {
    return (
        <View style={styles.container}>
            <View style={styles.quotecontainer}>
                <Text style={styles.quote}>"{input.quote}"</Text>
            </View>
            <View style={styles.authorcontainer}>
                <Text style={styles.author}>{input.author}</Text>
            </View>
            <View style={styles.seriescontainer}>
                <Text style={styles.series}>{input.series}</Text>
            </View>
        </View>
    )
}
export default QuotesCard;