import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function NoteItem({ noteData, navigation }) {

    const { containerStyle, textStyle } = styles

    const padding = {
        paddingLeft: noteData.indent * 30,
        paddingRight: 30
    }

    return (
        <TouchableOpacity style={[containerStyle, padding]} onPress={() => navigation( noteData )}>
            <Text style={textStyle}>{noteData.title}</Text>
            <Text style={textStyle}>></Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    containerStyle: {
        width: '100%',
        height: 60,
        backgroundColor: '#828282',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        elevation: 5,
        borderWidth: 1,
        borderColor: '#000',
        borderTopWidth: 0
    },

    textStyle: {
        color: '#fff',
        fontSize: 26
    }
})