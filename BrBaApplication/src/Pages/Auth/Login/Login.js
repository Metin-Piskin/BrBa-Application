import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

import styles from './Login.style';
import AuthInput from '../../../Component/AuthInput';

const LoginPage = (props) => {

    const signpress = () => {
        return (
            props.navigation.navigate('Sign')
        );
    }

    return (
        <View style={{ backgroundColor: '#fff', flex: 1 }}>
            <Image source={require('../../../Assets/BrBa02.png')} style={{ width: 400, height: 200 }} />
            <Text>Login</Text>
            <AuthInput
                placeholder={'E-Mail'}
            />
            <AuthInput
                placeholder={'Password'}
            />

            <TouchableOpacity>
                <Text>Giriş Yap</Text>
            </TouchableOpacity>

            <View style={stylis.signcontainer}>
                <Text style={stylis.signtext}>Hesabınız yok mu?</Text>
                <TouchableOpacity style={stylis.signbutton} onPress={signpress}>
                    <Text>Kayıt Ol</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default LoginPage;

const stylis = StyleSheet.create({})