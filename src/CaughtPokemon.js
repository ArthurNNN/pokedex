import React, { useState } from 'react';

const CaughtPokemon = (props) => {

    const pokemonsList = ["Bulbasaur", "Ivysaur", "Venusaur", "Charmander", "Charizard", "Squirtle",
        "Wartortle", "Charmeleon", "Blastoise", "Caterpie", "Metapod", "Butterfree", "Weedle",
        "Kakuna", "Beedrill", "Pidgey", "Pidgeotto", "Pidgeot", "Rattata", "Raticate"];

    var [caught, setCaught] = useState([]);
    const [pokemonNameInput, setPokemonNameInput] = useState('');

    const catchPokemon = () => {
        // setCaught(caught.concat(pokemonsList[Math.floor(Math.random() * pokemonsList.length)]));

        if (pokemonNameInput !== "") {
            setCaught(caught.concat(pokemonNameInput));
            setPokemonNameInput("");
            console.log(caught);
        }

    }

    const handleInputChange = (event) => {
        console.log(event.target.value);
        setPokemonNameInput(event.target.value);
    }

    return (
        <div>
            <p>Caught {caught.length} Pokemon on {props.date}</p>
            <input type="text" value={pokemonNameInput} onChange={handleInputChange} />
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