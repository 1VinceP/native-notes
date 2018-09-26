import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

function FloatingPlus({ onPress }) {
    const { buttonStyle, textStyle } = styles

    return (
        <TouchableOpacity style={buttonStyle} onPress={onPress}>
            <Text style={textStyle}>+</Text>
        </TouchableOpacity>
    )
}

let styles = StyleSheet.create({
    buttonStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 65,
        height: 65,
        backgroundColor:'#ab47bc',
        borderRadius: 100,
        elevation: 5,
        position: 'absolute',
        bottom: 12,
        right: 12
    },

    textStyle: {
        color: '#fff',
        fontSize: 24
    }
})

export { FloatingPlus }