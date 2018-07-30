import { renderRoutes } from 'react-router-config';
import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import routes from '../shared/routes';
hydrate(
    <BrowserRouter>
       <div>{renderRoutes(routes)}</div>
    </BrowserRouter>
, document.querySelector('#root'));