import serialize from 'serialize-javascript';
import React from 'react';
import { StaticRouter } from 'react-router-dom';
import { renderToString } from 'react-dom/server';
import { renderRoutes } from 'react-router-config';
import routes from '../../shared/routes';

export default (req, data) => {
    const context = { data }
    const content = renderToString(
        <StaticRouter path={req.url} context={context}>
            <div>{renderRoutes(routes)}</div>
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