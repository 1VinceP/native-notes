import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { TouchableWithoutFeedback, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { handleComplete, deleteTodo } from '../redux/todoReducer';

function TodoItem({ todoData, completed = false, handleComplete, deleteTodo, theme }) {

    const styles = StyleSheet.create({
        containerStyle: {
            width: '100%',
            height: 40,
            backgroundColor: !completed ? theme.secondary : theme.secondary+'55',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            elevation: 5,
            borderWidth: 1,
            borderColor: '#0006',
            borderTopWidth: 0,
            paddingLeft: 20,
            paddingRight: 20
        },

        textStyle: {
            color: !completed ? theme.color : theme.color+'aa',
            fontSize: 18,
            borderWidth: 1,
            borderRadius: 3,
            borderColor: theme.color+'44',
            paddingLeft: 6,
            paddingRight: 6
        }
    })
    const { containerStyle, textStyle } = styles

    return (
        <TouchableOpacity
            style={containerStyle}
            onPress={() => handleComplete( todoData.id )}
        >
            <TouchableWithoutFeedback onPress={() => deleteTodo( todoData.id )}>
                <Text style={textStyle}>
                    <Ionicons name='ios-trash-outline' size={18} color={theme.color} /> {todoData.title} ({todoData.priority})
                </Text>
            </TouchableWithoutFeedback>
        </TouchableOpacity>
    )
}

function mapStateToProps( state ) {
    const { theme } = state.theme;

    return {
        theme
    };
}

export default connect( mapStateToProps, { handleComplete, deleteTodo } )(TodoItem);