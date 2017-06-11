import React from 'react';
import {render} from 'react-dom';
import Home from './components/Home';
import Pokemon from './components/Pokemon';
import NotFound from './components/NotFound';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './css/index.css';

const Root = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/pokemon/:pokemonId' component={Pokemon}/>
                    <Route path="*" component={NotFound}/>
                </Switch>
            </div>
        </Router>
    )
};

render(<Root/>, document.getElementById('root'));