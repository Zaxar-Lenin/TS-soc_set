import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App, { all, StateType } from './App';
import reportWebVitals from './reportWebVitals';
import store from './Redux/state';
// import { addMasseng, addUsers, state, subscripe, updateValueMasseng, updateValueText } from './Redux/state';





const renderState = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={store.getState()} dispatсh={store.dispatсh.bind(store)}  />
    </React.StrictMode>,
    document.getElementById('root')
  );
}
renderState()

store.subscripe(renderState)



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


