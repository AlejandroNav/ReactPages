import axios from 'axios';
import React, { useEffect, useState } from 'react';

const PokemonPreview = ({ pokemonURL,onClick }) => {
    const [pokemon, setPokemon] = useState(null);
    const colorByType = {
        normal: 'bg-gray-500',
        fire: 'bg-red-500',
        water: 'bg-blue-500',
        grass: 'bg-green-400',
        electric: 'bg-yellow-500',
        ice: 'bg-blue-200',
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

    return (
        <article
        onClick={onClick}
            className='text-center  relative bg-white rounded-3xl pb-2 
            hover:shadow-lg border-2 border-transparent hover:border-slate-500
            cursor-pointer group  '>
            <header className='h-10'>
                <img
                    src={pokemon.sprites.versions["generation-v"]['black-white'].front_default}
                    alt=""
                    className="w-28 absolute left-1/2 -translate-x-1/2 top-0 
                    -translate-y-16 tr group-hover:scale-125 transition-transform"
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
            <ul className='flex gap-3 justify-center mt-3'>
                Weak:{pokemon.types.map((type) => (
                    <li key={type.type.name}
                    className={` p1 rounded-md px-2 text-white ${colorByType[type.type.name]}`}>{type.type.name}</li>
                ))}
            </ul>
        </article>
    );
}

export default PokemonPreview;