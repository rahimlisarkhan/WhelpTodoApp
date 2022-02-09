import { useEffect } from "react"
import { connect } from "react-redux"
import { fillData } from "../../../store/actions/todo"
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import {DrawerHeader, TodoContentStyled } from './TodoContainer.styled';
import TodoList from '../components/TodoList';
import { Grow } from '@mui/material';

type Props = {
    fillData: () => void,
}

const TodoContainer = ({ fillData }: Props) => {

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
                            My Day
                    </Typography>
                    <TodoList/>
                </Box>
            </Grow>
        </TodoContentStyled>
    )
}


export default connect(null, { fillData })(TodoContainer)