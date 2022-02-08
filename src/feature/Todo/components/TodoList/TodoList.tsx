import * as React from 'react';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import DeleteIcon from '@mui/icons-material/Delete';
import { TransitionGroup } from 'react-transition-group';
import TodoAdd from '../TodoAdd';
import { TodoListContent } from './TodoList.styled';
import TodoItem from "../../components/TodoItem"


const FRUITS = [
    '🍏 Apple',
    '🍌 Banana',
    '🍍 Pineapple',
    '🥥 Coconut',
    '🍉 Watermelon',
];

export const TodoList = () => {
    const [fruitsInBasket, setFruitsInBasket] = React.useState(FRUITS.slice(0, 3));

    const handleAddFruit = () => {
        const nextHiddenItem = FRUITS.find((i) => !fruitsInBasket.includes(i));
        if (nextHiddenItem) {
            setFruitsInBasket((prev) => [nextHiddenItem, ...prev]);
        }
    };

    const handleRemoveFruit = (item: string) => {
        setFruitsInBasket((prev) => [...prev.filter((i) => i !== item)]);
    };

    return (
        <TodoListContent>
            <List>
                <TransitionGroup>
                    {fruitsInBasket.map((item) => (
                        <Collapse key={item}>
                            <TodoItem handleRemoveFruit={handleRemoveFruit} item={item} >
                            </TodoItem>
                        </Collapse>
                    ))}
                </TransitionGroup>
            </List>
            <TodoAdd handleAddFruit={handleAddFruit} />
        </TodoListContent >
    );
}
