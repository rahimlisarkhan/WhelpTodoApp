import { TodoItemStyled, CheckButton } from "./TodoItem.styled"
import CheckIcon from '@mui/icons-material/Check';
import { useState } from "react";
import { IconButton } from "@mui/material";
import Rating from '@mui/material/Rating';
import { Box } from "@material-ui/core";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { connect } from "react-redux"
import { completedTodo, addImportantTodo, deleteTodo } from "../../../../store/actions/todo"
import { TodoItemType } from "../../../../interface/todo";


type Props = {
    completedTodo?:any;
    addImportantTodo?: any
    deleteTodo?: any
    item?: TodoItemType
}

const TodoItem: React.FunctionComponent<Props> = ({ item, completedTodo, addImportantTodo, deleteTodo }) => {

    const [check, setCheck] = useState<boolean | undefined>(item?.completed)
    const [important, setImportant] = useState<null | number>(item?.important ? 1 : 0)

    const handleImportant = (event: React.SyntheticEvent<EventTarget>, value: number | null) => {

        let data = {
            id: item?.id,
            important: value ? true : false
        }
        setImportant(value)
        addImportantTodo(data)

    }
    const handleCompleted = () => {
        setCheck(prev => !prev)
        completedTodo(item?.id)
    }

    const handleDelete = () => {
        deleteTodo(item?.id)
    }

    return (
        <TodoItemStyled check={check ? "true" : ""} >
            <Box>
                <CheckButton check={check ? "true" : ""} onClick={handleCompleted}>
                    {check && <CheckIcon />}
                </CheckButton>
                {item?.title}
            </Box>
            <Box>
                <IconButton>
                    <Rating onChange={handleImportant} name="size-large" size="large" value={important} max={1} />
                </IconButton>
                <IconButton onClick={handleDelete} >
                    <DeleteOutlineIcon />
                </IconButton>
            </Box>
        </TodoItemStyled>
    )
}

export default connect(null, { completedTodo, addImportantTodo, deleteTodo })(TodoItem)