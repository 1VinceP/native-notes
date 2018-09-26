import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

class NoteScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam( 'note' ).title,
            headerRight: <Button title='Modal' onPress={() => navigation.navigate('MyModal')} />
        }
    }

    constructor() {
        super();

        this.state = {

        }
    }

    componentDidMount() {
        this.setState({
            note: this.props.navigation.getParam( 'note', { title: 'New Note', content: '', indent: 1 } )
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>This is your note</Text>
                <Text>{this.props.navigation.getParam('details')}</Text>
                <Button title='Go back' onPress={() => this.props.navigation.goBack()} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 22
    }
});

export default NoteScreen;