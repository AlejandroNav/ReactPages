import { IconSearch } from '@tabler/icons-react'
import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import PokemonList from '../PokemonList/PokemonList'
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'

const Pokemons = () => {
  let numerOfPokemonsAPI = "https://pokeapi.co/api/v2/pokemon?limit=898"
  const INITIAL_LIMIT = 30
  const INCREASE_LIMIT = 20
  const [allPokemons, setallPokemons] = useState([])
  const [pokemonName, setpokemonName] = useState('')
  const [limit, setlimit] = useState(INITIAL_LIMIT)
  const pokemonByName = allPokemons.filter(pokemon => pokemon.name.includes(pokemonName))
  
  const targetObserver = useRef(null)
  const entry = useIntersectionObserver(targetObserver,{})
  const isVisible = !!entry?.isIntersecting

  useEffect(() => {
    axios.get(numerOfPokemonsAPI)
      .then(({ data }) => setallPokemons(data.results))
      .catch((err) => console.log(err))
  }, [])

  useEffect(() => {
   if (isVisible){
    const newLimit = limit +INCREASE_LIMIT;
    setlimit(newLimit)
   }
  }, [isVisible])
  

  const handleChange = (e) => {
    setpokemonName(e.target.value.toLowerCase());
  } 
/*  const handleSubmit = (e) => {
    e.preventDefault()
    setpokemonName(e.target.pokemonNameInput.value.toLowerCase());
  } */

  return (
    <section className='p-4 py-5'>
      <form action="">
        <div className='bg-white p-3 flex rounded-lg text-lg text-pink-600'>
          <input
            autoComplete='off'
            type="text"
            placeholder='Busca tu pokemon'
            className='outline-none flex-1'
            name='pokemonNameInput'
            onChange={handleChange} />
          <button className='bg-pink-600 text-pink-100 p-2 rounded-lg shadow-md shadow-red-400 hover:bg-red-400 transition-colors'>
            <IconSearch stroke={3} />
          </button>
        </div>
      </form>
      <PokemonList pokemons={pokemonByName.slice(0,limit)} />
      <span ref={targetObserver}></span>
    </section>
  )
}

export default Pokemons