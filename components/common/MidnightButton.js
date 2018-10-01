import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import colors from '../../colors';

function MidnightButton({ title, onPress, theme }) {
    const styles = StyleSheet.create({
        buttonStyle: {
            flex: 1,
            height: 30,
            margin: 3,
            backgroundColor: theme.secondary,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 3
        },

        textStyle: {
            fontSize: 14,
            color: theme.color
        }
    })
    const { buttonStyle, textStyle } = styles

    return (
        <TouchableOpacity style={buttonStyle} onPress={onPress}>
            <Text style={textStyle}>{title.toUpperCase()}</Text>
        </TouchableOpacity>
    )
}


export { MidnightButton }