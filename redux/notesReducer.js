const initialState = {
    notes: [],
    id: 1
}

const ADD_NOTE = 'ADD_NOTE'
    , SAVE_DETAILS = 'SAVE_DETAILS'
    , DELETE_NOTE = 'DELETE_NOTE'
    , DELETE_ALL_NOTES = 'DELETE_ALL_NOTES'

export default ( state = initialState, action ) => {
    switch( action.type ) {
        case ADD_NOTE: {
            return {
                ...state,
                notes: [...state.notes, {...action.payload, id: state.id + ''}],
                id: ++state.id
            }
        }
        case SAVE_DETAILS: {
            let notes = [...state.notes]
            let index = state.notes.findIndex( note => note.id === action.payload.id )
            notes[index].details = action.payload.details
            return {
                ...state,
                notes
            }
        }
        case DELETE_NOTE: {
            let notes = state.notes.filter( note => note.id !== action.payload )
            return {...state, notes}
        }

        case DELETE_ALL_NOTES: {
            return { ...state, notes: [], id: 1 }
        }

        default:
            return state
    }
}

export function addNote( title, indent ) {
    if( !title )
        title = 'New Note'

    let note = {
        title,
        content: '',
        indent
    };

    return {
        type: ADD_NOTE,
        payload: note
    };
};

export function saveDetails( details, id ) {

    return {
        type: SAVE_DETAILS,
        payload: { details, id }
    }
}

export function deleteNote( id ) {

    return {
        type: DELETE_NOTE,
        payload: id
    }
}

export function deleteAllNotes() {

    return {
        type: DELETE_ALL_NOTES,
        payload: null
    }
}