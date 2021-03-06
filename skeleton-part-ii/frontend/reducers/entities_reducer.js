import {combineReducers} from 'redux';
import pokemonReducer from './pokemon_reducer';
import itemReducer from './items_reducer'

const entitiesReducer = combineReducers({
  pokemon: pokemonReducer,
  item: itemReducer
})

export default entitiesReducer;