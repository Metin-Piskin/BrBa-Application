import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import auth from "@react-native-firebase/auth";


import styles from './Profile.style';

import { Breaking, Bad, Heisenberg } from '../../Component/Svc/İcons';

const ProfilePage = () => {

    //const Exit = () => auth().signOut()

    return (
        <View style={styles.container}>
            <View style={styles.profileimagecontainer}>
                <Image
                    source={{ uri: 'https://avatars.githubusercontent.com/u/85956297?v=4' }}
                    style={styles.profileimage}
                />
            </View>

            <View style={styles.informationscontainer}>
                <Text style={styles.informationstext}>İnformations</Text>
            </View>
            <View style={styles.informationsdetailcontainer}>
                <View>
                    <View style={styles.informationsdetailinnercontainer}>
                        <Text style={styles.informationsdetailtext}>Name: </Text>
                        <Text style={styles.informationsdetailtextss}>Metin</Text>
                    </View>
                    <View style={styles.informationsdetailinnercontainer}>
                        <Text style={styles.informationsdetailtext}>Surname: </Text>
                        <Text style={styles.informationsdetailtextss}>Pişkin</Text>
                    </View>
                    <View style={styles.informationsdetailinnercontainer}>
                        <Text style={styles.informationsdetailtext}>Age: </Text>
                        <Text style={styles.informationsdetailtextss}>23</Text>
                    </View>
                </View>
                <View>
                    <View style={styles.informationsdetailinnercontainer}>
                        <Text style={styles.informationsdetailtext}>Nickname: </Text>
                        <Text style={styles.informationsdetailtextss}>Mtn</Text>
                    </View>
                    <View style={styles.informationsdetailinnercontainer}>
                        <Text style={styles.informationsdetailtext}>Location: </Text>
                        <Text style={styles.informationsdetailtextss}>Türkiye</Text>
                    </View>
                </View>
            </View>

            <View style={styles.favoritecontainer}>
                <Text style={styles.favoritetext}>Favorite Characters</Text>
            </View>
            <View style={styles.favoritecontainer}>
                <Text style={styles.favoritetext}>Favorite Episodes</Text>
            </View>
            <View style={styles.favoritecontainer}>
                <Text style={styles.favoritetext}>Favorite Quotes</Text>
            </View>
            <View style={styles.favoritecontainer}>
                <Text style={styles.favoritetext}>Favorite Deaths</Text>
            </View>
        </View>
    )
}
export default ProfilePage;