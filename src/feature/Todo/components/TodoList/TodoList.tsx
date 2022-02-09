import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';
import { TransitionGroup } from 'react-transition-group';
import TodoAdd from '../TodoAdd';
import { TodoListContent } from './TodoList.styled';
import TodoItem from "../../components/TodoItem"
import { connect } from 'react-redux';
import Loading from '../../../../components/Loading';
import { useHistory } from 'react-router-dom';
import { router } from "../../../../util/router"
import { useEffect, useState } from 'react';
import { Typography } from '@mui/material';
import { RootState } from '../../../../store';
import { TodoItemType } from '../../../../interface/todo';

const TodoList = ({ todosData }: any) => {
    
    let [state,setState]=useState(todosData)
    let [loading,setLoading] = useState(false)
    let history = useHistory()

    useEffect(()=>{
        setLoading(true)
        if(history.location.pathname === router.todo.children.important.href){
            setState(todosData.filter((todo:TodoItemType) => todo.important))
            setLoading(false)
            return
        }
        setState(todosData)
        setLoading(false)
    },[history.location.pathname,todosData])


    if (!state || loading) {
        return <Loading />
    }

    return (
        <TodoListContent>
           {history.location.pathname !== router.todo.children.important.href && <TodoAdd />}
            <List>
                <TransitionGroup>
                    {state.length 
                        ? state?.map((item: TodoItemType) => (
                            <Collapse key={`todos-id-${item.id}`}>
                                <TodoItem item={item} />
                            </Collapse>
                        ))
                        
                        : <Typography variant="h4" align="center" >Empty Todo</Typography>
                        }
                    
                </TransitionGroup>
            </List>
        </TodoListContent >
    );
}

const mapStateToProps = (state: RootState) => {
    return {
        todosData: state.todo.todos
    }
}

export default connect(mapStateToProps)(TodoList)