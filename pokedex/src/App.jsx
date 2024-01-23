import  Pokemons  from "./components/Pokemons/Pokemons";
import  Aside  from "./components/Aside/Aside";

function App() {

  return (
    <section>
      <main>
        <h1 className="text-2xl">Pokedex</h1>
        <Pokemons />
        <Aside />


      </main>
    </section>
  )
}

export default App
