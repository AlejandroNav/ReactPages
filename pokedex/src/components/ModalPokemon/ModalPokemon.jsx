import { IconX, IconXboxX, IconXxx } from '@tabler/icons-react'
import React from 'react'

const ModalPokemon = ({ showModal, onCloseModal, pokemon }) => {
    console.log(pokemon);
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

    const colorByStat = {
        HP: '[&>div]: bg-red-600',
        ATK: '[&>div]: bg-orange-500',
        DEF: '[&>div]: bg-lime-600',
        SpA: '[&>div]: bg-teal-600',
        SpD: '[&>div]: bg-indigo-500',
        SPD: '[&>div]: bg-pink-400',
        TOT: '[&>div]: bg-zinc-500',

    }
    const getWeaknesses = (types) => {
        // Check if types is undefined or null
        if (!types) {
            return [];
        }

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
            <article className={`px-8 flex flex-col gap-2 content-start bg-white h-[80%] absolute w-full  rounded-t-3xl text-center transition-all duration-700
            ${showModal ? 'bottom-0' : '-bottom-full'
                }`}>
                <header>
                    <img src={pokemon?.image} alt="" />
                </header>
                <span className='text-slate-400 text-sm font-semibold'>Number {pokemon?.id} </span>
                <h2 className='capitalize text-2xl font-bold'>{pokemon?.name} </h2>
                <article className='m-6 w-3/4'>
                    <div className='flex items-center text-lg'>
                        <p className='mb-1 w-20'>Type:</p>
                        <ul className='flex gap-3 flex-wrap justify-start'>
                            {pokemon?.types.map((type) => (
                                <li
                                    key={type}
                                    className={`w-40 p1 rounded-md px-8 py-1 text-white capitalize ${colorByType[type]}`}>{type}</li>
                            ))}
                        </ul>
                    </div>
                    <div className='flex items-center mt-4 mb-1'>
                        <p className='mb-1 w-20'>Weakness:</p>
                        <ul className='justify-start flex gap-3 flex-wrap'>
                            {getWeaknesses(pokemon?.types).map((weakness) => (
                                <li
                                    key={weakness}
                                    className={`p1 w-36 rounded-md px-2 text-white capitalize ${colorByType[weakness]}`}>
                                    {weakness}
                                </li>
                            ))}
                        </ul>
                    </div>
                </article>
                <div>
                    <h4 className='capitalize text-lg font-bold '>Pokedex entry</h4>
                    <p className='text-slate-500'>{pokemon?.description}</p>
                </div>
                <section className='grid grid-cols-2 rounded-2xl'>
                    <div>
                        <h5 className='capitalize font-bold'>Height</h5>
                        <span className='block bg-slate-300 rounded-lg py-1  mx-2'>2.7 m</span>
                    </div>
                    <div>
                        <h5 className='capitalize  font-bold'>Weight</h5>
                        <span className='block bg-slate-300 rounded-lg py-1 mx-2'>30 kg</span>
                    </div>
                </section>
                <section>
                    <h4 className='capitalize text-lg font-bold'>Abilities</h4>
                    <div className='grid grid-cols-2 rounded-2xl'>
                        {
                            pokemon?.abilities.map((ability) => (
                                <span className=' block capitalize bg-slate-300 rounded-lg py-1 my-1 mx-2'>{ability}</span>
                            ))
                        }
                    </div>
                </section>
                <section>
                    <h4 className='capitalize text-lg font-bold'>Stats</h4>
                    <ul className='flex justify-center gap-4 '>
                        {
                            pokemon?.stats.map((stat) => (
                                <li className={`bg-indigo-400 p-2 min-w-12 rounded-lg ${colorByStat[stat.name]}`}>
                                    <div className='rounded-full w-8 h-8 flex items-center justify-center text-fuchsia-50'>
                                        <span className='text-sm'>
                                            {stat.name}
                                        </span>
                                    </div>
                                    <span className='font-bold'>
                                        {stat.base_stat}
                                    </span>
                                </li>
                            ))
                        }
                    </ul>
                </section>
                <section>
                    <h4 className='capitalize text-lg font-bold'>Evolutions</h4>
                </section>
            </article>
        </section>
    )
}

export default ModalPokemon