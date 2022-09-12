import React from 'react';
import { View, Text, FlatList } from 'react-native';

import styles from './Episodes.style';
import usefatch from '../../Hook/fetchData';
import Loading from '../../Component/Loading';
import Error from '../../Component/Error';
import EpisodesCard from '../../Component/EpisodesCard';

const url = 'https://breakingbadapi.com/api/episodes';

const EpisodesPage = () => {
    const { film, loading, error } = usefatch(url);

    if (loading) {
        return <Loading />;
    };

    if (error) {
        return <Error />
    };

    const RenderEpisıde = ({ item }) => {
        return (
            <EpisodesCard input={item} />
        );
    }

    return (
        <FlatList
            data={film}
            renderItem={RenderEpisıde}
            horizontal={true}
        />
    )
}
export default EpisodesPage;