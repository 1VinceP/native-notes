import { createStore, combineReducers } from 'redux';
import notesReducer from './redux/notesReducer';
import todoReducer from './redux/todoReducer';
import themeReducer from './redux/themeReducer';

const reducers = combineReducers({
    notes: notesReducer,
    todos: todoReducer,
    theme: themeReducer
})

export default createStore(
    reducers
);