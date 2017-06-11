import React, {Component} from 'react';
import PropTypes from 'prop-types';
import SearchResults from './SearchResults'
import samplePokemons from '../data/sample-pokemons';
import '../css/App.css';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pokemons: {},
            searchResults: []
        };
    }

    componentDidMount() {
        // Load the sample file
        this.setState({
            pokemons: samplePokemons
        });
    }

    searchPokemon(event) {
        event.preventDefault();

        // first grab the text from the box
        const pokemonName = this.pokemonInput.value;

        console.log(`Searching for ${pokemonName}`);

        const results = this.state.pokemons.filter(pokemon => {
            return pokemon.names[9].toLowerCase().indexOf(pokemonName) !== -1;
        });

        this.setState({
            searchResults: results
        });
    }

    /**
     * Display the pokemon page
     * @param pokemonId
     */
    goToPokemon(pokemonId) {
        this.props.history.push(`/pokemon/${pokemonId}`);
    }

    render() {
        return (
            <form action="" className="pokemon-selector" onSubmit={e => this.searchPokemon(e)}>
                <h1>Please Enter A Pokemon Name</h1>

                <input type="text" required placeholder="Pokemon Name" ref={(input) => {this.pokemonInput = input}} />
                <button type="submit">Search Pokemon</button>

                <SearchResults results={this.state.searchResults} goToPokemon={this.goToPokemon.bind(this)} />
            </form>
        )
    }
}

App.propTypes = {
    history: PropTypes.object.isRequired
};

export default App;
