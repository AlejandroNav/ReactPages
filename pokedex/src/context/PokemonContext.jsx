import { createContext,useState } from "react";

const PokemonContext = createContext();

const PokemonProvider = ({children}) => {
    const [showDetailPokemon, setshowDetailPokemon] = useState(false)
    const showPokemonById = () =>{
        setshowDetailPokemon(true)
    }
    const closePokemonDetail = () =>{
        setshowDetailPokemon(false)
    }
    return (
        <PokemonContext.Provider value={{showDetailPokemon,showPokemonById,closePokemonDetail}}>
            {children}
        </PokemonContext.Provider>
    )
}

export{
    PokemonContext,PokemonProvider
}