import  axios  from 'axios'
import React, { useEffect } from 'react'

const Pokemons = () => {

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=1024")
      .then(({data})=> console.log(data))
      .catch((err)=> console.log(err))
  }, [])



  return (
    <section>Hola</section>
  )
}

export default Pokemons