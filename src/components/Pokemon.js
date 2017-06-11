import React from 'react';

class Pokemon extends React.Component {
    render() {
        const {pokemonId} = this.props.match.params;

        return (
            <h2>Pokemon: {pokemonId}</h2>
        )
    }
}

export default Pokemon;