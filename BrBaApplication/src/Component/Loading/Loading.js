import React from "react";
import LottieView from 'lottie-react-native';

function Loading() {
    return <LottieView
        source={require('../../Assets/Loading.json')}
        autoPlay
        style={{ zIndex: 1, flex: 1 }}
    />;
}
export default Loading;