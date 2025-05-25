import {
  get2025DriverStandings,
  get2025RaceSchedule,
  get2025RaceResults,
  get2025SprintResults
} from '../api/ergast';

// Cache for 2025 data
let cached2025Data = {
  standings: null,
  races: null
};

export const load2025Data = async () => {
  try {
    const [standings, races] = await Promise.all([
      get2025DriverStandings(),
      get2025RaceSchedule()
    ]);
    
    cached2025Data = {
      standings,
      races
    };
    
    return cached2025Data;
  } catch (error) {
    console.error('Error loading 2025 season data:', error);
    return cached2025Data;
  }
};

export const get2025Standings = () => {
  return cached2025Data.standings?.map(driver => ({
    id: driver.Driver.driverId,
    number: driver.Driver.permanentNumber || 'N/A',
    name: `${driver.Driver.givenName} ${driver.Driver.familyName}`,
    team: driver.Constructors[0]?.name || 'Unknown',
    points: parseInt(driver.points, 10),
    wins: parseInt(driver.wins, 10),
    position: parseInt(driver.position, 10),
    sprintPoints: 0 // Initialize for sprint races
  })) || [];
};

export const get2025UpcomingRaces = () => {
  const now = new Date();
  return cached2025Data.races?.filter(race => {
    const raceDate = new Date(race.date);
    return raceDate > now;
  }).map(race => ({
    id: race.round,
    name: race.raceName,
    date: race.date,
    circuit: race.Circuit.circuitName,
    completed: false,
    hasSprint: false // Set based on 2025 calendar
  })) || [];
};
export const refresh2025Data = async () => {
  try {
    cached2025Data = {
      standings: null,
      races: null
    };
    return await load2025Data();
  } catch (error) {
    console.error('Error refreshing data:', error);
    throw error;
  }
};
// Updated points system for 2025 (modify if regulations change)
export const pointsSystem2025 = {
  race: {
    1: 25, 2: 18, 3: 15, 4: 12, 5: 10, 
    6: 8, 7: 6, 8: 4, 9: 2, 10: 1,
    fastestLap: 1
  },
  sprint: {
    1: 8, 2: 7, 3: 6, 4: 5, 5: 4,
    6: 3, 7: 2, 8: 1,
    fastestLap: 0 // Typically no FL point in sprints
  }
};