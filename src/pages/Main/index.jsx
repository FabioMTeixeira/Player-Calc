import './style.css';
import SearchBar from '../../components/SearchBar';
import { useState } from 'react';

function App() {
  const [allPlayers, setAllPlayers] = useState([]);

  return (
    <div>
      <SearchBar
        allPlayers={allPlayers}
        setAllPlayers={setAllPlayers}
      />

      <div>
        <ul>
          {allPlayers && allPlayers.map((player) => (
            <li key={Math.random() * 10000}>
              <h2>
                {player.nome}
              </h2>
            </li>
          ))}
        </ul>
      </div>
    </div >
  );
}

export default App;
