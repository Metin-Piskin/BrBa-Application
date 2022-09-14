import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import auth from "@react-native-firebase/auth";
import * as Yup from 'yup';
import Validator from 'email-validator';

import styles from './Sign.style';
import AuthInput from '../../../Component/AuthInput';

const initialFormValues = {
    usermail: "",
    password: "",
    repassword: "",
};

const SignPage = (props) => {

    const loginpress = () => {
        return (
            props.navigation.goBack()
        );
    }

    const LoginFormSchema = Yup.object().shape({
        usermail: Yup.string().email().required('Email is required'),
        password: Yup.string().required().min(6, 'Password must be at least 6 characters'),
    });

    const handleFormSubmit = async (formValues) => {
        try {
            await auth().createUserWithEmailAndPassword(formValues.usermail, formValues.password);
            navigation.navigate('Login');
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <View style={{ backgroundColor: '#18191A', flex: 1 }}>
            <View style={stylis.alltitlecontainer}>
                <Text style={stylis.alltitle}>Sign</Text>
            </View>
            <Image
                source={require('../../../Assets/BrBa01.png')}
                style={{ resizeMode: 'contain', width: 380, height: 200, borderRadius: 100, marginLeft: 7, marginVertical: 25 }}
            />
            <Formik initialValues={initialFormValues} onSubmit={handleFormSubmit} validationSchema={LoginFormSchema}>
                {({ values, handleChange, handleSubmit, handleBlur, isValid }) => (
                    <>
                        <AuthInput
                            placeholder="E-postanızı giriniz..."
                            onChangeText={handleChange('usermail')}
                            value={values.usermail}
                            onBlur={handleBlur('usermail')}
                            keyboardType="email-address"
                            textContentType="emailAddress"
                            stu={{
                                borderColor:
                                    values.usermail < 1 || Validator.validate(values.usermail)
                                        ? '#1E221E'
                                        : '#FF0000',
                            }}
                        />
                        <AuthInput
                            placeholder="Şifrenizi giriniz..."
                            onChangeText={handleChange('password')}
                            value={values.password}
                            onBlur={handleBlur('password')}
                            isSecure
                            stu={{
                                borderColor:
                                    1 > values.password || values.password.length > 5
                                        ? '#1E221E'
                                        : '#FF0000',
                            }}
                        />
                        <AuthInput
                            placeholder="Şifrenizi tekrar giriniz..."
                            onChangeText={handleChange('repassword')}
                            value={values.repassword}
                            onBlur={handleBlur('repassword')}
                            isSecure
                            stu={{
                                borderColor:
                                    1 > values.repassword || values.repassword.length > 5
                                        ? '#1E221E'
                                        : '#FF0000',
                            }}
                        />

                        <TouchableOpacity onPress={handleSubmit} disabled={!isValid}>
                            <View style={stylis.container(isValid)}>
                                <Text style={stylis.title}>Kayıt Ol</Text>
                            </View>
                        </TouchableOpacity>
                    </>
                )}
            </Formik>
            <View style={stylis.signcontainer}>
                <Text style={stylis.signtext}>Hesabım zaten var</Text>
                <TouchableOpacity style={stylis.signbutton} onPress={loginpress}>
                    <Text style={stylis.signbuttontext}>Giriş Yap</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default SignPage;
const stylis = StyleSheet.create({
    container: isValid => ({
        backgroundColor: isValid ? "#066337" : "#494F4E",
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 10,
        marginVertical: 10,
        paddingVertical: 10,
        borderRadius: 10,
    }),
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#0D181A'
    },
    signcontainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    signtext: {
        color: '#fff'
    },
    signbutton: {
        marginHorizontal: 10,
        marginRight: 20
    },
    signbuttontext: {
        fontWeight: 'bold',
        color: '#066337'
    },
    alltitle: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 45
    },
    alltitlecontainer: {
        alignItems: 'center',
        marginVertical: 25
    }
})