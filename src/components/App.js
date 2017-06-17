import React from 'react';
import { withRouter } from 'react-router-dom';
import Header from './Header';
import Main from './Main';
import Search from './Search';
import samplePokemons from '../data/sample-pokemons';

class App extends React.Component {
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

    /**
     * Display the pokemon details
     * @param pokemonId
     */
    pickAPokemon(pokemonId) {
        this.props.history.push(`/pokemon/${pokemonId}`);

        // Scroll to the top of the window
        window.scrollTo(0, 0);
    }

    /**
     * Search for a pokemon
     * @param pokemonName
     */
    searchPokemon(pokemonName) {
        const reg = new RegExp(`^${pokemonName}`);

        const results = this.state.pokemons.filter(pokemon => {
            return reg.test(pokemon.names[9].toLowerCase());
        });

        this.setState({
            searchResults: results,
            searchName: pokemonName
        });
    }

    render() {
        return (
            <div className="wrapper">
                <Header />
                <Search searchResults={this.state.searchResults}
                        searchName={this.state.searchName}
                        searchPokemon={this.searchPokemon.bind(this)}
                        pickAPokemon={this.pickAPokemon.bind(this)} />
                <Main />
            </div>
        )
    }
}

export default withRouter(App);