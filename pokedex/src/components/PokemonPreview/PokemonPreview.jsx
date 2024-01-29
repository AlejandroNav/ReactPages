import axios from 'axios';
import React, { useEffect, useState } from 'react';

const PokemonPreview = ({ pokemonURL, onClick }) => {
    const [pokemon, setPokemon] = useState(null);
    const colorByType = {
        normal: 'bg-gray-500',
        fire: 'bg-red-500',
        water: 'bg-blue-600',
        grass: 'bg-green-400',
        electric: 'bg-yellow-500',
        ice: 'bg-blue-300',
        fighting: 'bg-red-800',
        poison: 'bg-purple-400',
        ground: 'bg-yellow-800',
        flying: 'bg-indigo-300',
        psychic: 'bg-pink-600',
        bug: 'bg-lime-700',
        rock: 'bg-gray-600',
        ghost: 'bg-purple-700',
        dark: 'bg-gray-800',
        steel: 'bg-gray-400',
        fairy: 'bg-pink-300',
        dragon: 'bg-indigo-700'
    };
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(pokemonURL);
                setPokemon(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [pokemonURL]);

    if (!pokemon) {
        return <p>Loading...</p>;
    }

    const capitalizedName = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);

    const weaknessesByType = {
        normal: ['fighting'],
        fire: ['water', 'rock'],
        water: ['electric', 'grass'],
        electric: ['ground'],
        grass: ['fire', 'ice', 'poison', 'flying'],
        ice: ['fire', 'fighting', 'rock'],
        fighting: ['flying', 'psychic', 'fairy'],
        poison: ['ground', 'psychic'],
        ground: ['water', 'grass', 'ice'],
        flying: ['electric', 'ice', 'rock'],
        psychic: ['bug', 'ghost', 'dark'],
        bug: ['fire', 'flying', 'rock'],
        rock: ['water', 'grass', 'fighting', 'ground', 'steel'],
        ghost: ['ghost', 'dark'],
        dark: ['fighting', 'bug', 'fairy'],
        steel: ['fire', 'fighting', 'ground'],
        fairy: ['poison', 'steel'],
        dragon: ['ice', 'dragon', 'fairy'],
        // Add more weaknesses for other types
    };
    const getWeaknesses = (types) => {
        const weaknesses = types.reduce((allWeaknesses, type) => {
            const typeWeaknesses = weaknessesByType[type] || [];
            return [...allWeaknesses, ...typeWeaknesses];
        }, []);

        // Remove duplicates if any
        return Array.from(new Set(weaknesses));
    };
    return (
        <article
            onClick={() => onClick(pokemon)}
            className='text-center  relative bg-white rounded-3xl pb-2 hover:shadow-lg border-2 border-transparent hover:border-slate-500 cursor-pointer group  '>
            <header className='h-10'>
                <img
                    src={pokemon.sprites.versions["generation-v"]['black-white'].front_default}
                    alt=""
                    className="w-28 absolute left-1/2 -translate-x-1/2 top-0 -translate-y-16 tr group-hover:scale-125 transition-transform"
                />
            </header>
            <span className='text-xs text-slate-400'>Nº {pokemon.id}</span>
            <h4>
                <p className='text-lg'>{capitalizedName}</p>
            </h4>
            <ul className='flex gap-3 justify-center'>
                {pokemon.types.map((type) => (
                    <li
                        key={type.type.name}
                        className={`p1 rounded-md px-2 text-white ${colorByType[type.type.name]}`}>{type.type.name}</li>
                ))}
            </ul>

            <ul className='flex flex-wrap m-2 bg-slate-300 rounded-md p-2'>
                {getWeaknesses(pokemon?.types.map(typeData => typeData.type.name)).map((weakness) => (
                    <li
                        key={weakness}
                        className={` w-16 rounded-md text-white capitalize  mb-2 mx-1 ${colorByType[weakness]}`}>
                        {weakness}
                    </li>
                ))}
            </ul>
        </article>
    );
}

export default PokemonPreview;