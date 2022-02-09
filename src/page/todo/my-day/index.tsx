import { Required } from "../../../components/HOC/required"
import TodoContainer from "../../../feature/Todo/TodoContainer"

const MyDayPage: React.FC = () => {

    return (
           <TodoContainer />
    )
}

export default Required(MyDayPage)