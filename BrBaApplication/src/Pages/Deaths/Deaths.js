import React from 'react';
import { View, Text, FlatList } from 'react-native';

import styles from './Deaths.style';
import usefatch from '../../Hook/fetchData';
import Loading from '../../Component/Loading';
import Error from '../../Component/Error';
import DeathsCard from '../../Component/DeathsCard';

const url = 'https://breakingbadapi.com/api/deaths';

const DeathsPage = () => {
    const { film, loading, error } = usefatch(url);

    if (loading) {
        return <Loading />;
    };

    if (error) {
        return <Error />
    };

    const RenderDeaths = ({ item }) => {
        return (
            <DeathsCard input={item} />
        );
    }

    return (
        <FlatList
            data={film}
            renderItem={RenderDeaths}
            horizontal={true}
        />
    )
}
export default DeathsPage;