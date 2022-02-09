import { Required } from "../../components/HOC/required"
import Layout from "../../components/Layout"
import { Redirect, Route, Switch } from "react-router-dom"
import { lazy } from "react"
import { Error404Page } from "../404/Error404Page"

const MyDayPage = lazy(() => import("./my-day"))
const ImportantPage = lazy(() => import("./important"))

const TodoPage: React.FC = () => {
    return (
        <Layout>
            <Switch>
                <Route exact path={"/todo/my-day"} component={MyDayPage} />
                <Route exact path={"/todo/important"} component={ImportantPage} />
                <Route component={Error404Page} />
                <Redirect exact from="/todo" to="/todo/my-day"/>
            </Switch>
        </Layout>
    )
}

export default Required(TodoPage)