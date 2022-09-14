import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import auth from "@react-native-firebase/auth";


import styles from './Profile.style';

import { Breaking, Bad } from '../../Component/Svc/İcons';

const ProfilePage = () => {

    const Exit = () => auth().signOut()

    return (
        <View style={{ flex: 1, backgroundColor: '#18191A' }}>
            <Text>Profile</Text>
            <TouchableOpacity onPress={Exit}>
                <Breaking />
                <Bad />
            </TouchableOpacity>
        </View>
    )
}
export default ProfilePage;