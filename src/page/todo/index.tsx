import { Required } from "../../components/HOC/required"
import TodoContainer from "../../feature/Todo/TodoContainer"


const TodoPage:React.FC = () => {
    return(
        <TodoContainer/>
    )
}

export default Required(TodoPage)