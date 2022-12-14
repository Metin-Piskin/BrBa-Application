import React from "react";
import { View, TextInput, Text } from "react-native";

import styles from './AuthInput.style';

const AuthInput = ({ stu, placeholder, onChangeText, value, isSecure, onBlur, keyboardType, textContentType, onChange, multiline }) => {
    return (
        <View style={[styles.container, stu]}>
            <TextInput
                style={styles.input}
                placeholderTextColor='#000'
                placeholder={placeholder}
                onChangeText={onChangeText}
                onChange={onChange}
                autoCapitalize="none"
                value={value}
                secureTextEntry={isSecure}
                onBlur={onBlur}
                keyboardType={keyboardType}
                textContentType={textContentType}
                multiline={multiline}
            />
        </View >
    )
}
export default AuthInput;