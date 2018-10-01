import React from 'react';
import { View, Text, Picker, StyleSheet } from 'react-native';

function MidnightPicker({ title, options, selectedValue, onValueChange, theme }) {
    const styles = StyleSheet.create({
        containerStyle: {
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center'
        },

        titleStyle: {
            color: theme.color
        },

        pickerStyle: {
            width: '50%',
            color: theme.color
        },
    })
    const { containerStyle, titleStyle, pickerStyle, pickerItemStyle } = styles

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


export { MidnightPicker };