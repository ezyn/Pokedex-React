import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useTheme } from './ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';

const typeColors = {
    fire: '#f08030',
    water: '#6890f0',
    grass: '#78c850',
    electric: '#f8d030',
    ice: '#98d8d8',
    fighting: '#c03028',
    poison: '#a040a0',
    ground: '#e0c068',
    flying: '#a890f0',
    psychic: '#f85888',
    bug: '#a8b820',
    rock: '#b8a038',
    ghost: '#705898',
    dragon: '#7038f8',
    steel: '#b8b8d0',
    dark: '#705848',
    fairy: '#f0b8fa',
    normal: '#a8a878',
};

const DetailContainer = styled.div`
    padding: 20px;
    text-align: center;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background-color: ${props => props.theme === 'dark' ? '#333' : '#fff'};
    color: ${props => props.theme === 'dark' ? '#fff' : '#333'};
    max-width: 100%;
    margin: 0 auto;
`;

const PokemonImage = styled.img`
    width: 200px;
    height: 200px;
    margin-bottom: 20px;
`;

const Name = styled.h1`
    text-transform: capitalize;
    margin-bottom: 10px;
    font-size: 2.5rem;
    font-weight: bold;
`;

const SectionTitle = styled.h2`
    margin-top: 20px;
    margin-bottom: 10px;
    border-bottom: 1px solid #eee;
    padding-bottom: 5px;
    font-size: 2rem;
`;


const List = styled.ul`
    list-style: none;
    font-size: 1.5rem;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
`;

const ListItem = styled.li`
    margin-bottom: 5px;
    text-transform: capitalize;
    margin-right: 10px;
    background-color: ${props => typeColors[props.type] || '#ccc'};
    padding: 5px 10px;
    border-radius: 5px;
    color: black;
`;

const BackButton = styled.button`
    background-color: #4caf50;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 20px;
    font-size: 1.5rem;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #3e8e41;
    }
`;

const ThemeToggleButton = styled.button`
    background-color: #333;
    color: white;
    padding: 10px 15px;
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
        padding: 5px 10px;
        font-size: 0.8rem;
    }
`;

const PokemonDetail = ({ pokemon }) => {
    const navigate = useNavigate();
    const { theme, toggleTheme } = useTheme();
    if (!pokemon) {
        return <p>Carregando...</p>;
    }

    const handleGoBack = () => {
        navigate('/');
    };

    return (
        <DetailContainer theme={theme}>
            <ThemeToggleButton onClick={toggleTheme}>
                {theme === 'light' ? <FaMoon size={20} /> : <FaSun size={20} />}
            </ThemeToggleButton>
            <Name>{pokemon.name}</Name>
            <PokemonImage src={pokemon.sprites.front_default} alt={pokemon.name} />

            <SectionTitle>Tipo</SectionTitle>
            <List>
                {pokemon.types.map((typeData) => (
                    <ListItem key={typeData.type.name} type={typeData.type.name}>
                        {typeData.type.name}
                    </ListItem>
                ))}
            </List>

            <SectionTitle>Habilidades</SectionTitle>
            <List>
                {pokemon.abilities.map((abilityData) => (
                    <ListItem key={abilityData.ability.name}>
                        {abilityData.ability.name}
                    </ListItem>
                ))}
            </List>

            <SectionTitle>Movimentos</SectionTitle>
            <List>
                {pokemon.moves.map((moveData) => (
                    <ListItem key={moveData.move.name}>
                        {moveData.move.name}
                    </ListItem>
                ))}
            </List>

            <BackButton onClick={handleGoBack}>Voltar</BackButton>
        </DetailContainer>
    );
};

export default PokemonDetail;