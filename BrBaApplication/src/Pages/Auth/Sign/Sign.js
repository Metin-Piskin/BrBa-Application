import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, TextInput } from 'react-native';
import { Formik } from 'formik';
import auth from "@react-native-firebase/auth";
import firestore from '@react-native-firebase/firestore';
import * as Yup from 'yup';
import Validator from 'email-validator';
import validUrl from 'valid-url';

import styles from './Sign.style';
import AuthInput from '../../../Component/AuthInput';

const PLACEHOLDER_IMAGE = 'https://media.istockphoto.com/vectors/no-image-vector-symbol-missing-available-icon-no-gallery-for-this-vector-id1128826884?k=20&m=1128826884&s=170667a&w=0&h=_cx7HW9R4Uc_OLLxg2PcRXno4KERpYLi5vCz-NEyhi0=';

const initialFormValues = {
    usermail: "",
    password: "",
    nickname: "",
    userage: "",
    repassword: "",
    name: "",
    surname: "",
    city: "",
    country: "",
};

const SignPage = (props) => {
    const [thumbnailurl, setThumbnailurl] = useState(PLACEHOLDER_IMAGE);

    const loginpress = () => {
        return (
            props.navigation.goBack()
        );
    }

    {/*
    const getRandomProfilePicture = async () => {
        const response = await fetch('https://randomuser.me/api')
        const data = await response.json()
        return data.results[0].picture.large
    }
    */}

    const LoginFormSchema = Yup.object().shape({
        usermail: Yup.string().email().required('Email is required'),
        password: Yup.string().required().min(6, 'Password must be at least 6 characters'),
        nickname: Yup.string().required().min(2, 'A username is required'),
        userage: Yup.string().required().min(1),
        name: Yup.string().required().min(2, 'A username is required'),
        surname: Yup.string().required().min(2, 'A username is required'),
        city: Yup.string().required().min(2, 'A username is required'),
        country: Yup.string().required().min(2, 'A username is required'),
        imageurl: Yup.string().url().required('A url is required'),
    });

    const handleFormSubmit = async (formValues) => {
        try {
            const authUser = await auth().createUserWithEmailAndPassword(formValues.usermail, formValues.password);
            firestore().collection('users')
                .doc(formValues.usermail)
                .set({
                    owner_uid: authUser.user.uid,
                    nickname: formValues.nickname,
                    age: formValues.userage,
                    email: formValues.usermail,
                    name: formValues.name,
                    surname: formValues.surname,
                    city: formValues.city,
                    country: formValues.country,
                    //profile_picture: await getRandomProfilePicture(),
                    profile_picture: formValues.imageurl,
                });
            navigation.navigate('Login');
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <ScrollView style={{ backgroundColor: '#18191A', flex: 1 }}>
            {/*
            <View style={stylis.alltitlecontainer}>
                <Text style={stylis.alltitle}>Sign</Text>
            </View>
            */}
            <Image
                source={require('../../../Assets/BrBa01.png')}
                style={{ resizeMode: 'contain', width: 380, height: 200, borderRadius: 100, marginLeft: 7, marginVertical: 25 }}
            />
            <Formik initialValues={initialFormValues} onSubmit={handleFormSubmit} validationSchema={LoginFormSchema}>
                {({ values, handleChange, handleSubmit, handleBlur, isValid, errors }) => (
                    <>
                        <View style={{
                            zIndex: 1,
                            position: 'absolute',
                            top: 130,
                            left: 130
                        }}>
                            <Image
                                source={{ uri: validUrl.isUri(thumbnailurl) ? thumbnailurl : PLACEHOLDER_IMAGE }}
                                style={{
                                    width: 120,
                                    height: 80,
                                    resizeMode: 'contain'
                                }}
                            />
                        </View>
                        <View>
                            <View>
                                <AuthInput
                                    placeholder="Profil Resmi URL"
                                    onChange={(e) => setThumbnailurl(e.nativeEvent.text)}
                                    onChangeText={handleChange('imageurl')}
                                    onBlur={handleBlur('imageurl')}
                                    value={values.imageurl}
                                    multiline={true}
                                />
                                {errors.imageurl && (
                                    <Text style={{ fontSize: 10, color: 'red' }}>
                                        {errors.imageurl}
                                    </Text>
                                )}
                            </View>
                        </View>
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
                            placeholder="Ad"
                            onChangeText={handleChange('name')}
                            value={values.name}
                            onBlur={handleBlur('name')}
                            stu={{
                                borderColor:
                                    values.name < 1 || Validator.validate(values.name)
                                        ? '#1E221E'
                                        : '#FF0000',
                            }}
                        />
                        <AuthInput
                            placeholder="Soyad"
                            onChangeText={handleChange('surname')}
                            value={values.surname}
                            onBlur={handleBlur('surname')}
                            stu={{
                                borderColor:
                                    values.surname < 1 || Validator.validate(values.surname)
                                        ? '#1E221E'
                                        : '#FF0000',
                            }}
                        />
                        <AuthInput
                            placeholder="Kullanıcı Adı"
                            onChangeText={handleChange('nickname')}
                            value={values.nickname}
                            onBlur={handleBlur('nickname')}
                            stu={{
                                borderColor:
                                    values.nickname < 1 || Validator.validate(values.nickname)
                                        ? '#1E221E'
                                        : '#FF0000',
                            }}
                        />
                        <AuthInput
                            placeholder="Yaş"
                            onChangeText={handleChange('userage')}
                            value={values.userage}
                            onBlur={handleBlur('userage')}

                        />
                        <AuthInput
                            placeholder="Ülke"
                            onChangeText={handleChange('country')}
                            value={values.country}
                            onBlur={handleBlur('country')}
                            stu={{
                                borderColor:
                                    values.country < 1 || Validator.validate(values.country)
                                        ? '#1E221E'
                                        : '#FF0000',
                            }}
                        />
                        <AuthInput
                            placeholder="Şehir"
                            onChangeText={handleChange('city')}
                            value={values.city}
                            onBlur={handleBlur('city')}
                            stu={{
                                borderColor:
                                    values.city < 1 || Validator.validate(values.city)
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
        </ScrollView>
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