import { createContext, useState } from "react";
import {
    formatStats,
    formatTypes,
    formatAbilities,
    getPokemonDescription,
    getEvolutions
} from "../helpers/pokemon";
import axios from "axios";

const PokemonContext = createContext();

const PokemonProvider = ({ children }) => {
    const [pokemonDetail, setpokemonDetail] = useState(null)
    const [showDetailPokemon, setshowDetailPokemon] = useState(false)

    const showPokemon = async (pokemonInfo) => {
        const { data: dataSpecies } = await axios.get(pokemonInfo.species.url)
        const { data: dataEvolution } = await axios.get(
            dataSpecies.evolution_chain.url
        );

        const { id, name, height, weight, types, stats, abilities } = pokemonInfo
        const evolutions = await getEvolutions(dataEvolution)
        setpokemonDetail({
            id,
            name,
            height,
            weight,
            stats: formatStats(stats),
            types: formatTypes(types),
            abilities: formatAbilities(abilities),
            description: getPokemonDescription(dataSpecies),
            evolutions,
        })
        console.log(pokemonDetail);
        setshowDetailPokemon(true)
    }

    const closePokemonDetail = () => {
        setshowDetailPokemon(false)
    }

    return (
        <PokemonContext.Provider value={{
            showDetailPokemon,
            showPokemon,
            closePokemonDetail,
            pokemonDetail,
        }}>
            {children}
        </PokemonContext.Provider>
    )
}

export {
    PokemonContext, PokemonProvider
}