const API_BASE = 'https://api.jolpi.ca/ergast/f1';

export const fetchData = async (endpoint) => {
  try {
    const response = await fetch(`${API_BASE}/${endpoint}.json`);
    if (!response.ok) throw new Error('Network response was not ok');
    const data = await response.json();
    return data.MRData || data; // Adjusted for new API structure
  } catch (error) {
    console.error('Error fetching from F1 2025 API:', error);
    throw error;
  }
};

// 2025 Season Endpoints
export const get2025DriverStandings = async () => {
  const data = await fetchData('2025/driverstandings');
  return data.StandingsTable.StandingsLists[0]?.DriverStandings || [];
};

export const get2025ConstructorStandings = async () => {
  const data = await fetchData('2025/constructorstandings');
  return data.StandingsTable.StandingsLists[0]?.ConstructorStandings || [];
};

export const get2025RaceSchedule = async () => {
  const data = await fetchData('2025/races');
  return data.RaceTable.Races || [];
};

export const get2025RaceResults = async (round) => {
  const endpoint = round ? `2025/${round}/results` : '2025/results';
  const data = await fetchData(endpoint);
  return data.RaceTable.Races || [];
};

export const get2025SprintResults = async (round) => {
  const endpoint = round ? `2025/${round}/sprint` : '2025/sprint';
  const data = await fetchData(endpoint);
  return data.RaceTable.Races || [];
};