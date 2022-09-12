import React from 'react';
import { View, Text, ScrollView } from 'react-native';

import styles from './Contents.style';
import ContentButton from '../../Component/ContentPageComponent/ContentButton';
import Characters from '../Characters';
import Episodes from '../Episodes';
import Quotes from '../Quotes';
import Deaths from '../Deaths';

const FilmsPage = () => {
    return (
        <ScrollView style={{ flex: 1, backgroundColor: '#2AB670' }}>
            <Text>Characters</Text>
            <Characters />
            <Text>Episodes</Text>
            <Episodes />
            <Text>Quotes</Text>
            <Quotes />
            <Text>Deaths</Text>
            <Deaths />
        </ScrollView>
    )
}
export default FilmsPage;

