// src/components/SeasonCalendar.js
import React from 'react';
import { racesRemaining } from '../utils/f1Data';

const SeasonCalendar = () => {
  return (
    <div className="calendar-container">
      <h2>2023 Season Calendar</h2>
      <table className="calendar-table">
        <thead>
          <tr>
            <th>Round</th>
            <th>Race</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {racesRemaining.map(race => (
            <tr key={race.id} className={race.completed ? 'completed' : 'upcoming'}>
              <td>{race.id}</td>
              <td>{race.name}</td>
              <td>{new Date(race.date).toLocaleDateString()}</td>
              <td>{race.completed ? 'Completed' : 'Upcoming'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SeasonCalendar;