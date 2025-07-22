import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { getPokemons } from '../services/pokemonService';
import PokemonCard from '../components/PokemonCard';
import { useTheme } from '../components/ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';
import logoPokemon from '../assets/logo-pokemon.svg';


const HomeContainer = styled.div`
    padding: 20px;
    text-align: center;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;

    @media (min-width: 768px) {
        max-width: 100%;
        margin: 0 auto;
    }
`;

const PokemonListContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;

    @media (min-width: 768px) {
        justify-content: center;
    }
`;

const LoadMoreButton = styled.button`
    background-color: #4caf50;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 20px;
    font-size: 1.5rem;
    margin-bottom: 20px;
`;

const ThemeToggleButton = styled.button`
    background-color: #333;
    color: white;
    padding: 10px; /* Ajuste o padding */
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 20px;
    font-size: 1rem;
    transition: background-color 0.3s ease;
    position: absolute;
    top: 20px;
    right: 20px;

    @media (max-width: 480px) {
        padding: 5px 5px;
        font-size: 0.1rem;
        position: top;
    }
`;

const Logo = styled.img`
    width: 100%;
    max-width: 400px;
    margin-bottom: 20px;
`;

const Home = () => {
    const [pokemons, setPokemons] = useState([]);
    const [offset, setOffset] = useState(0);
    const [loading, setLoading] = useState(false);
    const { theme, toggleTheme } = useTheme();

    const loadMore = useCallback(async () => {
        setLoading(true);
        try {
            const newPokemons = await getPokemons(10, offset);
            setPokemons(prevPokemons => {
                const existingPokemonNames = new Set(prevPokemons.map(pokemon => pokemon.name));
                const filteredNewPokemons = newPokemons.filter(pokemon => !existingPokemonNames.has(pokemon.name));
                return [...prevPokemons, ...filteredNewPokemons];
            });
            setOffset(prevOffset => prevOffset + 10);
        } catch (error) {
            console.error("Erro ao carregar mais Pokémons:", error);
        } finally {
            setLoading(false);
        }
    }, [offset]);

    useEffect(() => {
        loadMore();
    }, []);

    return (
        <HomeContainer className={`App ${theme === 'dark' ? 'dark-theme' : ''}`}>
            <Logo src={logoPokemon} alt="Logo Pokedex" />
            <ThemeToggleButton onClick={toggleTheme}>
                {theme === 'light' ? <FaMoon size={30} /> : <FaSun size={30} />}
            </ThemeToggleButton>
            <PokemonListContainer>
                {pokemons.map((pokemon) => (
                    <PokemonCard key={pokemon.name} pokemon={pokemon} />
                ))}
            </PokemonListContainer>
            {loading ? (
                <p>Carregando mais Pokémons...</p>
            ) : pokemons.length > 0 ? (
                <LoadMoreButton onClick={loadMore}>Carregar mais</LoadMoreButton>
            ) : (
                <p>Carregando Pokémons...</p>
            )}
        </HomeContainer>
    );
};

export default Home;