import React from 'react';
import { withRouter } from 'react-router-dom';
import Header from './Header';
import Main from './Main';
import Search from './Search';
import samplePokemons from '../data/sample-pokemons';
import sampleTypes from '../data/sample-types';
import samplePokemonsTypes from '../data/sample-pokemons-types';
import samplePokemonsStats from '../data/sample-pokemons-stats';
import sampleStats from '../data/sample-stats';
import { getPokemonsFromType } from '../utils';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            pokemons: {},
            searchResults: [],
            searchName: '',
            groupedStats: {}
        };
    }

    componentDidMount() {
        // Load the sample file
        this.setState({
            pokemons: samplePokemons
        });

        this.getGroupedStats();
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
            return reg.test(pokemon.name.toLowerCase());
        });

        this.setState({
            searchResults: results,
            searchName: pokemonName
        });
    }

    getGroupedStats() {
        let typesInfos = [];
        let groupedStats = {};

        sampleTypes.forEach(type => {
            const typeId = type.id;

            const pokemonsWithSameType = getPokemonsFromType(samplePokemonsTypes, typeId);

            typesInfos.push({
                name: type.name,
                id: typeId,
                pokemonsWithSameType
            });
        });

        // Parse each type
        typesInfos.forEach(type => {
            if (type.pokemonsWithSameType.length > 0) {
                let stats = {};

                // Parse each stat
                sampleStats.forEach(stat => {
                    const results = samplePokemonsStats.filter(entry => {
                        return (stat.id === entry.statId) && type.pokemonsWithSameType.includes(entry.pokemonId);
                    }).map(entry => {
                        return entry.baseStat;
                    });

                    let average = 0;

                    if (results.length) {
                        // Calculates the average of this stat
                        average = results.reduce((a, b) => {
                                return a + b;
                            }) / results.length;
                    }

                    const min = Math.min(...results);
                    const max = Math.max(...results);

                    stats[stat.name] = {min, max, average};
                });

                groupedStats[type.name] = stats;
            } else {
                groupedStats[type.name] = {};
            }
        });

        console.log(groupedStats);

        this.setState({
            groupedStats
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
                <Main groupedStats={this.state.groupedStats} />
            </div>
        )
    }
}

export default withRouter(App);