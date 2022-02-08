import {
    BrowserRouter as Router,
} from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "../style/theme";
import GlobalStyle from "../style/global";
// import { store } from '../store'
// import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const AppProvider = ({ children }:any) => {

    // console.log(theme);
    

    return (
        <Router>
            {/* <Provider store={store}> */}
                <ThemeProvider theme={theme}>
                    <GlobalStyle />
                        {children}
                        <ToastContainer />
                </ThemeProvider >
            {/* </Provider> */}
        </Router>
    )
}