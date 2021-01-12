import { Route, Switch  } from "react-router-dom";
import React from 'react'
import PokemonIndexContainer from './components/pokemon/pokemon_index_container'
import PokemonDetail from './components/pokemon/pokemon_detail'


const App = () => (
    <div>
        <Route path="/" component={PokemonIndexContainer}/>
        <Route path="/pokemon/:pokemonId" component={PokemonDetail}/>
    </div>
) 

export default App