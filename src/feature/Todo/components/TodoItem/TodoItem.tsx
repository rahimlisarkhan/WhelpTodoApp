import { TodoItemStyled, CheckButton } from "./TodoItem.styled"
import CheckIcon from '@mui/icons-material/Check';
import { useState } from "react";
import { IconButton } from "@mui/material";
import Rating from '@mui/material/Rating';
import { Box } from "@material-ui/core";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

type Props = {
    handleRemoveFruit: (item: string) => void
    item: any
}

export const TodoItem: React.FunctionComponent<Props> = ({ handleRemoveFruit, item }) => {

    const [check, setCheck] = useState(false)

    const addFavorite = (event: any, fav: number | null) => {

        if (fav) {
            console.log("add fav");
            return
        }

        console.log("delete fav");

    }

    return (
        <TodoItemStyled check={check ? "true" : ""} >
            <Box>
                <CheckButton check={check ? "true" : ""} onClick={() => setCheck(prev => !prev)}>
                    {check && <CheckIcon />}
                </CheckButton>
                {item?.title}
            </Box>
            <Box>
                <IconButton>
                    <Rating onChange={addFavorite} name="size-large" size="large" max={1} />
                </IconButton>
                <IconButton >
                    <DeleteOutlineIcon />
                </IconButton>
            </Box>
        </TodoItemStyled>
    )
}