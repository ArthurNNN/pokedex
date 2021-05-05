// import logo from './logo.svg';
import './App.css';
import Logo from './Logo';
import BestPocemon from './BestPocemon';
import CaughtPokemon from './CaughtPokemon';

const App = () => {

  const logWhenClicked = () => {
    console.log("It's a log in the logWhenClicked() function in App.js")
  }

  return (

    <div>
      <Logo appName='Pokedex' handleClick={logWhenClicked} />
      <BestPocemon abilities={['Anticipation', 'Adaptability', 'Run-Away']} />
      <CaughtPokemon date={new Date().toLocaleDateString()} />
    </div>

  );
}

export default App;