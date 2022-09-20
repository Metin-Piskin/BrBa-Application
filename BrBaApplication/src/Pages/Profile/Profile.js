import React from 'react';
import { View, Text, TouchableOpacity, Image, FlatList, ScrollView } from 'react-native';
import auth from "@react-native-firebase/auth";
import { useSelector } from "react-redux";
import { selectBasketItems } from '../../context/basketSlice';
import { selectEpisodeItems } from '../../context/episodeSlice';
import { selectQuoteItems } from '../../context/quoteSlice';
import { selectDeathItems } from '../../context/deathSlice';

import styles from './Profile.style';

import FavoriteCharacter from '../../Component/FavoriteCardComponents/FavoriteCharacter';
import FavoriteEpisode from '../../Component/FavoriteCardComponents/FavoriteEpisode';
import FavoriteQuote from '../../Component/FavoriteCardComponents/FavoriteQuote';
import FavoriteDeath from '../../Component/FavoriteCardComponents/FavoriteDeath';

const ProfilePage = () => {
    const items = useSelector(selectBasketItems);
    const episodes = useSelector(selectEpisodeItems);
    const quotes = useSelector(selectQuoteItems);
    const deaths = useSelector(selectDeathItems);

    //const Exit = () => auth().signOut()

    const as = items.length;

    const RenderJobs = () => {
        return (
            <FavoriteCharacter veri={items[0]} />
        );
    }

    const Renderepisodes = () => {
        return (
            <FavoriteEpisode ep={episodes[0]} />
        );
    }

    const Renderquotes = () => {
        return (
            <FavoriteQuote qu={quotes[0]} />
        );
    }

    const Renderdeaths = () => {
        return (
            <FavoriteDeath de={deaths[0]} />
        );
    }

    return (
        <>
            <ScrollView style={styles.container}>
                <View style={styles.profileimagecontainer}>
                    <Image
                        source={{ uri: 'https://avatars.githubusercontent.com/u/85956297?v=4' }}
                        style={styles.profileimage}
                    />
                </View>

                <View style={styles.informationscontainer}>
                    <Text style={styles.informationstext}>İnformations</Text>
                </View>
                <View style={styles.informationsdetailcontainer}>
                    <View>
                        <View style={styles.informationsdetailinnercontainer}>
                            <Text style={styles.informationsdetailtext}>Name: </Text>
                            <Text style={styles.informationsdetailtextss}>Metin</Text>
                        </View>
                        <View style={styles.informationsdetailinnercontainer}>
                            <Text style={styles.informationsdetailtext}>Surname: </Text>
                            <Text style={styles.informationsdetailtextss}>Pişkin</Text>
                        </View>
                        <View style={styles.informationsdetailinnercontainer}>
                            <Text style={styles.informationsdetailtext}>Age: </Text>
                            <Text style={styles.informationsdetailtextss}>23</Text>
                        </View>
                    </View>
                    <View>
                        <View style={styles.informationsdetailinnercontainer}>
                            <Text style={styles.informationsdetailtext}>Nickname: </Text>
                            <Text style={styles.informationsdetailtextss}>Mtn</Text>
                        </View>
                        <View style={styles.informationsdetailinnercontainer}>
                            <Text style={styles.informationsdetailtext}>Location: </Text>
                            <Text style={styles.informationsdetailtextss}>Türkiye</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.favoritecontainer}>
                    <Text style={styles.favoritetext}>Favorite Character</Text>
                </View>

                <FlatList
                    data={items}
                    renderItem={RenderJobs}
                    horizontal={true}
                />

                <View style={styles.favoritecontainer}>
                    <Text style={styles.favoritetext}>Favorite Episode</Text>
                </View>

                <FlatList
                    data={episodes}
                    renderItem={Renderepisodes}
                    horizontal={true}
                />

                <View style={styles.favoritecontainer}>
                    <Text style={styles.favoritetext}>Favorite Quote</Text>
                </View>

                <FlatList
                    data={quotes}
                    renderItem={Renderquotes}
                    horizontal={true}
                />

                <View style={styles.favoritecontainer}>
                    <Text style={styles.favoritetext}>Favorite Death</Text>
                </View>

                <FlatList
                    data={deaths}
                    renderItem={Renderdeaths}
                    horizontal={true}
                />

            </ScrollView>
        </>
    )
}
export default ProfilePage;