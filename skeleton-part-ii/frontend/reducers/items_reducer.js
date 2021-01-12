import { RECEIVE_POKEMON } from './../actions/pokemon_actions';

const itemReducer = (state = {}, action) => {
    debugger
    Object.freeze(state)
    switch (action.type){
    case RECEIVE_POKEMON:
        debugger
        return Object.assign({}, state, action.items)
    default:
        return state;
    }
}

export default itemReducer 