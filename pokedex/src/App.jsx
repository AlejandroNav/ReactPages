import Pokemons from "./components/Pokemons/Pokemons";
import Asides from "./components/Asides/Asides";

function App() {

  return (
    <section className=" h-screen  overflow-y-auto">
      <main className="font-outfit max-w-[1500px] mx-auto
  bg-slate-300 grid grid-cols-1 lg:grid-cols-[1fr_350px]">
        <Pokemons />
        <Asides />
      </main>
    </section>
  )
}

export default App
