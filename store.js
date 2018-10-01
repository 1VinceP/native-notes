import { createStore, combineReducers } from 'redux';
import notesReducer from './redux/notesReducer';
import todoReducer from './redux/todoReducer';

const reducers = combineReducers({
    notes: notesReducer,
    todos: todoReducer
})

export default createStore(
    reducers
);