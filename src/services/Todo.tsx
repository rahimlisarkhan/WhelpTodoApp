import { Axios } from "../util/baseURL"




export const getTodos = async () => {
    const res = await Axios.get("todos")
    return res
}

export const addTodos = async (form: any) => {
    const res = await Axios.post("todos", form)
    return res
}

export const deleteTodos = async (id: any) => {
    const res = await Axios.delete(`todos/${id}`)
    return res
}

