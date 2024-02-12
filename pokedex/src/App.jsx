import Pokemons from "./components/Pokemons/Pokemons";
import Asides from "./components/Asides/Asides";
import ModalPokemon from "./components/ModalPokemon/ModalPokemon";
import { PokemonContext } from "./context/PokemonContext";
import { useContext } from "react";
import usePokemonContext from "./hooks/usePokemonContext";

function App() {
  const { showDetailPokemon, closePokemonDetail,pokemonDetail } = usePokemonContext()

  return (
    <section className=" h-screen  overflow-y-auto">
      <main className="font-outfit min-h-svh max-w-[1500px] mx-auto bg-slate-300 grid grid-cols-1 lg:grid-cols-[1fr_350px]">
        <Pokemons />
        <Asides pokemon={pokemonDetail}/>
        <ModalPokemon 
        showModal={showDetailPokemon} 
        onCloseModal={closePokemonDetail}
        pokemon={pokemonDetail}/>
      </main>
    </section>
  )
}

export default App
