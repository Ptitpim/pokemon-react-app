import React from 'react';

export default function PokemonStats(props) {
    let stats = props.stats.reverse();

    return (
        <div className="pokemon-stats">
            <h3>Stats</h3>

            <ul className="stats-list">
                {stats.map(stat => (
                    <li className={`stat-${stat.stat.name}`} key={`stat-${stat.stat.name}`}>{stat.stat.name}: {stat.base_stat}</li>
                ))}
            </ul>
        </div>
    );
}