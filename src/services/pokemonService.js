import axios from 'axios';

const API_URL = 'https://pokeapi.co/api/v2/pokemon';

export const getPokemons = async (limit = 10, offset = 0) => {
    try {
        const response = await axios.get(`${API_URL}?limit=${limit}&offset=${offset}`);
        const pokemonData = await Promise.all(
            response.data.results.map(async (pokemon) => {
                const pokemonResponse = await axios.get(pokemon.url);
                return pokemonResponse.data;
            })
        );
        return pokemonData;
    } catch (error) {
        console.error('Erro ao buscar os Pokémons:', error);
        throw error;
    }
};

export const getPokemonDetails = async (name) => {
    try {
        const response = await axios.get(`${API_URL}/${name}`);
        return response.data;
    } catch (error) {
        console.error('Erro ao buscar os detalhes do Pokémon:', error);
    }
};