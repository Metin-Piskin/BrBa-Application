import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, FlatList, ScrollView } from 'react-native';
import { useSelector } from "react-redux";
import { selectBasketItems } from '../../context/basketSlice';
import { selectEpisodeItems } from '../../context/episodeSlice';
import { selectQuoteItems } from '../../context/quoteSlice';
import { selectDeathItems } from '../../context/deathSlice';
import firestore from '@react-native-firebase/firestore';
import auth from "@react-native-firebase/auth";

import styles from './Profile.style';

import FavoriteCharacter from '../../Component/FavoriteCardComponents/FavoriteCharacter';
import FavoriteEpisode from '../../Component/FavoriteCardComponents/FavoriteEpisode';
import FavoriteQuote from '../../Component/FavoriteCardComponents/FavoriteQuote';
import FavoriteDeath from '../../Component/FavoriteCardComponents/FavoriteDeath';
import Loading from '../../Component/Loading';

const ProfilePage = () => {
    const [CurrentLoggedInUser, setCurrentLoggedInUser] = useState(true)
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const user = auth().currentUser
        firestore()
            .collection('users')
            .where('owner_uid', '==', user.uid)
            .get()
            .then(querySnapshot => {
                //console.log('Total users: ', querySnapshot.size);
                querySnapshot.forEach(documentSnapshot => {
                    setCurrentLoggedInUser(documentSnapshot.data());
                });
            });
        if (!!CurrentLoggedInUser) {
            setLoading(false);
        }
    }, [])

    const items = useSelector(selectBasketItems);
    const episodes = useSelector(selectEpisodeItems);
    const quotes = useSelector(selectQuoteItems);
    const deaths = useSelector(selectDeathItems);

    const Exit = () => auth().signOut()

    if (loading) {
        return <Loading />;
    };

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
                        source={{ uri: CurrentLoggedInUser.profile_picture }}
                        style={styles.profileimage}
                    />
                </View>

                <View style={styles.informationscontainer}>
                    <Text style={styles.informationstext}>İnformations</Text>
                    <TouchableOpacity onPress={Exit}>
                        <Text style={{ color: '#fff' }}>Exit</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.informationsdetailcontainer}>
                    <View>
                        <View style={styles.informationsdetailinnercontainer}>
                            <Text style={styles.informationsdetailtext}>Name: {CurrentLoggedInUser.name}</Text>
                        </View>
                        <Text style={styles.informationsdetailtext}>Surname: {CurrentLoggedInUser.surname}</Text>
                        <View style={styles.informationsdetailinnercontainer}>
                            <Text style={styles.informationsdetailtext}>Age: {CurrentLoggedInUser.age}</Text>
                        </View>
                        <Text style={styles.informationsdetailtext}>Email: {CurrentLoggedInUser.email}</Text>
                    </View>
                    <View>
                        <View style={styles.informationsdetailinnercontainer}>
                            <Text style={styles.informationsdetailtext}>Nickname: {CurrentLoggedInUser.nickname}</Text>

                        </View>
                        <View style={styles.informationsdetailinnercontainer}>
                            <Text style={styles.informationsdetailtext}>Country: {CurrentLoggedInUser.country}</Text>
                        </View>
                        <Text style={styles.informationsdetailtext}>City: {CurrentLoggedInUser.city}</Text>
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