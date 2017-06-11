import React from 'react';
import PropTypes from 'prop-types';

class PokemonResult extends React.Component {
    render() {
        const {id, names} = this.props.details;

        return(
            <li onClick={() => this.props.goToPokemon(id)}>{id} - {names[9]} ({names[5]})</li>
        )
    }
}

PokemonResult.propTypes = {
    goToPokemon: PropTypes.func.isRequired
};

export default PokemonResult;