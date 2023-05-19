import React from 'react';
import ReactDOM from 'react-dom/client';
import './bootstrap.css'
import './index.css';
import App from './App';
import {legacy_createStore} from 'redux'
import allReducers from './reducers';
import { Provider } from 'react-redux';

const mystore=legacy_createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Provider store={mystore}>
   <App />
   </Provider>
  </React.StrictMode>
);


