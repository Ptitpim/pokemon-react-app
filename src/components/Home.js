import React, {Component} from 'react';
import PropTypes from 'prop-types';
import SearchResults from './SearchResults'
import samplePokemons from '../data/sample-pokemons';

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pokemons: {},
            searchResults: [],
            searchName: ''
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
            searchResults: results,
            searchName: pokemonName
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

                <SearchResults results={this.state.searchResults} searchName={this.state.searchName} goToPokemon={this.goToPokemon.bind(this)} />
            </form>
        )
    }
}

Home.propTypes = {
    history: PropTypes.object.isRequired
};

export default Home;
