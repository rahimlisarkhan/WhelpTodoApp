import { Required } from "../../../components/HOC/required"
import TodoContainer from "../../../feature/Todo/TodoContainer"


const ImportantPage: React.FC = (props) => {

    return (
           <TodoContainer/>
    )
}

export default Required(ImportantPage)