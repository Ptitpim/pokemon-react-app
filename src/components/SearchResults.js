import React from 'react';
import PropTypes from 'prop-types';
import PokemonResult from './PokemonResult';

class SearchResults extends React.Component {
    render() {
        return (
            <ul className="search-results">
                {
                    this.props.results.map(pokemon => (
                        <PokemonResult key={`pokemon${pokemon.id}`} details={pokemon} goToPokemon={this.props.goToPokemon} />
                    ))
                }

                {((this.props.results.length === 0) && (this.props.searchName !== '')) ? <p>No result</p> : null}
            </ul>
        )
    }
}

SearchResults.propTypes = {
    results: PropTypes.array.isRequired,
    searchName: PropTypes.string,
    goToPokemon: PropTypes.func.isRequired
};

export default SearchResults;