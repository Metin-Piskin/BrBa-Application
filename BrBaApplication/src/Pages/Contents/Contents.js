import React from 'react';
import { View, Text } from 'react-native';

import styles from './Contents.style';
import usefatch from '../../Hook/fetchData';
import Loading from '../../Component/Loading';
import Error from '../../Component/Error';
import ContentButton from '../../Component/ContentPageComponent/ContentButton';

const url = 'https://breakingbadapi.com/api/characters';

const FilmsPage = (props) => {
    const { film, loading, error } = usefatch(url);

    if (loading) {
        return <Loading />;
    };

    if (error) {
        return <Error />
    };

    const CharactersPress = () => {
        return (
            props.navigation.navigate('Characters')
        )
    }
    const EpisodesPress = () => {
        return (
            props.navigation.navigate('Episodes')
        )
    }
    const QuotesPress = () => {
        return (
            props.navigation.navigate('Quotes')
        )
    }
    const DeathsPress = () => {
        return (
            props.navigation.navigate('Deaths')
        )
    }

    return (
        <View style={{ flex: 1, backgroundColor: '#2AB670' }}>
            <Text>Text</Text>
            <ContentButton title='Characters' onPress={CharactersPress} />
            <ContentButton title='Episodes' onPress={EpisodesPress} />
            <ContentButton title='Quotes' onPress={QuotesPress} />
            <ContentButton title='Deaths' onPress={DeathsPress} />
        </View>
    )
}
export default FilmsPage;

