// import logo from './logo.svg';
import './App.css';
import Logo from './Logo';
import BestPocemon from './BestPocemon';
import CaughtPokemon from './CaughtPokemon';
import PokemonMovesSelector from './PokemonMovesSelector';
import PokemonCity from './PokemonCity';

const App = () => {

  const logWhenClicked = () => {
    console.log("It's a log in the logWhenClicked() function in App.js")
  }

  return (

    <div>
      <Logo appName='Pokedex' handleClick={logWhenClicked} />
      <BestPocemon abilities={['Anticipation', 'Adaptability', 'Run-Away']} />
      <CaughtPokemon date={new Date().toLocaleDateString()} />
      <PokemonMovesSelector />
      <PokemonCity />
    </div>

  );
}

export default App;