import { TodoItemType } from "../interface/todo"
import { Axios } from "../util/baseURL"




export const getTodos = async () => {
    const res = await Axios.get("todos")
    return res
}

export const addTodos = async (form: TodoItemType) => {
    const res = await Axios.post("todos", form)
    return res
}

export const deleteTodos = async (id: number) => {
    const res = await Axios.delete(`todos/${id}`)
    return res
}


