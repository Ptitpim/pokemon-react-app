import React from 'react';

export default function PokemonStats(props) {
    return (
        <div className="pokemon-stats">
            <h3>Stats</h3>

            <ul className="stats-list">
                {props.stats.map(stat => (
                    <li key={`stat-${stat.stat.name}`}>{stat.stat.name}: {stat.base_stat}</li>
                ))}
            </ul>
        </div>
    );
}