import React from 'react'
import PokemonDetail from '../PokemonDetail/PokemonDetail'

const Asides = ({ pokemon }) => {
    return (
        <div className='hidden lg:block sticky top-0 h-screen'>
            <article className='absolute  w-full h-[85%] bottom-0 rounded-tr-2xl rounded-tl-2xl text-center'>
                <PokemonDetail pokemon={pokemon} />
            </article>
        </div>
    )
}

export default Asides