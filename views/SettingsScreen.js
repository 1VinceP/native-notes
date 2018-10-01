import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateTheme } from '../redux/themeReducer';
import { deleteAllNotes } from '../redux/notesReducer';
import { deleteAllTodos } from '../redux/todoReducer';
import { View, Text, StyleSheet } from 'react-native';
import { MidnightPicker, MidnightButton } from '../components/common';

class SettingsScreen extends Component {
    static navigationOptions = {
        title: 'Settings'
    }

    render() {
        const styles = StyleSheet.create({
            containerStyle: {
                flex: 1,
                backgroundColor: this.props.theme.screenBg,
                alignItems: 'center',
                justifyContent: 'center'
            },

            buttonContainer: {
                width: '90%',
                flexDirection: 'row',
                justifyContent: 'space-around',
                marginTop: 30
            }
        })
        const { containerStyle, buttonContainer } = styles

        const options = [
            'Default', 'iOS', 'Black', 'Zero', 'Schneider', 'Jager'
        ]

        return (
            <View style={containerStyle}>
                <MidnightPicker
                    title ='Change Theme:'
                    selectedValue={this.props.themeTitle}
                    onValueChange={value => this.props.updateTheme( value )}
                    options={options}
                    theme={this.props.theme}
                />
                <View style={buttonContainer}>
                    <MidnightButton
                        title='Delete All Notes'
                        onPress={() => this.props.deleteAllNotes()}
                        theme={this.props.theme}
                    />
                    <MidnightButton
                        title='Delete All Todos'
                        onPress={() => this.props.deleteAllTodos()}
                        theme={this.props.theme}
                    />
                </View>
            </View>
        )
    }
}

function mapStateToProps( state ) {
    const { themeTitle, theme } = state.theme;

    return {
        themeTitle,
        theme
    };
}

export default connect( mapStateToProps, { updateTheme, deleteAllNotes, deleteAllTodos } )(SettingsScreen);