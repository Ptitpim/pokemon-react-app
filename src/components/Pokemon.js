import React from 'react';

class Pokemon extends React.Component {
    render() {
        const {pokemonId: id} = this.props.match.params;
        const spriteUrl = `/img/sprites/pokemon/${id}.png`;

        return (
            <div>
                <h2>Pokemon: {id}</h2>
                <img src={spriteUrl} className="pokemon-sprite" alt='' />
            </div>
        )
    }
}

export default Pokemon;