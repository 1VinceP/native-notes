import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class Modal extends Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: 30 }}>This is a modal!</Text>
                <Button title='Dismiss' onPress={() => this.props.navigation.goBack()} />
            </View>
        )
    }
}

export default Modal;