export const getUpcomingRaces = () => {
  return racesRemaining.filter(race => !race.completed);
};

// Make sure racesRemaining is properly defined
export const racesRemaining = [
  { id: 9, name: "Spanish Grand Prix", date: "2025-05-30", completed: false },
  { id: 10, name: "Canadian Grand Prix", date: "2025-06-13", completed: false },
  { id: 11, name: "Austrian Grand Prix", date: "2025-06-27", completed: false },
  { id: 12, name: "British Grand Prix", date: "2025-07-04", completed: false },
  { id: 13, name: "Belgian Grand Prix", date: "2025-07-25", completed: false },
  { id: 14, name: "Hungarian Grand Prix", date: "2025-08-01", completed: false },
  { id: 15, name: "Dutch Grand Prix", date: "2025-08-29", completed: false },
  { id: 16, name: "Italian Grand Prix", date: "2025-09-05", completed: false },
  { id: 17, name: "Azerbaijan Grand Prix", date: "2025-09-19", completed: false },
  { id: 18, name: "Singapore Grand Prix", date: "2025-10-03", completed: false },
  { id: 19, name: "United States Grand Prix", date: "2025-10-17", completed: false },
  { id: 20, name: "Mexico City Grand Prix", date: "2025-10-24", completed: false },
  { id: 21, name: "São Paulo Grand Prix", date: "2025-11-07", completed: false },
  { id: 22, name: "Las Vegas Grand Prix", date: "2025-11-20", completed: false },
  { id: 23, name: "Qatar Grand Prix", date: "2025-11-28", completed: false },
  { id: 24, name: "Abu Dhabi Grand Prix", date: "2025-12-05", completed: false }
];


  export const currentStandings = [
    {
      id: "pia",
      number: 81,
      name: "Oscar Piastri",
      team: "McLaren",
      points: 146,
      wins: 4,
      podiums: 6,
      lastRace: "3rd"
    },
    {
      id: "nor",
      number: 4,
      name: "Lando Norris",
      team: "McLaren",
      points: 133,
      wins: 2,
      podiums: 5,
      lastRace: "2nd"
    },
    {
      id: "ver",
      number: 1,
      name: "Max Verstappen",
      team: "Red Bull",
      points: 124,
      wins: 2,
      podiums: 4,
      lastRace: "1st"
    },
    {
      id: "rus",
      number: 63,
      name: "George Russell",
      team: "Mercedes",
      points: 99,
      wins: 0,
      podiums: 3,
      lastRace: "4th"
    },
    {
      id: "lec",
      number: 16,
      name: "Charles Leclerc",
      team: "Ferrari",
      points: 61,
      wins: 0,
      podiums: 2,
      lastRace: "5th"
    },
    {
      id: "ham",
      number: 44,
      name: "Lewis Hamilton",
      team: "Ferrari",
      points: 53,
      wins: 1,
      podiums: 2,
      lastRace: "6th"
    },
    {
      id: "ant",
      number: 7,
      name: "Kimi Antonelli",
      team: "Mercedes",
      points: 48,
      wins: 0,
      podiums: 1,
      lastRace: "7th"
    },
    {
      id: "alb",
      number: 23,
      name: "Alexander Albon",
      team: "Williams",
      points: 40,
      wins: 0,
      podiums: 1,
      lastRace: "8th"
    },
    {
      id: "oco",
      number: 31,
      name: "Esteban Ocon",
      team: "Haas",
      points: 14,
      wins: 0,
      podiums: 0,
      lastRace: "9th"
    },
    {
      id: "str",
      number: 18,
      name: "Lance Stroll",
      team: "Aston Martin",
      points: 14,
      wins: 0,
      podiums: 0,
      lastRace: "10th"
    },
    {
      id: "sai",
      number: 55,
      name: "Carlos Sainz",
      team: "Williams",
      points: 11,
      wins: 0,
      podiums: 0,
      lastRace: "11th"
    },
    {
      id: "tsu",
      number: 22,
      name: "Yuki Tsunoda",
      team: "Red Bull",
      points: 10,
      wins: 0,
      podiums: 0,
      lastRace: "12th"
    },
    {
      id: "gas",
      number: 10,
      name: "Pierre Gasly",
      team: "Alpine",
      points: 7,
      wins: 0,
      podiums: 0,
      lastRace: "13th"
    },
    {
      id: "had",
      number: 50,
      name: "Isack Hadjar",
      team: "Racing Bulls",
      points: 7,
      wins: 0,
      podiums: 0,
      lastRace: "14th"
    },
    {
      id: "hul",
      number: 27,
      name: "Nico Hulkenberg",
      team: "Sauber",
      points: 6,
      wins: 0,
      podiums: 0,
      lastRace: "15th"
    },
    {
      id: "bea",
      number: 51,
      name: "Oliver Bearman",
      team: "Haas",
      points: 6,
      wins: 0,
      podiums: 0,
      lastRace: "16th"
    },
    {
      id: "alo",
      number: 14,
      name: "Fernando Alonso",
      team: "Aston Martin",
      points: 0,
      wins: 0,
      podiums: 0,
      lastRace: "17th"
    },
    {
      id: "law",
      number: 40,
      name: "Liam Lawson",
      team: "Racing Bulls",
      points: 0,
      wins: 0,
      podiums: 0,
      lastRace: "18th"
    },
    {
      id: "doo",
      number: 42,
      name: "Jack Doohan",
      team: "Alpine",
      points: 0,
      wins: 0,
      podiums: 0,
      lastRace: "19th"
    },
    {
      id: "bor",
      number: 43,
      name: "Gabriel Bortoleto",
      team: "Sauber",
      points: 0,
      wins: 0,
      podiums: 0,
      lastRace: "20th"
    }
  ];
  
  
export const pointsSystem = {
  1: 25,
  2: 18,
  3: 15,
  4: 12,
  5: 10,
  6: 8,
  7: 6,
  8: 4,
  9: 2,
  10: 1,
  fastestLap: 1
};