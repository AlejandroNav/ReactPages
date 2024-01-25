import Pokemons from "./components/Pokemons/Pokemons";
import Asides from "./components/Asides/Asides";

function App() {

  return (
    <section>
      <main className="font-outfit max-w-[1500px] mx-auto h-screen
  bg-slate-500 grid grid-cols-1 lg:grid-cols-[1fr_350px] overflow-y-auto">
        <Pokemons />
        <Asides />
      </main>
    </section>
  )
}

export default App
