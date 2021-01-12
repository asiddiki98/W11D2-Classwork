import { RECEIVE_ALL_POKEMON, RECEIVE_POKEMON } from './../actions/pokemon_actions';


const pokemonReducer = (state = {}, action) => {
  debugger
  Object.freeze(state);
  switch (action.type){
  case RECEIVE_ALL_POKEMON:
    return Object.assign({}, action.pokemon, state);
  case RECEIVE_POKEMON:
    debugger
    const newPokemon = action.pokemon
    return Object.assign({}, state, {[newPokemon.id]: newPokemon})
  default:
    return state;
  }
}
  
export default pokemonReducer;
