import React from 'react'


class PokemonDetail extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div>
                {/* <img src="this.props.pokemon.imageUrl"/>
                <span>{this.props.pokemon.name}</span>
                <span>{this.props.pokemon.type}</span>
                <span>{this.props.pokemon.type}</span>
                <span>{this.props.pokemon.type}</span>
                <span>{this.props.pokemon.type}</span> */}
            </div>
        )
    }
}

const mSTP = (state, ownProps ) => {
    const pokemonId = ownProps.match.params.pokemonId

    const pokemon = state.entities.pokemon[pokemonId]
}

export default PokemonDetail