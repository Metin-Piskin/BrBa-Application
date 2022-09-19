import React, { useState } from 'react';
import { View, Text, FlatList } from 'react-native';

import styles from './Characters.style';
import usefatch from '../../Hook/fetchData';
import Loading from '../../Component/Loading';
import Error from '../../Component/Error';
import CharactersCard from '../../Component/CharactersCard';

const url = 'https://breakingbadapi.com/api/characters';

const CharactersPage = () => {
    const { film, loading, error } = usefatch(url);

    if (loading) {
        return <Loading />;
    };

    if (error) {
        return <Error />
    };

    const RenderCharacter = ({ item }) => {
        return (
            <CharactersCard input={item} />
        );
    }

    return (
        <FlatList
            data={film}
            renderItem={RenderCharacter}
            horizontal={true}
        />
    )
}
export default CharactersPage;