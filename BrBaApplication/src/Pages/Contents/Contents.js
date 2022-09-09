import React from 'react';
import { View, Text } from 'react-native';

import styles from './Contents.style';
import ContentButton from '../../Component/ContentPageComponent/ContentButton';

const FilmsPage = (props) => {
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
            <ContentButton title='Characters' onPress={CharactersPress} />
            <ContentButton title='Episodes' onPress={EpisodesPress} />
            <ContentButton title='Quotes' onPress={QuotesPress} />
            <ContentButton title='Deaths' onPress={DeathsPress} />
        </View>
    )
}
export default FilmsPage;

