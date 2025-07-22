import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useTheme } from './ThemeContext';

const Card = styled.div`
    border: 1px solid var(--card-border-color);
    border-radius: 8px;
    margin: 10px;
    padding: 10px;
    width: 100%;
    max-width: 200px;
    text-align: center;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    background-color: var(--card-bg-color);
    transition: transform 0.2s ease, background-color 0.2s ease;

    &:hover {
        transform: translateY(-5px);
        background-color: rgba(var(--card-bg-color-rgb), 0.8);
    }
    @media (min-width: 768px) {
        width: 200px;
    }
`;

const Image = styled.img`
    width: 150px;
    height: 150px;
    margin-bottom: 10px;
`;

const Name = styled.p`
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 5px;
    text-transform: capitalize;
    color: var(--text-color);
`;

const PokemonCard = ({ pokemon }) => {
    const { theme } = useTheme();

    return (
        <Link to={`/pokemon/${pokemon.name}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <Card className={theme === 'dark' ? 'dark-theme' : ''}>
                <Image src={pokemon.sprites.front_default} alt={pokemon.name} />
                <Name>{pokemon.name}</Name>
            </Card>
        </Link>
    );
};

export default PokemonCard;