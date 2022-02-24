import React from 'react';
import ReactDOM from 'react-dom';
import './views/styles/styles.css';
import App from './views/app/app';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';


const rootElement = document.getElementById('root');
ReactDOM.render(
  // <Provider store={store}>
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  // </Provider>,
  rootElement
);


