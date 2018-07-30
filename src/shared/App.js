import React, { Component } from 'react';
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';
import SearchBox from '../client/components/SearchBox';
import { renderRoutes } from 'react-router-config';
const App = ({route}) => {
    console.log('route', route.routes);
    return (
        <div>
            <SearchBox />
            {renderRoutes(route.routes)}
        </div>
    );
}

export default {
    component: App
}