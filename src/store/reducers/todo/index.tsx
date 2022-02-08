import { ADD_TODO, FILL_TODOS } from "../../types/todo"

let initialState = {
    todos: [],
}


export const TodoReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case FILL_TODOS:
            return { ...state, todos: action.payload }
        case ADD_TODO:
            return { ...state, todos: [ action.payload, ...state.todos] }
        default:
            return state
    }
}
