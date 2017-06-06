import React from 'react';
import PokemonResult from './PokemonResult';

class SearchResults extends React.Component {
    render() {
        return (
            <ul className="list-of-pokemons">
                {
                    this.props.results.map(pokemon => <PokemonResult key={`pokemon${pokemon.id}`} details={pokemon} />)
                }
            </ul>
        )
    }
}

export default SearchResults;