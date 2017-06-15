import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/App';
import './css/index.css';

const Root = () => {
    return(
        <Router>
            <App/>
        </Router>
    )
};

render(<Root/>, document.getElementById('root'));