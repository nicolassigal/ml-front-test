import React from 'react';
import { StaticRouter } from 'react-router-dom';
import { renderToString } from 'react-dom/server';
import serialize from 'serialize-javascript';
import App from '../../shared/App';

export default (req, data, title) => {
    const context = { data }
    const content = renderToString(
        <StaticRouter location={req.url} context={{}}>
            <App {...data}/>
        </StaticRouter>
        );
    return `
    <html>
        <head>
            <title>${title}</title>
            <link rel="stylesheet" type="text/css" href="/styles.css" />
        </head>
        <body>
            <div id="root">${content}</div>
            <script>window.__INITIAL_DATA__ = ${serialize(data)}</script>
            <script src="/bundle.js"></script>
        </body>
    </html>
    `;
}