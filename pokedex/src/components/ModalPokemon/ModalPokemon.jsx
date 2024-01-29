import { IconX, IconXboxX, IconXxx } from '@tabler/icons-react'
import React from 'react'

const ModalPokemon = ({ showModal, onCloseModal, pokemon }) => {
    console.log(pokemon);
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
                <header>
                    <img src="" alt="" />

                </header>
                <span>Number 1</span>
                <div className='m-6'>
                    <div className='flex flex-col items-start'>
                        <p className='mb-2'>Type:</p>
                        <ul className='flex gap-3 flex-wrap justify-start'>
                            {pokemon?.types.map((type) => (
                                <li
                                    key={type}
                                    className={`w-32 p1 rounded-md px-2 text-white ${colorByType[type]}`}>{type}</li>
                            ))}
                        </ul>
                    </div>

                    <div className='flex flex-col items-start mt-4 mb-2'>
                        <p className='mb-2'>Weak to:</p>
                        <ul className='justify-start flex gap-3 flex-wrap'>
                            {getWeaknesses(pokemon?.types).map((weakness) => (
                                <li
                                    key={weakness}
                                    className={`p1 w-32 rounded-md px-2 text-white ${colorByType[weakness]}`}>
                                    {weakness}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </article>
        </section>
    )
}

export default ModalPokemon