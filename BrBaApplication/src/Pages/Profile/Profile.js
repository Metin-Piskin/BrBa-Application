import React from 'react';
import { View, Text } from 'react-native';

import styles from './Profile.style';

import { Breaking, Bad } from '../../Component/Svc/İcons';

const ProfilePage = () => {
    return (
        <View style={{ flex: 1, backgroundColor: '#2AB670' }}>
            <Text>Profile</Text>
            <Breaking />
            <Bad />
        </View>
    )
}
export default ProfilePage;