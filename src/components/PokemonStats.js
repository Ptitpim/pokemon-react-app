import React from 'react';

export default function PokemonStats(props) {
    let stats = props.stats.reverse();

    function getWidth(width) {
        return {
            width: width
        }
    }

    return (
        <div className="pokemon-stats">
            <h3>Stats</h3>

            <ul className="stats-list">
                {stats.map(stat => (
                    <li className={`stat-${stat.stat.name}`} key={`stat-${stat.stat.name}`}>
                        <span className="stat-label">{stat.stat.name}</span>
                        <span className="stat-value">{stat.base_stat}</span>
                        <span className="stat-progress-bar" style={getWidth(stat.base_stat)} />
                    </li>
                ))}
            </ul>
        </div>
    );
}