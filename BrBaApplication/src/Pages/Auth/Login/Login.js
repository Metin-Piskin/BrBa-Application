import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import auth from "@react-native-firebase/auth";
import * as Yup from 'yup';
import Validator from 'email-validator';

import styles from './Login.style';
import AuthInput from '../../../Component/AuthInput';

const initialFormValues = {
    usermail: '',
    password: '',
};



const LoginPage = (props) => {

    const signpress = () => {
        return (
            props.navigation.navigate('Sign')
        );
    }

    const LoginFormSchema = Yup.object().shape({
        usermail: Yup.string().email().required('Email is required'),
        password: Yup.string().required().min(6, 'Password must be at least 6 characters'),
    });

    const handleFormSubmit = async (formValues) => {
        try {
            await auth().signInWithEmailAndPassword(formValues.usermail, formValues.password);
        } catch (error) {
            console.log(error.code)
        }
    }

    return (
        <View style={{ backgroundColor: '#18191A', flex: 1 }}>
            <View style={stylis.alltitlecontainer}>
                <Text style={stylis.alltitle}>Login</Text>
            </View>
            <Image
                source={require('../../../Assets/BrBa02.png')}
                style={{ width: 380, height: 200, marginVertical:30, borderRadius:110, marginLeft:7 }}
            />
            <Formik
                initialValues={initialFormValues}
                onSubmit={handleFormSubmit}
                validationSchema={LoginFormSchema}
                validateOnMount={true}
            >
                {({ values, handleChange, handleSubmit, handleBlur, isValid }) => (
                    <>
                        <AuthInput
                            placeholder="E-Mail"
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
                            placeholder="Password"
                            onChangeText={handleChange('password')}
                            value={values.password}
                            onBlur={handleBlur('password')}
                            textContentType={'password'}
                            isSecure
                            stu={{
                                borderColor:
                                    1 > values.password || values.password.length > 5
                                        ? '#1E221E'
                                        : '#FF0000',
                            }}
                        />

                        <TouchableOpacity onPress={handleSubmit} disabled={!isValid}>
                            <View style={stylis.container(isValid)}>
                                <Text style={stylis.title}>Giriş Yap</Text>
                            </View>
                        </TouchableOpacity>
                    </>
                )}
            </Formik>
            <View style={stylis.signcontainer}>
                <Text style={stylis.signtext}>Hesabınız yok mu?</Text>
                <TouchableOpacity style={stylis.signbutton} onPress={signpress}>
                    <Text style={stylis.signbuttontext}>Kayıt Ol</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default LoginPage;

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
        color: '#fff',
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