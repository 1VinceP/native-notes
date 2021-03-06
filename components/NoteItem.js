import React, { Component } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { connect } from 'react-redux';
import { deleteNote } from '../redux/notesReducer';
import { View, Text, StyleSheet, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';

function NoteItem({ noteData, navigation, deleteNote, theme }) {
    const styles = StyleSheet.create({
        containerStyle: {
            width: '100%',
            height: 60,
            backgroundColor: theme.secondary,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            elevation: 5,
            borderWidth: 1,
            borderColor: '#0006',
            borderTopWidth: 0,
            paddingLeft: 30,
            paddingRight: 30
        },

        textStyle: {
            color: theme.color,
            fontSize: 18
        },

        deleteStyle: {
            borderWidth: 1,
            borderRadius: 3,
            borderColor: theme.color + '44',
            paddingLeft: 6,
            paddingRight: 4,
            color: theme.color,
            alignItems: 'center',
            justifyContent: 'center'
        }
    })
    const { containerStyle, textStyle, deleteStyle } = styles

    const margin = {
        marginLeft: -180 + ( (noteData.indent - 1) * 40 )
    }

    return (
        <TouchableOpacity
            style={containerStyle}
            onPress={() => navigation( noteData )}
        >
            <TouchableWithoutFeedback onPress={() => deleteNote( noteData.id )}>
                <View>
                    <Text style={deleteStyle}>
                        <Ionicons name='ios-trash-outline' size={26} color={theme.color} />
                    </Text>
                </View>
            </TouchableWithoutFeedback>

            <Text style={[textStyle, margin]}>{noteData.title}</Text>
            <Text style={textStyle}>></Text>
        </TouchableOpacity>
    )
}


function mapStateToProps( state ) {
    const { theme } = state.theme;

    return {
        theme
    };
}

export default connect( null, { deleteNote } )(NoteItem)