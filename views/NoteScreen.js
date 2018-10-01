import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveDetails } from '../redux/notesReducer';
import { KeyboardAvoidingView, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';

class NoteScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam( 'note' ).title,
            headerRight: <TouchableOpacity style={{marginRight: 16}} onPress={navigation.getParam( 'onSave' )}><Text style={{color: navigation.getParam( 'color' )}}>Save</Text></TouchableOpacity>
            // headerRight: <Button title='Modal' onPress={() => navigation.navigate('MyModal')} />
        }
    }

    constructor() {
        super();

        this.state = {
            note: {},
            newDetails: ''
        }
    }

    componentDidMount() {
        this.setState({
            note: this.props.navigation.getParam( 'note' ),
            newDetails: this.props.navigation.getParam( 'note' ).details
        })

        this.props.navigation.setParams({
            onSave: this.onSave,
            color: this.props.theme.tintColor
        });
    }

    onSave = () => {
        const { newDetails, note: { id } } = this.state
        this.props.saveDetails( newDetails, id )
        this.props.navigation.goBack()
    }

    render() {
        const styles = StyleSheet.create({
            container: {
                flex: 1,
                backgroundColor: this.props.theme.screenBg,
                alignItems: 'center',
                justifyContent: 'space-between',
            },
            text: {
                fontSize: 22
            },

            inputStyle: {
                width: '100%',
                paddingTop: 10,
                paddingRight: 20,
                paddingBottom: 10,
                paddingLeft: 20,
                backgroundColor: this.props.theme.screenBg,
                justifyContent: 'flex-start',
                fontSize: 18,
                color: this.props.theme.color
            }
        });
        const { container, inputStyle } = styles

        return (
            <KeyboardAvoidingView style={container}>
                <TextInput
                    multiline={true}
                    underlineColorAndroid="transparent"
                    placeholder={'Type your note here'}
                    placeholderTextColor='#aaaa'
                    value={this.state.newDetails}
                    onChangeText={text => this.setState({ newDetails: text })}
                    style={inputStyle}
                />
            </KeyboardAvoidingView>
        )
    }
}


function mapStateToProps( state ) {
    const { theme } = state.theme;

    return {
        theme
    };
}

export default connect( mapStateToProps, { saveDetails } )(NoteScreen);