// import logo from './logo.svg';
import './App.css';
import Logo from './Logo';
import BestPocemon from './BestPocemon';
import CaughtPokemon from './CaughtPokemon';

const App = () => {
  return (

    <div>
      <Logo appName='Pokedex' />
      <BestPocemon abilities={['Anticipation', 'Adaptability', 'Run-Away']} />
      <CaughtPokemon date={new Date().toLocaleDateString()} />
    </div>

  );
}

export default App;