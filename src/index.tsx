import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from './Redux/redux-store';
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import {MyContext} from "./Contecst";


const renderState = () => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <MyContext.Provider value={store}>
                    <App/>{/*state={store.getState()} dispatсh={store.dispatch.bind(store)}*/}
            </MyContext.Provider>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
renderState()

store.subscribe(renderState)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


