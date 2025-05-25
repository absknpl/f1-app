const API_BASE_URL = 'https://your-api-domain.com'; // Replace with actual API URL

export const fetchDriverStandings = async (year) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/${year}/standings/drivers`);
    if (!response.ok) throw new Error('Network response was not ok');
    return await response.json();
  } catch (error) {
    console.error('Error fetching driver standings:', error);
    throw error;
  }
};

export const fetchConstructorStandings = async (year) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/${year}/standings/teams`);
    if (!response.ok) throw new Error('Network response was not ok');
    return await response.json();
  } catch (error) {
    console.error('Error fetching constructor standings:', error);
    throw error;
  }
};

export const fetchRaceResults = async (year, gp) => {
  try {
    const endpoint = gp 
      ? `${API_BASE_URL}/api/${year}/results/races/${gp}`
      : `${API_BASE_URL}/api/${year}/results/races`;
    const response = await fetch(endpoint);
    if (!response.ok) throw new Error('Network response was not ok');
    return await response.json();
  } catch (error) {
    console.error('Error fetching race results:', error);
    throw error;
  }
};