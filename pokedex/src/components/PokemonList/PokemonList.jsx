import React from 'react'
import PokemonPreview from '../PokemonPreview/PokemonPreview'

const PokemonList = ({ pokemons }) => {
    return (
<section className='pt-12 grid grid-cols-1 gap-4 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5'>            {
                pokemons.map(pokemon => (
                    <PokemonPreview key={pokemon.url} pokemonURL={pokemon.url}/>
                ))
            }
        </section>
    )
}

export default PokemonList