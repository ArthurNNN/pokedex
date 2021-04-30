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



  // <div className="App">
  //   <header className="App-header">
  //     <img src={logo} className="App-logo" alt="logo" />
  //     <p>
  //       Edit <code>src/App.js</code> and save to reload. By Artur Nikitsin
  //     </p>
  //     <a
  //       className="App-link"
  //       href="https://reactjs.org"
  //       target="_blank"
  //       rel="noopener noreferrer"
  //     >
  //       Learn React
  //     </a>
  //   </header>
  //   <NavBar>

  //   </NavBar>
  // </div>
