import React from 'react';
import './LeaderboardPage.css';

const LeaderboardPage = () => {
  // Mock data for leaderboard
  const leaderboardData = [
    { position: 1, name: 'Jon Snow', points: 1500 },
    { position: 2, name: 'Daenerys Targaryen', points: 1450 },
    { position: 3, name: 'Arya Stark', points: 1400 },
    { position: 4, name: 'Tyrion Lannister', points: 1350 },
    { position: 5, name: 'Sansa Stark', points: 1300 },
  ];

  return (
    <div className="leaderboard-page">
      <h2 className="got-font">Leaderboard</h2>
      <table className="got-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {leaderboardData.map((player) => (
            <tr key={player.position}>
              <td>{player.position}</td>
              <td>{player.name}</td>
              <td>{player.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LeaderboardPage;
