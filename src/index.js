import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ConnectedRouter } from 'react-router-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';


const rootElement = document.getElementById('root');

ReactDOM.render(
  <ConnectedRouter>
    <div>
      <h1>
        Hola Mundo
      </h1>
    </div>
  </ConnectedRouter>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
