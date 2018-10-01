import React, { Component } from 'react';
import {
    KeyboardAvoidingView,
    View,
    Text,
    Modal,
    StyleSheet,
} from 'react-native';
import { MidnightButton } from './index';

function MidnightModal({ visible, title, handleClose, handleSave, handleModal, children, theme }) {
    const styles = StyleSheet.create({
        modalStyle: {
            height: '100%',
            width: '100%',
            backgroundColor: '#0008',
            justifyContent: 'center',
            alignItems: 'center'
        },

        containerStyle: {
            minHeight: 260,
            width: '80%',
            backgroundColor: theme.screenBg,
            elevation: 5,
            justifyContent: 'space-between'
        },

        titleStyle: {
            height: 40,
            backgroundColor: theme.secondary,
            justifyContent: 'center',
            paddingLeft: 10
        },
        titleText: {
            color: '#fff',
            fontSize: 24
        },

        buttonContainer: {
            flexDirection: 'row',
            justifyContent: 'space-around'
        }
    })
    const { modalStyle, containerStyle, titleStyle, titleText, buttonContainer } = styles

    return (
        <Modal
            animationType='fade'
            transparent={true}
            visible={visible}
            onRequestClose={() => {}}
            onShow={() => {}}
        >
            <KeyboardAvoidingView style={modalStyle}>
                <View style={containerStyle}>
                    <View style={titleStyle}><Text style={titleText}>{title}</Text></View>

                    {children}

                    <View style={buttonContainer}>
                        <MidnightButton title='Save' onPress={() => handleClose( handleSave )} theme={theme} />
                        <MidnightButton title='Cancel' onPress={() => handleClose( handleModal )} theme={theme} />
                    </View>
                </View>
            </KeyboardAvoidingView>
        </Modal>
    )
}


export { MidnightModal };