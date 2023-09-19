import React from 'react';
import Player from './Player'; // Import the Player component
import playersData from '../player.json'; // Import the player data

const playerStyle = {
    display: 'inline-block',
    marginRight: '10px',
  };
  
  const PlayersList = () => {
    return (
      <div>
        {playersData.players.map((player) => (
          <div key={player.id} style={playerStyle}>
            <Player
              id={player.id}
              name={player.name}
              team={player.team}
              nationality={player.nationality}
              jerseyNumber={player.jerseyNumber}
              age={player.age}
              imageURL={player.imageURL}
            />
          </div>
        ))}
      </div>
    );
  };
  
  export default PlayersList;
