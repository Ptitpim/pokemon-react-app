import React from 'react';
import PropTypes from 'prop-types';

class PokemonResult extends React.Component {
    render() {
        const {id, names} = this.props.details;
        const spriteUrl = `/img/sprites/pokemon/${id}.png`;

        return(
            <li className="search-item" onClick={() => this.props.goToPokemon(id)}>
                <img src={spriteUrl} className="pokemon-sprite" alt={names[9]} title={names[9]} />
                {id} - {names[9]} ({names[5]})
            </li>
        )
    }
}

PokemonResult.propTypes = {
    goToPokemon: PropTypes.func.isRequired
};

export default PokemonResult;