import React from "react";

const Player = ({ Nom, Equipe, Nationalite, NumeroMaillot, age, imageUrl }) => {
  return (
    <div
      className="bg-white rounded-lg shadow-lg overflow-hidden w-64 mx-auto my-4 rounded-t-2xl border-gray-100"
      style={{ border: ".4px solid rgba(0, 0, 0, 0.1)" }}
    >
      <img
        src={imageUrl}
        alt={Nom}
        className="w-full h-64 object-cover p-2rounded-t-2xl"
        onError={({ currentTarget }) => {
          currentTarget.onerror = null;
          currentTarget.src =
            "https://via.placeholder.com/300x300.png?text=No+Image";
        }}
      />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{Nom}</h2>
        <p className="text-gray-700">
          <span className="font-semibold">Club:</span> {Equipe}
        </p>
        <p className="text-gray-700">
          <span className="font-semibold">Nationalité:</span> {Nationalite}
        </p>
        <p className="text-gray-700">
          <span className="font-semibold">Numero de Maillot:</span> {NumeroMaillot}
        </p>
        <p className="text-gray-700">
          <span className="font-semibold">Age:</span> {age}
        </p>
      </div>
    </div>
  );
};

// Default props
Player.defaultProps = {
  name: "Unknown Player",
  team: "Unknown Team",
  nationality: "Unknown Nationality",
  jerseyNumber: 0,
  age: 0,
  imageUrl: "https://via.placeholder.com/300x300.png?text=No+Image",
};

export default Player;
