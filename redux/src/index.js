// import {Provider} from 'react-redux';
// import {render} from 'react-dom';
// import {createStore} from 'redux';
// import reducer from './reducer';
// import reportWebVitals from './reportWebVitals';
// //import ReactDOM from 'react-dom/client';
// import App from './App';
// import './index.css';

// //const root = ReactDOM.createRoot(document.getElementById('root'));
// const store = createStore(
//     reducer,
//     window.__REDUX__DEVTOOLS__EXTENSIONS__ &&
//        window.__REDUX__DEVTOOLS__EXTENSION__()
//  )
//  render(
//     <Provider store = {store}>
//        <App />
//     </Provider>
//  )
//    reportWebVitals();
 
import ReactDOM from 'react-dom/client';
import React, { Component } from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from "redux";
import reducer from './reducer';
import {Provider} from 'react-redux';
import Counter from './Counter.js';
import { increment, decrement, reset } from './action';

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = createStore(
   reducer,
   window._REDUXDEVTOOLSEXTENSIONS_ &&
      window._REDUXDEVTOOLSEXTENSION_()
)
root.render(
   <Provider store = {store}>
      <App />
   </Provider>
)


reportWebVitals();