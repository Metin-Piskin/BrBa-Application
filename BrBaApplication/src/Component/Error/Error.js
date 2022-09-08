import React from "react";
import LottieView from 'lottie-react-native';

function Error() {
    return <LottieView
        source={require("../../Assets/Error.json")}
        autoPlay
        style={{ zIndex: 1, flex: 1 }}
    />;
}

export default Error;