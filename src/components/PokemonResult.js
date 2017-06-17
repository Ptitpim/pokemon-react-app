import React from 'react';
import PropTypes from 'prop-types';

class PokemonResult extends React.Component {
    static propTypes = {
        pickAPokemon: PropTypes.func.isRequired
    };

    render() {
        const {id, name} = this.props.details;
        const spriteUrl = `/img/sprites/pokemon/${id}.png`;

        return(
            <li className="search-item" onClick={() => this.props.pickAPokemon(id)}>
                <img src={spriteUrl} className="pokemon-sprite" alt={name} title={name} />
                {id} - {name}
            </li>
        )
    }
}

export default PokemonResult;