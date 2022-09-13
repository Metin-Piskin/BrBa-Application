import React from 'react';
import { View, Text, ScrollView } from 'react-native';

import styles from './Contents.style';

import Characters from '../Characters';
import Episodes from '../Episodes';
import Quotes from '../Quotes';
import Deaths from '../Deaths';

const FilmsPage = () => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.titlecontainer}>
                <Text style={styles.title}>Characters</Text>
            </View>
            <Characters />
            <View style={styles.titlecontainer}>
                <Text style={styles.title}>Episodes</Text>
            </View>
            <Episodes />
            <View style={styles.titlecontainer}>
                <Text style={styles.title}>Quotes</Text>
            </View>
            <Quotes />
            <View style={styles.titlecontainer}>
                <Text style={styles.title}>Deaths</Text>
            </View>
            <Deaths />
        </ScrollView>
    )
}
export default FilmsPage;