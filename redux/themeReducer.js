const themeOptions = {
    default: {
       primary: '#263238',
       secondary: '#546e7a',
       screenBg: '#37474f',
       color: '#ffffff',
       tintColor: '#ffffff',
       navColor: '#ffffff'
    },

    ios: {
        primary: '#f3f3f3',
        secondary: '#fbba01',
        screenBg: '#f3f3f3',
        color: '#424242',
        tintColor: '#fbba01',
        navColor: '#fbba01'
    },

    black: {
        primary: '#000000',
        secondary: '#000000',
        screenBg: '#323231',
        color: '#cccccc',
        tintColor: '#cccccc',
        navColor: '#ffffff'
    },

    zero: {
        primary: '#212121',
        secondary: '#e8c62c',
        screenBg: '#eeeeee',
        color: '#000000',
        tintColor: '#ffffff',
        navColor: '#ff0000'
    },

    schneider: {
        primary: '#fe6b40',
        secondary: '#96e3ee',
        screenBg: '#eeeeee',
        color: '#000000',
        tintColor: '#ffffff',
        navColor: '#96e3ee'
    },

    jager: {
        primary: '#050c6d',
        secondary: '#a4c8e8',
        screenBg: '#eeeeee',
        color: '#000000',
        tintColor: '#ffffff',
        navColor: '#a4c8e8'
    },

    panzer: {
        primary: '#6F8674',
        secondary: '#a4c8e8',
        screenBg: '#eeeeee',
        color: '#000000',
        tintColor: '#ffffff',
        navColor: '#CC4353'
    }
}

const initialState = {
    themeTitle: 'Panzer',
    theme: themeOptions.panzer
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