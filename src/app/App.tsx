import { Suspense,lazy } from "react";
import { Route, Switch } from "react-router-dom";
import Loading from "../components/Loading";
import { AppProvider } from "./AppProvider";

const HomePage = lazy(() => import('../page/home/index'));
const TodoPage = lazy(() => import('../page/todo/index'));


const App = (props:any) => {
  
  return (
    <AppProvider>
     <Suspense fallback={<Loading/>}>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path="/todo" component={TodoPage}/>
        </Switch>
      </Suspense>
    </AppProvider>
  );
}

export default App;
