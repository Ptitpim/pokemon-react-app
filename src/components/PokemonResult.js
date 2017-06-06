import React from 'react';

class PokemonResult extends React.Component {
    render() {
        const {id, names} = this.props.details;

        return(
            <li>{id} - {names[9]} ({names[5]})</li>
        )
    }
}

export default PokemonResult;