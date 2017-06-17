import React, {Component} from 'react';
import PropTypes from 'prop-types';
import SearchResults from './SearchResults';

class Search extends Component {
    static propTypes = {
        searchResults: PropTypes.array.isRequired,
        searchName: PropTypes.string,
        searchPokemon: PropTypes.func.isRequired,
        pickAPokemon: PropTypes.func.isRequired
    };

    searchPokemon(event) {
        event.preventDefault();

        // first grab the text from the box
        const pokemonName = this.pokemonInput.value;

        this.props.searchPokemon(pokemonName);
    }

    render() {
        return (
            <aside className="aside">
                <h2>Please Enter A Pokemon Name</h2>

                <form className="search-form" onSubmit={e => this.searchPokemon(e)}>
                    <input className="search-field" type="text" required placeholder="Pokemon Name" ref={(input) => {this.pokemonInput = input}} />
                    <button className="search-button" type="submit">Search Pokemon</button>
                </form>

                <SearchResults results={this.props.searchResults}
                               searchName={this.props.searchName}
                               pickAPokemon={this.props.pickAPokemon} />
            </aside>
        )
    }
}

export default Search;
