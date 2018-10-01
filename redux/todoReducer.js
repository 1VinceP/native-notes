const initialState = {
    todos: [],
    id: 1
}

const CREATE_TODO = 'CREATE_TODO'
    , HANDLE_COMPLETE = 'HANDLE_COMPLETE'
    , DELETE_TODO = 'DELETE_TODO'

export default ( state = initialState, action ) => {
    switch( action.type ) {
        case CREATE_TODO: {
            return {
                ...state,
                todos: [...state.todos, {...action.payload, id: state.id + '', completed: false}],
                id: ++state.id
            }
        }
        case HANDLE_COMPLETE: {
            let todos = [...state.todos]
            let index = state.todos.findIndex( todo => todo.id === action.payload + '' )
            todos[index].completed = !todos[index].completed
            return {
                ...state,
                todos
            }
        }
        case DELETE_TODO: {
            let todos = state.todos.filter( todo => todo.id !== action.payload )
            return { ...state, todos }
        }

        default:
            return state
    }
}

export function createTodo( title, priority ) {
    if( !title )
        title = 'New Todo'

    let todo = {
        title,
        priority
    }

    return {
        type: CREATE_TODO,
        payload: todo
    }
}

export function handleComplete( id ) {

    return {
        type: HANDLE_COMPLETE,
        payload: id
    }
}

export function deleteTodo( id ) {

    return {
        type: DELETE_TODO,
        payload: id
    }
}