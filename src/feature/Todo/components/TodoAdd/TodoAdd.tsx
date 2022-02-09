import React, { useState } from "react"
import { TodoAddButton, TodoAddContent, TodoField } from "./TodoAdd.styled"
import AddIcon from '@mui/icons-material/Add';
import { v4 as uuidv4 } from 'uuid';
import { connect } from "react-redux";
import { addTodo } from "../../../../store/actions/todo"
import { TodoItemType } from "../../../../interface/todo";

type Props = {
    addTodo: (form: TodoItemType) => void
}

const TodoAdd: React.FunctionComponent<Props> = ({ addTodo }) => {
    const [text, setText] = useState<null | string>('')
    const [error, setError] = useState(false)

    const addTodoItem = () => {
        if (!text) {
            setError(true)
            return
        }

        setError(false)
        setText('')
        addTodo({ id: uuidv4(), title: text })
    }

    return (
        <TodoAddContent>
            <TodoAddButton
                onClick={addTodoItem}
            >
                <AddIcon />
            </TodoAddButton>
            <TodoField
                error={error}
                placeholder={"Add a task"}
                value={text}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setText(e.target.value)}
                onKeyDown={(e:React.KeyboardEvent<HTMLInputElement>) => e.key === 'Enter' && addTodoItem()}
            />
        </TodoAddContent>
    )
}



export default connect(null, { addTodo })(TodoAdd)