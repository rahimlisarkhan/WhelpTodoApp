import { TodoItemType } from "../../../interface/todo"
import * as type from "../../types/todo"

type ActionType = {
    type:string
    payload: any
}


let initialState = {
    todos: [],
}

export const TodoReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {

        case type.FILL_TODOS:
            return { ...state, todos: action.payload }

        case type.ADD_TODO:
            localStorage.setItem(type.FILL_TODOS, JSON.stringify([action.payload, ...state.todos]))
            return { ...state, todos: [action.payload, ...state.todos] }

        case type.COMPLETED_TODO:
            let data = state.todos.map((todo: TodoItemType) => {
                if (todo.id === action.payload) {
                    todo.completed = !todo.completed
                }
                return todo
            })

            localStorage.setItem(type.FILL_TODOS, JSON.stringify(data))
            return { ...state, todos: data }

        case type.IMPORTANT_TODO:
            let importantData = state.todos.map((todo: TodoItemType) => {
                if (todo.id === action.payload.id) {
                    todo.important = action.payload.important
                }
                return todo
            })

            localStorage.setItem(type.FILL_TODOS, JSON.stringify(importantData))
            return { ...state, todos: importantData }

        case type.DELETE_TODO:
            const filterData = state.todos.filter((todo: TodoItemType) => todo.id !== action.payload)
            localStorage.setItem(type.FILL_TODOS, JSON.stringify(filterData))
            return { ...state, todos: filterData }

        default:
            return state
    }
}


