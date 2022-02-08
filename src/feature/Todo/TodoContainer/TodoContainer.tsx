import { useEffect } from "react"
import { connect } from "react-redux"
import TodoContent from "../components/TodoContent"
import { fillData } from "../../../store/actions/todo"

type Props = {
    fillData: () => void
}


const TodoContainer = ({ fillData }: Props) => {

    useEffect(() => {
        fillData()

    }, [fillData])

    return (
        <TodoContent />
    )
}


export default connect(null, { fillData })(TodoContainer)