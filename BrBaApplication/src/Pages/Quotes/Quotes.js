import React from 'react';
import { View, Text, FlatList } from 'react-native';

import styles from './Quotes.style';
import usefatch from '../../Hook/fetchData';
import Loading from '../../Component/Loading';
import Error from '../../Component/Error';
import QuotesCard from '../../Component/QuotesCard';

const url = 'https://breakingbadapi.com/api/quotes';

const QuotesPage = () => {
    const { film, loading, error } = usefatch(url);

    if (loading) {
        return <Loading />;
    };

    if (error) {
        return <Error />
    };

    const RenderQuotes = ({ item }) => {
        return (
            <QuotesCard input={item} />
        );
    }

    return (
        <View style={{ flex: 1, backgroundColor: '#2AB670' }}>
            <FlatList
                data={film}
                renderItem={RenderQuotes}
            />
        </View>
    )
}
export default QuotesPage;