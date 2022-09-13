import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

import styles from './Sign.style';
import AuthInput from '../../../Component/AuthInput';

const SignPage = (props) => {

    const signpress = () => {
        return (
            props.navigation.navigate('Login')
        );
    }

    return (
        <View style={{ backgroundColor: '#fff', flex: 1 }}>
            <Image source={require('../../../Assets/BrBa01.png')} style={{ resizeMode: 'contain', width: 400, height: 200 }} />
            <Text>Sign</Text>
            <AuthInput
                placeholder={'E-Mail'}
            />
            <AuthInput
                placeholder={'Password'}
            />
            <AuthInput
                placeholder={'Repassword'}
            />

            <TouchableOpacity>
                <Text>Kayıt Ol</Text>
            </TouchableOpacity>

            <View style={stylis.signcontainer}>
                <Text style={stylis.signtext}>Hesabım zaten var</Text>
                <TouchableOpacity style={stylis.signbutton} onPress={signpress}>
                    <Text>Giriş Yap</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default SignPage;
const stylis = StyleSheet.create({})