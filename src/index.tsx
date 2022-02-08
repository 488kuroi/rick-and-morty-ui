import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';


import {I18nextProvider} from "react-i18next";
import i18next from '@translations/index';


import { store } from '@reducers';
import App from './App';

const ENV = process.env.REACT_APP_ENVIRONMENT;

if ( ENV === 'production' ) {
  console.log  = console.warn = () => {}
}

// const history = createBrowserHistory();
ReactDOM.render(
  <Provider store={store}>
    <I18nextProvider i18n={ i18next }>
      <App />
    </I18nextProvider>
  </Provider>,
document.getElementById('root') );


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
