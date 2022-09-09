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
        <View style={{ flex: 1, backgroundColor: '#2AB670' }}>
            <FlatList
                data={film}
                renderItem={RenderEpisıde}
            />
        </View>
    )
}
export default EpisodesPage;