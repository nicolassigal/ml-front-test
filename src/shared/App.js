import React, { Component } from 'react';
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';
import SearchBox from '../client/components/SearchBox';
import { renderRoutes } from 'react-router-config';
import HomePage from '../client/pages/HomePage';
import ProductsListPage from '../client/pages/ProductsListPage';
import ProductDetailPage from '../client/pages/ProductDetailPage';
const App = ({...props}) => {
    console.log(props);
    return (
        <div>
            <SearchBox />
            <Switch>
                <Route path='/' exact={true} component={HomePage}/>
                <Route path='/items' exact={true} render={(props) => <ProductsListPage {...props}/>}/>
                <Route path='/items/:id' render={(props) => <ProductDetailPage {...props}/>}/>
            </Switch>
        </div>
    );
}

export default App;