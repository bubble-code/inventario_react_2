import React from 'react';
import ReactDOM from 'react-dom';
import './views/styles/styles.css';
import App from './views/app';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import {store} from './store/store';

console.log(store.getState());
const rootElement = document.getElementById('root');
// ReactDOM.render(
//   <Provider store={store}>
//     <BrowserRouter>
//       <div>
//         <App/>
//       </div>
//     </BrowserRouter>
//   </Provider>,
//   rootElement
// );
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider >,
  rootElement
);
