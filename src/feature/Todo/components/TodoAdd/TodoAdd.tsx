import React, { useState } from "react"
import { TodoAddButton, TodoAddContent, TodoField } from "./TodoAdd.styled"
import AddIcon from '@mui/icons-material/Add';

type Props = {
    handleAddFruit: () => void
}

export const TodoAdd: React.FunctionComponent<Props> = ({ handleAddFruit }) => {
    const [text, setText] = useState<null | string>('')
    const [error,setError] = useState(false)

    const addTodoItem = () =>{
        if(!text){
            setError(true)
            return
        }

        handleAddFruit()
        setError(false)
        setText('')
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
                onChange={(e: any) => setText(e.target.value)}

            />
        </TodoAddContent>
    )
}