// external imports
import React, { useState } from 'react';

// internal imports
import './App.css';
import Cards from './components/Cards';
import Score from './components/Score';
import Dropdown from './components/Dropdown';
import game24 from './images/game.png';


const players = [
  {
    label: '1 player',
    value: 1,
  },
  {
    label: '2 player',
    value: 2,
  },
  {
    label: '3 player',
    value: 3,
  },
  {
    label: '4 player',
    value: 4,
  }
]

const App = () => {
  const [selectedPlayers, setSelectedPlayers] = useState(players[0]);
  const [round, setRound] = useState(0);

  const reset = () => {
    setSelectedPlayers(1)
  }

  let numberOfPlayers = [];
  for (let i = 0; i < selectedPlayers.value; i++) {
    numberOfPlayers.push(<Score key={i} player={i + 1} />)
    console.log(1 + i)
  };

  return (
    <div className="App">
      <div className="header">
        <img src={game24} alt='' className='logo' />
        <h2>Round {round}</h2>
      </div>
      <button onClick={reset} className='ui button primary' style={{ marginBottom: '1vh' }}>Reset</button>
      <div className="cards">
        <Cards round={round} onSetRound={setRound} />
      </div>
      <div className="score">
        <Dropdown
          players={players}
          selected={selectedPlayers}
          onSelectedChange={setSelectedPlayers}
        />
        <div className='players'>{numberOfPlayers}</div>
      </div>
    </div>
  );
}

export default App;
