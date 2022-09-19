import React, { useState } from "react";
import { View, Text, Image, ImageBackground, TouchableOpacity } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import { useDispatch, useSelector } from 'react-redux';

import styles from './CharactersCard.style';
import { Heart, HeartPress } from '../Svc/İcons';
import { addToBasket, selectBasketItems, removeFromBasket } from '../../context/basketSlice';

const CharactersCard = ({ input }) => {
    const [fav, setFav] = useState(true);
    const items = useSelector(selectBasketItems);
    const dispatch = useDispatch();

    const handleFavorite = () => {
        fav === true ? (
            setFav(false),
            dispatch(addToBasket({ input }))
        ) : (
            setFav(true),
            dispatch(removeFromBasket({ input }))
        )
    }

    console.log(items);

    return (
        <ImageBackground style={styles.container} source={{ uri: input.img }}>
            <TouchableOpacity style={styles.heartcontainer} onPress={handleFavorite}>
                {
                    fav ? (
                        <Heart size={25} fill='#fff' />
                    ) : (
                        <HeartPress size={25} fill='red' />
                    )
                }
            </TouchableOpacity>
            <LinearGradient
                colors={['#000000c0', '#000000c0']}
                style={styles.inner_container}
            >
                <View>
                    <Image source={{ uri: input.img }} style={styles.image} />
                </View>
                <View style={styles.text_container}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ color: '#fff', fontWeight: 'bold' }}>Name:  </Text>
                        <Text style={styles.text}>{input.name}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ color: '#fff', fontWeight: 'bold' }}>Birthday:  </Text>
                        <Text style={styles.text}>{input.birthday}</Text>
                    </View>
                    <View style={{}}>
                        <Text style={{ color: '#fff', fontWeight: 'bold' }}>Occupation:  </Text>
                        <Text style={styles.text}>* {input.occupation[0]}</Text>
                        <Text style={styles.text}>* {input.occupation[1]}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ color: '#fff', fontWeight: 'bold' }}>Status:  </Text>
                        <Text style={styles.text}>{input.status}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ color: '#fff', fontWeight: 'bold' }}>Nickname:  </Text>
                        <Text style={styles.text}>{input.nickname}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ color: '#fff', fontWeight: 'bold' }}>Portrayed:  </Text>
                        <Text style={styles.text}>{input.portrayed}</Text>
                    </View>

                    <Text style={styles.text}>{input.category}</Text>
                </View>
            </LinearGradient>
        </ImageBackground>
    )
}
export default CharactersCard;