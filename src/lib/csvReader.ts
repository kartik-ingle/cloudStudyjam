export interface LeaderboardEntry {
  userName: string;
  userEmail: string;
  profileUrl: string;
  profileStatus: string;
  accessCodeStatus: string;
  allCompleted: boolean;
  skillBadgesCompleted: number;
  skillBadgesNames: string;
  arcadeGamesCompleted: number;
  arcadeGamesNames: string;
  progress: number; // calculated as (skillBadgesCompleted + arcadeGamesCompleted) / 20 * 100
  rank: number; // calculated based on total completion
}

// Function to parse CSV data
export function parseCSVData(csvText: string): LeaderboardEntry[] {
  const lines = csvText.trim().split('\n');
  
  return lines.slice(1).map((line, index) => {
    // Simple CSV parsing - split by comma and handle quoted fields
    const values = line.split(',').map(v => v.replace(/"/g, ''));
    
    const skillBadgesCompleted = parseInt(values[6]) || 0;
    const arcadeGamesCompleted = parseInt(values[8]) || 0;
    const totalCompleted = skillBadgesCompleted + arcadeGamesCompleted;
    const progress = Math.round((totalCompleted / 20) * 100);
    
    return {
      userName: values[0],
      userEmail: values[1],
      profileUrl: values[2],
      profileStatus: values[3],
      accessCodeStatus: values[4],
      allCompleted: values[5] === 'Yes',
      skillBadgesCompleted,
      skillBadgesNames: values[7],
      arcadeGamesCompleted,
      arcadeGamesNames: values[9],
      progress,
      rank: 0 // Will be calculated after sorting
    };
  });
}

// Function to fetch and process CSV data
export async function fetchCSVData(): Promise<LeaderboardEntry[]> {
  try {
    // In a real application, you would fetch from an API endpoint
    // For now, we'll use a public URL or local file
    const response = await fetch('/leaderboard.csv');
    
    if (!response.ok) {
      throw new Error('Failed to fetch CSV data');
    }
    
    const csvText = await response.text();
    const rawData = parseCSVData(csvText);
    
    // Sort by total completion (skill badges + arcade games) and assign ranks
    const sortedData = rawData
      .sort((a, b) => {
        const aTotal = a.skillBadgesCompleted + a.arcadeGamesCompleted;
        const bTotal = b.skillBadgesCompleted + b.arcadeGamesCompleted;
        return bTotal - aTotal;
      })
      .map((entry, index) => ({
        ...entry,
        rank: index + 1
      }));
    
    return sortedData;
  } catch (error) {
    console.error('Error fetching CSV data:', error);
    // Return empty array as fallback
    return [];
  }
}

// Function to calculate statistics from the data
export function calculateStats(data: LeaderboardEntry[]) {
  const totalParticipants = data.length;
  const totalSkillBadges = data.reduce((sum, entry) => sum + entry.skillBadgesCompleted, 0);
  const totalArcadeGames = data.reduce((sum, entry) => sum + entry.arcadeGamesCompleted, 0);
  const totalBadges = totalSkillBadges + totalArcadeGames;
  const averageProgress = Math.round(totalBadges / totalParticipants) || 0;
  const averageCompletion = Math.round((totalBadges / (totalParticipants * 20)) * 100) || 0;
  const completedAll = data.filter(entry => entry.skillBadgesCompleted + entry.arcadeGamesCompleted === 20).length;
  const activeParticipants = data.filter(entry => entry.skillBadgesCompleted + entry.arcadeGamesCompleted > 0).length;
  const topPerformer = data[0] || { userName: 'N/A', skillBadgesCompleted: 0, arcadeGamesCompleted: 0 };
  const skillBadgeMasters = data.filter(entry => entry.skillBadgesCompleted === 19).length;
  const arcadeWinners = data.filter(entry => entry.arcadeGamesCompleted > 0).length;
  const accessCodeRedeemed = data.filter(entry => entry.accessCodeStatus === 'Yes').length;

  return {
    totalParticipants,
    totalSkillBadges,
    totalArcadeGames,
    totalBadges,
    averageProgress,
    averageCompletion,
    completedAll,
    activeParticipants,
    topPerformer,
    skillBadgeMasters,
    arcadeWinners,
    accessCodeRedeemed
  };
}
