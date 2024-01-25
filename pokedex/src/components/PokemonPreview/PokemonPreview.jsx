import axios from 'axios'
import React, { useEffect,useState } from 'react'



const PokemonPreview = ({ pokemonURL }) => {
    const [pokemon, setpokemon] = useState(null)
    useEffect(() => {
        axios.get(pokemonURL)
            .then(({ data }) => setpokemon(data))
            .catch((err) => console.log(err))
    }, [pokemonURL])


    return (
        <article>
        {pokemon && (
            <header>
                <img src={pokemon.sprites.versions["generation-v"]['black-white'].front_default} alt="" className=" w-32 "  />
                <img src={pokemon.sprites.versions["generation-v"]['black-white']['animated'].front_default} alt="" className=" w-32 "  />
            </header>
        )}
        <span>Numero</span>
        <h4>
            {pokemon !== null ? (
                <p>{pokemon.name}</p>
            ) : (
                <p>Loading...</p>
            )}
        </h4>
        <ul>
            <li>Tipo 1</li>
            <li>tipo 2</li>
        </ul>
    </article>
    )
}

export default PokemonPreview