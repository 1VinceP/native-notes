import React from 'react';
import { Button } from 'react-native';

function MidnightButton({ title, onPress }) {

    return <Button title={title} onPress={onPress} color='#ab47bc' />
}

export { MidnightButton }