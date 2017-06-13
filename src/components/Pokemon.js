import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import PokemonStats from './PokemonStats';
import PokemonTypes from './PokemonTypes';

class Pokemon extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isFetching: false,
            isEncounterError: false,
            details: {}
        };
    }

    componentDidMount() {
        const {pokemonId: id} = this.props.match.params;
        const url = `http://pokeapi.co/api/v2/pokemon/${id}`;

        this.setState({isFetching: true});

        axios.get(url)
            .then(response => this.updateInformations(response.data))
            .catch(error => this.displayError(error));
    }

    updateInformations(data) {
        this.setState({
            isFetching: false,
            details: data
        });
    }

    displayError(error) {
        this.setState({
            isFetching: false,
            isEncounterError: true
        });

        console.log(error);
    }

    render() {
        const {id = 0, name, stats, types} = this.state.details;
        const spriteUrl = `/img/sprites/pokemon/${id}.png`;

        return (
            <div>
                <Link to="/">Home</Link>

                <h2>Pokemon: {name}</h2>

                {this.state.isFetching ? <p>Loading</p> : null}

                <img src={spriteUrl} className="pokemon-sprite" alt='' />

                {stats ? <PokemonStats stats={stats} /> : null}
                {stats ? <PokemonTypes types={types} /> : null}
            </div>
        )
    }
}

export default Pokemon;