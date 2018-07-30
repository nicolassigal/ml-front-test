import { renderRoutes } from 'react-router-config';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Routes from '../shared/routes';
import App from '../shared/App';

ReactDOM.hydrate(
  <BrowserRouter>
    <App {...window.__INITIAL_DATA__} />
  </BrowserRouter>,
  document.querySelector('#root'));