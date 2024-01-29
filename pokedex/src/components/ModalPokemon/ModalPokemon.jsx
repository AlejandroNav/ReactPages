import { IconX, IconXboxX, IconXxx } from '@tabler/icons-react'
import React from 'react'

const ModalPokemon = ({ showModal, onCloseModal }) => {
    return (
        <section className={`fixed top-0 left-0 right-0 h-screen bg-orange-400 transition-all duration-500
            ${showModal ? "visible opacity-100" : "invisible opacity-0"
            }`}>
            <button
                onClick={onCloseModal}
                className='absolute top-4 right-4 bg-white rounded-xl hover:opacity-80 transition-opacity'>
                <IconX size={40} stroke={2} />
            </button>
            <article className={`bg-white h-[80%] absolute w-full  rounded-t-3xl text-center transition-all duration-700
            ${showModal ? 'bottom-0' : '-bottom-full'
                }`}>
                Amigo
            </article>
        </section>
    )
}

export default ModalPokemon