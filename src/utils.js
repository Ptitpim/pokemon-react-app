/**
 * Get the type ID from the type name
 * @param sampleTypes
 * @param name
 * @return {Number | null}
 */
export function getTypeId(sampleTypes = [], name = '') {
    const matched = sampleTypes.filter(type => {
        return type.name === name;
    });

    return matched.length ? matched[0].id : null;
}

export function getPokemonsFromType(samplePokemonTypes = [], type = 0) {
    const matched = samplePokemonTypes.filter(entry => {
        return entry.type === type;
    });

    const results = matched.map(entry => {
        return entry.id;
    });

    return results;
}