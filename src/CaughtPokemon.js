import React, { useState } from 'react';

const CaughtPokemon = (props) => {
    // { var date = new Date().toLocaleDateString() }

    const [caught, setCaught] = useState(0);

    const catchPokemon = () => {
        setCaught(caught + 1);

    }



    return (
        <div>
            <p>Caught {caught} Pokemon on {props.date}</p>
            <button onClick={catchPokemon}>Click me!</button>
        </div>
    );
}

export default CaughtPokemon;