import React from 'react';
import { View, Text, Picker, StyleSheet } from 'react-native';

function MidnightPicker({ title, options, selectedValue, onValueChange }) {
    const { containerStyle, titleStyle, pickerStyle } = styles

    let items = options.map( item => {
        return <Picker.Item key={item} label={item + ''} value={item} />
    } )

    return (
        <View style={containerStyle}>
            <Text style={titleStyle}>{title}</Text>
            <Picker
                style={pickerStyle}
                selectedValue={selectedValue}
                onValueChange={value => onValueChange( value )}
            >
                {items}
            </Picker>
        </View>
    )
}

const styles = StyleSheet.create({
    containerStyle: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },

    titleStyle: {

    },

    pickerStyle: {
        width: '50%'
    }
})

export { MidnightPicker };