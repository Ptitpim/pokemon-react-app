import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    render() {
        return (
            <header className="header">
                <h1 className="header-title">
                    <Link to="/">Pokemon React App</Link>
                </h1>
            </header>
        )
    }
}

export default Header;