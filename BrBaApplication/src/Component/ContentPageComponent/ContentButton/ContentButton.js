import React from "react";
import { TouchableOpacity, Text } from "react-native";

import styles from './ContentButton.style';

const ContentButton = ({ onPress, title }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )
}
export default ContentButton;