import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from 'Shared/App';
import './scss/styles.scss';

ReactDOM.hydrate(
  <BrowserRouter>
    <App {...window.__INITIAL_DATA__} />
  </BrowserRouter>,
  document.querySelector('#root'));