import React from 'react';
import axios from 'axios';
import PokemonStats from './PokemonStats';
import PokemonTypes from './PokemonTypes';

class Pokemon extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isFetching: false,
            isEncounterError: false,
            pokemonId: 0,
            details: {},
            typesInfos: []
        };
    }

    componentDidMount() {
        const { pokemonId: id } = this.props.match.params;

        this.getPokemonDetails(id);
    }

    /**
     * Get the pokemon details from the api
     * @param id the pokemon ID
     */
    getPokemonDetails(id) {
        const url = `http://pokeapi.co/api/v2/pokemon/${id}/`;

        this.setState({isFetching: true});

        axios.get(url)
            .then(response => this.updateInformations(response.data));
            //.catch(error => this.displayError(error));
    }

    componentWillReceiveProps(nextProps) {
        const pokemonId = parseInt(nextProps.match.params.pokemonId, 10);

        if ((this.state.pokemonId > 0) && (this.state.pokemonId !== pokemonId)) {
            this.getPokemonDetails(pokemonId);
        }
    }

    /**
     * Updating the state
     * @param data
     */
    updateInformations(data) {
        this.setState({
            isFetching: false,
            details: data,
            pokemonId: data.id
        });
    }

    /**
     * Display an error
     * @param error
     */
    displayError(error) {
        this.setState({
            isFetching: false,
            isEncounterError: true
        });
    }

    render() {
        const {id = 0, name, stats, types} = this.state.details;
        const spriteUrl = `/img/sprites/pokemon/${id}.png`;

        return (
            <div className="pokemon-details">
                {this.state.isFetching ? <p>Loading</p> : null}
                {this.state.isEncounterError ? <p>Oops we've had trouble getting the pokemon details</p> : null}

                {(!this.state.isFetching && !this.state.isEncounterError) ? (
                    <div className="pokemon-infos">
                        <h2>Pokemon: {name}</h2>

                        <img src={spriteUrl} className="pokemon-sprite" alt='' />

                    {stats ? <PokemonStats stats={stats} /> : null}
                    {stats && types ? <PokemonTypes stats={stats} types={types} /> : null}
                </div>
                    ) : null}
            </div>
        )
    }
}

export default Pokemon;