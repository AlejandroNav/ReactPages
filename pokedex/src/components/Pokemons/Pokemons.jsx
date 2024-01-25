import { IconSearch } from '@tabler/icons-react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import PokemonList from '../PokemonList/PokemonList'

const Pokemons = () => {
  const [allPokemons, setallPokemons] = useState([])
  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=1025")
      .then(({ data }) => setallPokemons(data.results))
      .catch((err) => console.log(err))
  }, [])



  return (
    <section className='p-4 py-5'>
      <form action="">
        <div className='bg-white p-3 flex rounded-lg text-lg text-pink-600'>
          <input
            type="text"
            placeholder='Busca tu pokemon'
            className='outline-none flex-1' />
          <button className='bg-pink-600 text-pink-100 p-2 rounded-lg shadow-md shadow-red-400 hover:bg-red-400 transition-colors'>
            <IconSearch stroke={3}/>
          </button>
        </div>
      </form>
      <PokemonList pokemons={allPokemons}/>
    </section>
  )
}

export default Pokemons