import { toast } from "react-toastify";
import { addTodos, getTodos } from "../../../services/Todo"
import { ADD_TODO, FILL_TODOS } from "../../types/todo";


export const fillData = () => async (dispatch: any) => {

    try {
        let { data } = await getTodos()
        dispatch({ type: FILL_TODOS, payload: data })

    } catch (error) {
        toast.error("Error")
    }
}


export const addTodo = (todoForm: any) => async (dispatch: any) => {
    try {
        let { status } = await addTodos(todoForm)
        if (status === 201) {
            dispatch({ type: ADD_TODO, payload: todoForm })
            toast.success("Successfully added")
        }

    } catch (error) {
        toast.error("Error")
    }
}