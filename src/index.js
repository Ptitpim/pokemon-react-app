import React from 'react';
import {render} from 'react-dom';
import App from './components/App';
import Pokemon from './components/Pokemon';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './css/index.css';

const Root = () => {
    return (
        <Router>
            <div>
                <Route exactly path='/' component={App}/>
                <Route path='/pokemon/:pokemonId' component={Pokemon}/>
            </div>
        </Router>
    )
};

render(<Root/>, document.getElementById('root'));