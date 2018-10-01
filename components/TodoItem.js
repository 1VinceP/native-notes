import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { handleComplete, deleteTodo } from '../redux/todoReducer';
import colors from '../colors';

function TodoItem({ todoData, completed = false, handleComplete, deleteTodo }) {

    const styles = StyleSheet.create({
        containerStyle: {
            width: '100%',
            height: 40,
            backgroundColor: !completed ? colors.primeAlt : colors.primeAlt+'55',
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
            color: !completed ? '#fff' : '#fffa',
            fontSize: 18
        }
    })
    const { containerStyle, textStyle } = styles

    let priority
    switch( todoData.priority ) {
        case '1':
            priority = 'High'
    }

    console.log( priority )

    return (
        <TouchableOpacity
            style={containerStyle}
            onPress={() => handleComplete( todoData.id )}
            onLongPress={() => deleteTodo( todoData.id )}
            delayLongPress={100}
        >
            <Text style={textStyle}>{todoData.title} {priority}</Text>
        </TouchableOpacity>
    )
}

export default connect( null, { handleComplete, deleteTodo } )(TodoItem);