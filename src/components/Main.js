import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Pokemon from './Pokemon';
import NotFound from './NotFound';

class Main extends React.Component {
    render() {
        return (
            <main className="main">
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/pokemon/:pokemonId' component={Pokemon}/>
                    <Route path="*" component={NotFound}/>
                </Switch>
            </main>
        )
    }
}

export default Main;