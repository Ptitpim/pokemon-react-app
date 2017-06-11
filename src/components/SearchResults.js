import React from 'react';
import PropTypes from 'prop-types';
import PokemonResult from './PokemonResult';

class SearchResults extends React.Component {
    render() {
        return (
            <ul className="list-of-pokemons">
                {
                    this.props.results.map(pokemon => (
                        <PokemonResult key={`pokemon${pokemon.id}`} details={pokemon} goToPokemon={this.props.goToPokemon} />
                    ))
                }
            </ul>
        )
    }
}

SearchResults.propTypes = {
    results: PropTypes.array.isRequired,
    goToPokemon: PropTypes.func.isRequired
};

export default SearchResults;