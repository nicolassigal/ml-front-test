import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SearchBox from './components/SearchBox/SearchBox';
import Routes from './App.routes';

const App = (props) => {
    return (
        <div>
            <SearchBox searchQuery={props.searchQuery}/>
            <Switch>
            {Routes.map(({ path, component: Comp, exact }, i) => {
                if(Comp) {
                    return <Route key={i} path={path} exact={exact} render={ ()=> <Comp {...props} /> }/>
                }
            }                            
            )}
            </Switch>
        </div>
    );
}

export default App;