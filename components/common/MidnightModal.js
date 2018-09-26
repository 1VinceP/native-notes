import React, { Component } from 'react';
import {
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    View,
    Text,
    TextInput,
    Modal,
    StyleSheet,
    Picker
} from 'react-native';
import { MidnightButton, MidnightPicker } from './index';

class MidnightModal extends Component {
    constructor() {
        super();

        this.state = {
            title: '',
            indentLevel: 1
        }

        this.handleTitle = this.handleTitle.bind(this);
    }

    handleTitle( e ) {
        this.setState({
            title: e
        })
    }

    handlePicker( value ) {
        this.setState({ indentLevel: value })
    }

    handleClose( method ) {
        method( this.state.title, this.state.indentLevel );
        this.setState({
            title: '',
            indentLevel: 1
        })
    }

    render() {
        const { modalStyle, containerStyle, titleStyle, titleText, inputStyle, buttonContainer } = styles

        return (
            <Modal
                animationType='fade'
                transparent={true}
                visible={this.props.visible}
                onRequestClose={() => {}}
                onShow={() => {}}
            >
                <KeyboardAvoidingView style={modalStyle}>
                    <View style={containerStyle}>
                        <View style={titleStyle}><Text style={titleText}>{this.props.title}</Text></View>
                        <TextInput
                            style={inputStyle}
                            placeholder='Note Title'
                            value={this.state.title}
                            onChangeText={this.handleTitle}
                            autoFocus
                        />
                        <MidnightPicker
                            title='Indent Level: '
                            selectedValue={this.state.indentLevel}
                            onValueChange={value => this.handlePicker( value )}
                            options={[1, 2, 3, 4, 5]}
                        />
                        <View style={buttonContainer}>
                            <MidnightButton title='Save' onPress={() => this.handleClose( this.props.handleSave )} />
                            <MidnightButton title='Cancel' onPress={() => this.handleClose( this.props.handleModal )} />
                        </View>
                    </View>
                </KeyboardAvoidingView>
            </Modal>
        )
    }
}

const styles = StyleSheet.create({
    modalStyle: {
        height: '100%',
        width: '100%',
        backgroundColor: '#0008',
        justifyContent: 'center',
        alignItems: 'center'
    },

    containerStyle: {
        height: 260,
        width: '80%',
        backgroundColor: '#fff',
        elevation: 5,
        justifyContent: 'space-between'
    },

    titleStyle: {
        height: 40,
        backgroundColor: '#ab47bc',
        justifyContent: 'center',
        paddingLeft: 10
    },
    titleText: {
        color: '#fff',
        fontSize: 24
    },

    inputStyle: {
        height: 50,
        fontSize: 20,
        padding: 10
    },

    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
})

export { MidnightModal };