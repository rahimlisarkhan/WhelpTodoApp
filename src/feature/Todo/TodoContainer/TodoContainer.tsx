import { useEffect } from "react"
import { connect } from "react-redux"
import { fillData } from "../../../store/actions/todo"
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import { DrawerHeader, TodoContentStyled } from './TodoContainer.styled';
import TodoList from '../components/TodoList';
import { Grow } from '@mui/material';
import { useHistory } from "react-router-dom";

type Props = {
    fillData: () => void,
}

const TodoContainer = ({ fillData }: Props) => {
    let { location } = useHistory()

    useEffect(() => {
        fillData()

    }, [fillData])

    return (
        <TodoContentStyled >
            <CssBaseline />
            <Grow
                in={true}
                style={{ transformOrigin: '0 0 0' }}
                timeout={1000}
            >
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <DrawerHeader />
                    <Typography variant="h4">
                        {location.pathname?.split("/todo/")[1][0].toUpperCase()}{location.pathname?.split("/todo/")[1].slice(1)}
                    </Typography>
                    <TodoList />
                </Box>
            </Grow>
        </TodoContentStyled>
    )
}


export default connect(null, { fillData })(TodoContainer)