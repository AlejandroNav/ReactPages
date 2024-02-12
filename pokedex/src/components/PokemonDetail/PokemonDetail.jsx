import React from 'react'
import Evolutions from '../Evolutions/Evolutions';
const PokemonDetail = ({ pokemon }) => {
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
        dragon: 'bg-indigo-800'
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

    // 
    const getWeaknesses = (types) => {
        // Check if types is undefined or null
        if (!types) {
            return [];
        }
        const typeChart = {
            normal: { weaknesses: ['fighting'], resistances: [] },
            fire: { weaknesses: ['water', 'rock'], resistances: ['fire', 'grass', 'ice', 'bug', 'steel'] },
            water: { weaknesses: ['electric', 'grass'], resistances: ['fire', 'water', 'ice', 'steel'] },
            electric: { weaknesses: ['ground'], resistances: ['electric', 'flying', 'steel'] },
            grass: { weaknesses: ['fire', 'ice', 'poison', 'flying', 'bug'], resistances: ['water', 'electric', 'grass', 'ground'] },
            ice: { weaknesses: ['fire', 'fighting', 'rock', 'steel'], resistances: ['ice'] },
            fighting: { weaknesses: ['flying', 'psychic', 'fairy'], resistances: ['bug', 'dark', 'rock'] },
            poison: { weaknesses: ['ground', 'psychic'], resistances: ['fighting', 'poison', 'bug', 'fairy'] },
            ground: { weaknesses: ['water', 'ice', 'grass'], resistances: ['poison', 'rock', 'electric'] },
            flying: { weaknesses: ['electric', 'ice', 'rock'], resistances: ['fighting', 'bug', 'grass'] },
            psychic: { weaknesses: ['bug', 'ghost', 'dark'], resistances: ['fighting', 'psychic'] },
            bug: { weaknesses: ['fire', 'flying', 'rock'], resistances: ['fighting', 'ground', 'grass'] },
            rock: { weaknesses: ['water', 'grass', 'fighting', 'ground', 'steel'], resistances: ['normal', 'flying', 'poison', 'fire'] },
            ghost: { weaknesses: ['ghost', 'dark'], resistances: ['poison', 'bug', 'normal', 'fighting'] },
            dragon: { weaknesses: ['ice', 'dragon', 'fairy'], resistances: ['fire', 'water', 'grass', 'electric'] },
            dark: { weaknesses: ['fighting', 'bug', 'fairy'], resistances: ['ghost', 'dark'] },
            steel: { weaknesses: ['fire', 'fighting', 'ground'], resistances: ['normal', 'flying', 'rock', 'bug', 'steel', 'grass', 'psychic', 'ice', 'dragon', 'fairy'] },
            fairy: { weaknesses: ['poison', 'steel'], resistances: ['fighting', 'bug', 'dark'] },
        };
        let weaknesses = [];
        // Loop through each type of the Pokemon
        types.forEach((type) => { // Check if the type has weaknesses and resistances in the type chart
            if (typeChart[type]) {// Add weaknesses first
                weaknesses = weaknesses.concat(typeChart[type].weaknesses);
            }
        });
        weaknesses = [...new Set(weaknesses)];// Remove duplicate weaknesses
        if (types.length === 2) {// Handle dual types and adjust weaknesses based on resistances
            const [type1, type2] = types;
            // Remove resistances for both types
            const dualTypeWeaknesses1 = typeChart[type1].weaknesses.filter((weakness) => !typeChart[type2].resistances.includes(weakness));
            const dualTypeWeaknesses2 = typeChart[type2].weaknesses.filter((weakness) => !typeChart[type1].resistances.includes(weakness));
            // Combine and remove duplicate weaknesses
            weaknesses = weaknesses.filter((weakness) => !typeChart[type1].resistances.includes(weakness));
            weaknesses = [...new Set(dualTypeWeaknesses1.concat(dualTypeWeaknesses2))];
        }
        return weaknesses;
    };

    return (
        <>
            <header>
                <div className=''>
                    <img src={pokemon?.image} alt="" className='w-32 absolute left-1/2 -translate-x-1/2 top-[-17%] z-10 ' />
                </div>
            </header>
            <article className={` px-8 flex flex-col gap-2 content-start bg-white absolute w-full h-full rounded-t-3xl text-center transition-all duration-700 overflow-y-auto
           hidden-scroll}`}>

                <span className='text-slate-400 text-sm font-semibold pt-[5%]'>Number {pokemon?.id} </span>
                <h2 className='capitalize text-xl font-bold'>{pokemon?.name} </h2>
                <article className='m-0'>
                    <div className='flex flex-col items-center text-md '>
                        <ul className='flex flex-row  justify-center gap-2'>
                            {pokemon?.types.map((type) => (
                                <li
                                    key={type}
                                    className={`w-20 lg:w-24 xl:w-28 p1 rounded-md px-4 py-1 text-white capitalize ${colorByType[type]}`}>
                                    {type}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className='flex flex-col items-center'>
                        <p className='mb-1 w-full text-center'>Weakness:</p>
                        <ul className='flex flex-wrap  gap-1'>
                            {getWeaknesses(pokemon?.types).map((weakness) => (
                                <li
                                    key={weakness}
                                    className={` rounded-md px-1 text-white capitalize ${colorByType[weakness]}`}>
                                    {weakness}
                                </li>
                            ))}
                        </ul>
                    </div>
                </article>
                <div>
                    <h4 className='capitalize text-md font-bold '>Pokedex entry</h4>
                    <p className='text-slate-500 text-sm'>{pokemon?.description}</p>
                </div>
                <section className='grid grid-cols-2 rounded-xl'>
                    <div>
                        <h5 className='capitalize font-bold'>Height</h5>
                        <span className='block bg-slate-300 rounded-lg py-0.5  mx-2'>2.7 m</span>
                    </div>
                    <div>
                        <h5 className='capitalize  font-bold'>Weight</h5>
                        <span className='block bg-slate-300 rounded-lg py-0.5  mx-2'>30 kg</span>
                    </div>
                </section>
                <section>
                    <h4 className='capitalize text-lg font-bold'>Abilities</h4>
                    <div className='grid grid-cols-2 rounded-2xl'>
                        {
                            pokemon?.abilities.map((ability) => (
                                <span className=' block capitalize bg-slate-300 rounded-lg py-0.5  my-1 mx-2'>{ability}</span>
                            ))
                        }
                    </div>
                </section>
                <section>
                    <h4 className='capitalize text-lg font-bold'>Stats</h4>
                    <ul className='flex justify-center gap-1 '>
                        {
                            pokemon?.stats.map((stat) => (
                                <li className={`bg-indigo-400 p-2 min-w-12 rounded-lg ${colorByStat[stat.name]} `}>
                                    <div className='rounded-full w-8 h-4 flex items-center justify-center text-white font-bold '>
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
                    <Evolutions evolutions={pokemon?.evolutions ?? []} />
                </section>

            </article>
        </>
    )
}

export default PokemonDetail