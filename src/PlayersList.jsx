import React from 'react';
import Player from './Player';
import players from './players';

const PlayersList = () => {
  return (
    <div className="container mx-auto py-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold">FIFA Players</h1>
        <div className="divider"></div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {players.map((player, index) => (
          <Player 
            key={index}
            {...player}
          />
        ))}
      </div>
    </div>
  );
};

export default PlayersList;