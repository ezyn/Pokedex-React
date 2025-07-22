import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getPokemonDetails } from '../services/pokemonService';
import PokemonDetail from '../components/PokemonDetail';

const Pokemon = () => {
    const { name } = useParams();
    const [pokemon, setPokemon] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPokemon = async () => {
            try {
                const data = await getPokemonDetails(name);
                setPokemon(data);
                setError(null);
            } catch (error) {
                console.error("Erro ao buscar detalhes do Pokémon:", error);
                setError("Ocorreu um erro ao carregar os detalhes do Pokémon.");
            } finally {
                setLoading(false);
            }
        };

        fetchPokemon();
    }, [name]);

    if (loading) {
        return <p>Carregando detalhes...</p>;
    }

    if (error) {
        return <p>Erro: {error}</p>;
    }

    return (
        <div>
            <PokemonDetail pokemon={pokemon} />
        </div>
    );
};

export default Pokemon;