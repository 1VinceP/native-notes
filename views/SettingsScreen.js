import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateTheme } from '../redux/themeReducer';
import { View, Text, StyleSheet } from 'react-native';
import { MidnightPicker } from '../components/common';

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
            }
        })
        const { containerStyle } = styles

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

export default connect( mapStateToProps, { updateTheme } )(SettingsScreen);