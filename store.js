import { createStore, combineReducers } from 'redux';
import { persistStore, persistReducer, persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import notesReducer from './redux/notesReducer';
import todoReducer from './redux/todoReducer';
import themeReducer from './redux/themeReducer';

import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

// const reducers = combineReducers({
//     notes: notesReducer,
//     todos: todoReducer,
//     theme: themeReducer
// });

const persistConfig = {
    key: 'root',
    storage,
    stateReconciler: autoMergeLevel2
};

const reducers = {
    notes: notesReducer,
    todos: todoReducer,
    theme: themeReducer
}

const persistedReducer = persistCombineReducers( persistConfig, reducers );

const store = createStore( persistedReducer );
console.log( store )
const persistor = persistStore( store );

export { store, persistor };

// const store = createStore( persistedReducer );

// persistStore(
//     store,
//     null,
    // () => {
    //     store.getState()
    // }
// )

// export default () => {
//     let store = createStore( persistedReducer );
//     let persistor = persistStore( store );
//     return { store, persistor }
// };