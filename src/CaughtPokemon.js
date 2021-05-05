import React, { useState } from 'react';

const CaughtPokemon = (props) => {

    const pokemonsList = ["Bulbasaur", "Ivysaur", "Venusaur", "Charmander", "Charizard", "Squirtle",
        "Wartortle", "Charmeleon", "Blastoise", "Caterpie", "Metapod", "Butterfree", "Weedle",
        "Kakuna", "Beedrill", "Pidgey", "Pidgeotto", "Pidgeot", "Rattata", "Raticate"];
        
    var [caught, setCaught] = useState([]);
    
    const catchPokemon = () => {
        setCaught(caught.concat(pokemonsList[Math.floor(Math.random() * pokemonsList.length)]));
        console.log(caught);
    }

    return (
        <div>
            <p>Caught {caught.length} Pokemon on {props.date}</p>
            <button onClick={catchPokemon}>Click me!</button>
            <ul>
                {caught.map((item, index) => {
                    return <li key={index}>{item}</li>;
                })}
            </ul>
        </div>
    );
}

export default CaughtPokemon;