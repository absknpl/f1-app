import React from 'react';
import { currentStandings } from '../utils/f1Data';

const Leaderboard = ({ customization }) => {
  return (
    <div className="leaderboard-container">
      <h2>Current Championship Standings</h2>
      <table className="leaderboard-table">
        <thead>
          <tr>
            <th>Position</th>
            <th>Driver</th>
            {customization.showTeams && <th>Team</th>}
            <th>Points</th>
            {customization.showWins && <th>Wins</th>}
            {customization.showPodiums && <th>Podiums</th>}
            {customization.showLastRace && <th>Last Race</th>}
          </tr>
        </thead>
        <tbody>
          {currentStandings.map((driver, index) => (
            <tr key={driver.id} className={`driver-row ${driver.team.toLowerCase()}`}>
              <td>{index + 1}</td>
              <td>
                <span className="driver-number">{driver.number}</span>
                {driver.name}
              </td>
              {customization.showTeams && <td>{driver.team}</td>}
              <td className="points">{driver.points}</td>
              {customization.showWins && <td>{driver.wins}</td>}
              {customization.showPodiums && <td>{driver.podiums}</td>}
              {customization.showLastRace && <td>{driver.lastRace || '-'}</td>}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;