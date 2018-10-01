import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteNote } from '../redux/notesReducer';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import colors from '../colors';

function NoteItem({ noteData, navigation, deleteNote }) {
    const { containerStyle, textStyle } = styles

    const padding = {
        paddingLeft: noteData.indent * 30,
        paddingRight: 30
    }

    return (
        <TouchableOpacity
            style={[containerStyle, padding]}
            onPress={() => navigation( noteData )}
            onLongPress={() => deleteNote( noteData.id )}
        >
            <Text style={textStyle}>{noteData.title}</Text>
            <Text style={textStyle}>></Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    containerStyle: {
        width: '100%',
        height: 60,
        backgroundColor: colors.primeAlt,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        elevation: 5,
        borderWidth: 1,
        borderColor: '#0006',
        borderTopWidth: 0
    },

    textStyle: {
        color: '#fff',
        fontSize: 18
    }
})

export default connect( null, { deleteNote } )(NoteItem)