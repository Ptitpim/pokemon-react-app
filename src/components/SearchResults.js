import React from 'react';
import PropTypes from 'prop-types';
import PokemonResult from './PokemonResult';

class SearchResults extends React.Component {
    static propTypes = {
        results: PropTypes.array.isRequired,
        searchName: PropTypes.string,
        pickAPokemon: PropTypes.func.isRequired
    };

    render() {
        return (
            <ul className="search-results">
                {
                    this.props.results.map(pokemon => (
                        <PokemonResult key={`pokemon${pokemon.id}`} details={pokemon} pickAPokemon={this.props.pickAPokemon} />
                    ))
                }

                {((this.props.results.length === 0) && (this.props.searchName !== '')) ? <p>No result</p> : null}
            </ul>
        )
    }
}

export default SearchResults;