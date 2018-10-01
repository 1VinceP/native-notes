import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

function FloatingPlus({ onPress, theme }) {
    let styles = StyleSheet.create({
        buttonStyle: {
            alignItems: 'center',
            justifyContent: 'center',
            width: 65,
            height: 65,
            backgroundColor: theme.secondary,
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
    const { buttonStyle, textStyle } = styles

    return (
        <TouchableOpacity style={buttonStyle} onPress={onPress}>
            <Text style={textStyle}>+</Text>
        </TouchableOpacity>
    )
}


export { FloatingPlus }