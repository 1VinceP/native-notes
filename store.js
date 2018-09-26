import { createStore, combineReducers } from 'redux';
import notesReducer from './redux/notesReducer';

const reducers = combineReducers({
    notes: notesReducer
})

export default createStore( reducers );