import themeOptions from './colors';

const initialState = {
    themeTitle: 'Default',
    theme: themeOptions.default
}

const UPDATE_THEME = 'UPDATE_THEME'

export default ( state = initialState, action ) => {
    switch( action.type ) {
        case UPDATE_THEME:
            return {
                ...state,
                themeTitle: action.payload,
                theme: themeOptions[action.payload.toLowerCase()]
            }

        default:
            return state;
    }
}

export function updateTheme( themeName ) {

    return {
        type: UPDATE_THEME,
        payload: themeName
    }
}