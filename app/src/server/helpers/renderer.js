import React from 'react';
import { StaticRouter } from 'react-router-dom';
import { renderToString } from 'react-dom/server';
import serialize from 'serialize-javascript';
import App from 'Shared/App';

export default (req, data, title) => {
    const context = { data }
    const content = renderToString(
        <StaticRouter location={req.url} context={{}}>
            <App {...data}/>
        </StaticRouter>
        );
    return `
    <html lang="es-AR">
        <head>
            <title>${title}</title>
            <link rel="stylesheet" type="text/css" href="/styles.css" />
            <link rel="icon" href="/assets/favicon.ico" type="image/x-icon" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
            <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="HandheldFriendly" content="True">
            <meta http-equiv="cleartype" content="on">
            <meta name="description" content="La comunidad de compra y venta online más grande de América Latina.">    
        </head>
        <body>
            <div id="root">${content}</div>
            <script>window.__INITIAL_DATA__ = ${serialize(data)}</script>
            <script src="/main.bundle.js"></script>
        </body>
    </html>
    `;
}