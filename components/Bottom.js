import React from 'react';
import { Text, View } from 'react-native';

const Bottom = (props) => {
    const { textStyle, viewStyles } = styles;

    return (
        <View style={viewStyles}>
            <Text style={textStyle}>{props.bottomText}</Text>
        </View>
    );
};

const styles = {
    viewStyles: {
        backgroundColor: '#00FFFF',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2},
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 20,
    }
};
export default Bottom;
