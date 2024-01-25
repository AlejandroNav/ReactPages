import axios from 'axios';
import React, { useEffect, useState } from 'react';

const PokemonPreview = ({ pokemonURL }) => {
    const [pokemon, setPokemon] = useState(null);

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
        className='text-center relative bg-amber-100 rounded-3xl pb-2 shadow-lg'>
            <header className='h-10'>
                <img
                    src={pokemon.sprites.versions["generation-v"]['black-white'].front_default}
                    alt=""
                    className="w-24 absolute left-1/2 -translate-x-1/2 top-0 -translate-y-1/2"
                />
            </header>
            <span className='text-xs text-slate-400'>Nº {pokemon.id}</span>
            <h4>
                <p className='text-lg'>{capitalizedName}</p>
            </h4>
            <ul className='flex gap-3 justify-center'>
                {pokemon.types.map((type) => (
                    <li key={type.type.name}>{type.type.name}</li>
                ))}
            </ul>
            <ul className='flex gap-3 justify-center'>
                Weak to :{pokemon.types.map((type) => (
                    <li key={type.type.name}>{type.type.name}</li>
                ))}
            </ul>
        </article>
    );
}

export default PokemonPreview;