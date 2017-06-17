import React from 'react';

export default function PokemonTypes(props) {
    return (
        <div className="pokemon-types">
            <h3>Types</h3>

            <ul className="types-list">
                {props.types.map(type => (
                    <li key={`type-${type.type.name}`}>
                        {type.type.name}
                    </li>
                ))}
            </ul>
        </div>
    );
}