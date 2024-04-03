import React from "react";

const Player = ({ name, team, nationality, jersyNumber, age, imageUrl }) => {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg m-4">
      <img className="w-full" src={imageUrl} alt={name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base font-bold">
          Team: {team}
          <br />
          Nationality: {nationality}
          <br />
          Jersey Number: {jersyNumber}
          <br />
          Age: {age}
        </p>
      </div>
    </div>
  );
};

export default Player;
