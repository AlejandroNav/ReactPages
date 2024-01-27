import { IconX, IconXboxX, IconXxx } from '@tabler/icons-react'
import React from 'react'

const ModalPokemon = () => {
    return (
        <section className='fixed top-0 left-0 right-0 h-screen bg-orange-400'>
            <button className='absolute top-4 right-4 bg-white rounded-xl hover:opacity-80 transition-opacity'>
                <IconX size={40} stroke={2}/>
            </button>
            <article className= ' text-center bg-white h-[80%] absolute w-full bottom-0 rounded-t-3xl'>
                Amigo
            </article>
        </section>
    )
}

export default ModalPokemon