import * as React from 'react';
import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';
import { TransitionGroup } from 'react-transition-group';
import TodoAdd from '../TodoAdd';
import { TodoListContent } from './TodoList.styled';
import TodoItem from "../../components/TodoItem"
import { connect } from 'react-redux';
import Loading from '../../../../components/Loading';




const TodoList = ({ state: { todosData } }: any) => {



    const handleAddFruit = () => {
        // const nextHiddenItem = FRUITS.find((i) => !TodosData.includes(i));
        // if (nextHiddenItem) {
        //     setTodosData((prev) => [nextHiddenItem, ...prev]);
        // }
    };

    const handleRemoveFruit = (item: string) => {
        // setTodosData((prev) => [...prev.filter((i) => i !== item)]);
    };

    if(!todosData){
        return <Loading/>
    }

    return (
        <TodoListContent>
            <TodoAdd handleAddFruit={handleAddFruit} />
            <List>
                <TransitionGroup>
                    {todosData?.map((item:any) => (
                        <Collapse key={`todos-id-${item.id}`}>
                            <TodoItem item={item} />
                        </Collapse>
                    ))}
                </TransitionGroup>
            </List>
        </TodoListContent >
    );
}

const mapStateToProps = (state: any) => {
    return {
        state: {
            todosData: state.todo.todos
        }
    }
}


export default connect(mapStateToProps)(TodoList)