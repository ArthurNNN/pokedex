import React from 'react';

const Logo = (props) => {
const logWhenClicked = () => {
    console.log("It's a log in the logWhenClicked() function")

}

    // console.log(props);
    return (
        < header >
            <h1 >Welcome to the {props.appName}</h1>
            <img onClick={logWhenClicked} src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png" alt="pokemon" />
        </header >
    );
}

export default Logo;