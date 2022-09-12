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
        <FlatList
            data={film}
            renderItem={RenderQuotes}
            horizontal={true}
        />
    )
}
export default QuotesPage;