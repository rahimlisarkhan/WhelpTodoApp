import { combineReducers } from "redux"
import { TodoReducer } from "./todo"



const reducers = combineReducers({
    todo:TodoReducer,
})

export default reducers