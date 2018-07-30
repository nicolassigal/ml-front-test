import serialize from 'serialize-javascript';
import React from 'react';
import { StaticRouter } from 'react-router-dom';
import { renderToString } from 'react-dom/server';
import { renderRoutes } from 'react-router-config';
import Routes from '../../shared/routes';
import App from '../../shared/App';

export default (req, data) => {
    const context = { data }
    const content = renderToString(
        <StaticRouter location={req.url} context={{}}>
            <App />
        </StaticRouter>
        );
    return `
    <html>
        <head></head>
        <body>
            <div id="root">${content}</div>
            <script>window.__INITIAL_DATA__ = ${serialize(data)}</script>
            <script src="/bundle.js"></script>
        </body>
    </html>
    `;
}