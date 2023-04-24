import React from "react";
import Pokeinfo from "./Pokeinfo";
const Card = ({ pokemon, loading,infoPokemon}) => {
    return (
        <>
        {
            loading ? <h1>Loading...</h1> :
                pokemon.map((item) => {
                    return (
                        <>
                            <div className="card" key={item.id} onClick={()=>infoPokemon(item)}>
                                <h2>#{item.id}</h2>
                                <img src={item.sprites.front_default} alt="" />
                                 {console.log(item.sprites.front_default)}
                                <h2>{item.name}</h2>
                                </div>
                        </>
                    )
                })
        }
        </>
    )
}
export default Card;





