import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import İcon from 'react-native-vector-icons/Ionicons'

import styles from './İmages.style';

import { Breaking, Bad } from '../../Component/Svc/İcons';

const İmages = (props) => {
    const goback = () => {
        props.navigation.goBack();
    }
    return (
        <ScrollView style={styles.scrollcontainer}>
            <LinearGradient
                colors={['#000000c0', '#066337']}
                style={styles.container}
            >
                <View style={{flexDirection:"row", alignItems:"center"}}>
                    <TouchableOpacity onPress={goback} style={styles.back} >
                        <İcon name="md-return-up-back-outline" color='#fff' size={40} />
                    </TouchableOpacity>
                    <View style={styles.svccontainer}>
                        <Breaking />
                        <Bad />
                    </View>
                </View>
                <Image
                    source={{ uri: 'https://cdn.dribbble.com/users/1163123/screenshots/3791069/media/71c4595929a3eceb8352903d47587916.png?compress=1&resize=800x600&vertical=top' }}
                    style={{ width: 180, height: 100, marginBottom: 5, marginRight: 5 }}
                />
                <Image
                    source={{ uri: 'https://cdn.dribbble.com/users/2796893/screenshots/10884325/media/2a028aa20e85ee895cbfbfc9c735fc60.png?compress=1&resize=1000x750&vertical=top' }}
                    style={{ width: 150, height: 100, marginBottom: 5 }}
                />
                <Image
                    source={{ uri: 'https://cdn.dribbble.com/users/4603829/screenshots/13945896/media/a1ff48ead74c784a41694c5dcfa449ac.png?compress=1&resize=1000x750&vertical=top' }}
                    style={{ width: 180, height: 100, marginBottom: 5, marginRight: 5 }}
                />
                <Image
                    source={{ uri: 'https://cdn.dribbble.com/users/634508/screenshots/4623070/media/8f72831ff023e3e69f01df78bb822be0.gif' }}
                    style={{ width: 150, height: 100, marginBottom: 5 }}
                />
                <Image
                    source={{ uri: 'https://cdn.dribbble.com/users/211139/screenshots/11896181/media/ea7da9a7e63c9a896b5c64eb7ba17bc4.jpg?compress=1&resize=1000x750&vertical=top' }}
                    style={{ width: 180, height: 100, marginBottom: 5, marginRight: 5 }}
                />
                <Image
                    source={{ uri: 'https://cdn.dribbble.com/users/146798/screenshots/4115957/media/245d62b0e2646153d410217a1e6a2a33.png?compress=1&resize=800x600&vertical=top' }}
                    style={{ width: 150, height: 100, marginBottom: 5 }}
                />
                <Image
                    source={{ uri: 'https://cdn.dribbble.com/users/1162077/screenshots/4182197/media/bd166bd2bff8d564fa1892a3f7dc774b.png?compress=1&resize=800x600&vertical=top' }}
                    style={{ width: 180, height: 100, marginRight: 5 }}
                />
                <Image
                    source={{ uri: 'https://cdn.dribbble.com/users/1025917/screenshots/4072580/media/71f46f4c8b20a4e9a64eb76b064b4d80.jpg?compress=1&resize=800x600&vertical=top' }}
                    style={{ width: 150, height: 100, marginBottom: 5 }}
                />
                <Image
                    source={{ uri: 'https://cdn.dribbble.com/users/15687/screenshots/15360795/media/608eb10260d7143d7c92b1db4e872a96.png?compress=1&resize=1000x750&vertical=top' }}
                    style={{ width: 180, height: 100, marginBottom: 5, marginRight: 5 }}
                />
                <Image
                    source={{ uri: 'https://cdn.dribbble.com/users/742330/screenshots/7747344/media/cf397843a2728a4cd314d8a2f5472e53.gif' }}
                    style={{ width: 150, height: 100, marginBottom: 5 }}
                />
                <Image
                    source={{ uri: 'https://cdn.dribbble.com/users/22136/screenshots/4479038/media/beb50d990049cde17e0498b2392c6e16.jpg?compress=1&resize=800x600&vertical=top' }}
                    style={{ width: 180, height: 100, marginBottom: 5, marginRight: 5 }}
                />
                <Image
                    source={{ uri: 'https://cdn.dribbble.com/users/2765470/screenshots/6383598/walter_white.gif' }}
                    style={{ width: 150, height: 100, marginBottom: 5 }}
                />
                <Image
                    source={{ uri: 'https://cdn.dribbble.com/users/45269/screenshots/4155917/media/8f113f8948fae051ed2ad982c8908df4.jpg?compress=1&resize=800x600&vertical=top' }}
                    style={{ width: 180, height: 100, marginRight: 5 }}
                />
                <Image
                    source={{ uri: 'https://cdn.dribbble.com/users/365125/screenshots/3545260/media/65d8f9bd737e1309930df7c9a6a5e7c1.png?compress=1&resize=800x600&vertical=top' }}
                    style={{ width: 150, height: 100, marginBottom: 5 }}
                />
                <Image
                    source={{ uri: 'https://cdn.dribbble.com/users/4240266/screenshots/8223781/media/784765bbc4730bcb7b1a1b03ab89d658.jpg?compress=1&resize=800x600&vertical=top' }}
                    style={{ width: 180, height: 100, marginBottom: 5, marginRight: 5 }}
                />
                <Image
                    source={{ uri: 'https://cdn.dribbble.com/users/3742835/screenshots/10841580/media/50bbfa853d0336ea416613d9d646f667.gif' }}
                    style={{ width: 150, height: 100, marginBottom: 5 }}
                />
                <Image
                    source={{ uri: 'https://cdn.dribbble.com/users/30784/screenshots/7528567/media/d8f3d0cc06d2b99384b6d246d2fe98b4.png?compress=1&resize=1000x750&vertical=top' }}
                    style={{ width: 180, height: 100, marginRight: 5 }}
                />
                <Image
                    source={{ uri: 'https://cdn.dribbble.com/users/810165/screenshots/3998601/media/dcb4cb34872932c365c9f5dd9d239833.png?compress=1&resize=400x300&vertical=top' }}
                    style={{ width: 150, height: 100, marginBottom: 5 }}
                />
            </LinearGradient>
        </ScrollView>
    )
}
export default İmages;