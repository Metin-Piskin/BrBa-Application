import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Heart, HeartPress } from '../Svc/İcons';
import LinearGradient from 'react-native-linear-gradient';
import { useDispatch, useSelector } from 'react-redux';

import styles from './QuotesCard.style';
import { addToQuote, selectQuoteItems, removeFromQuote } from '../../context/quoteSlice';

const QuotesCard = ({ input }) => {
    const [fav, setFav] = useState(true);
    const items = useSelector(selectQuoteItems);
    const dispatch = useDispatch();

    const Favpres = () => {
        fav === true ? (
            setFav(false),
            dispatch(addToQuote({ input }))
        ) : (
            setFav(true),
            dispatch(removeFromQuote({ input }))
        )
    }
    return (
        <LinearGradient
            colors={['#000000c0', '#066337', '#000000c0']}
            style={styles.container}
        >
            <TouchableOpacity style={styles.heartcontainer} onPress={Favpres}>
                {
                    fav ? (
                        <Heart size={20} fill='#fff' />
                    ) : (
                        <HeartPress size={20} fill='red' />
                    )
                }
            </TouchableOpacity>
            <View style={styles.quotecontainer}>
                <Text style={styles.quote}>"{input.quote}"</Text>
            </View>
            <View style={styles.authorcontainer}>
                <Text style={styles.author}>{input.author}</Text>
            </View>
            <View style={styles.seriescontainer}>
                <Text style={styles.series}>{input.series}</Text>
            </View>
        </LinearGradient>
    )
}
export default QuotesCard;