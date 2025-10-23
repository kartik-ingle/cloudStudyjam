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
    const CSV_URL = (import.meta as any).env?.VITE_CSV_URL || '/leaderboard.csv';

    const response = await fetch(CSV_URL, {
      cache: 'no-store',
      headers: {
        'pragma': 'no-cache',
        'cache-control': 'no-cache',
      },
    });
    
    if (!response.ok) {
      throw new Error(`Failed to fetch CSV data: ${response.status} ${response.statusText}`);
    }

    const contentType = response.headers.get('content-type') || '';
    const isLikelyCsv = /text\/csv|application\/vnd\.ms-excel|text\/plain/i.test(contentType);

    const bodyText = await response.text();

    if (!isLikelyCsv) {
      const preview = bodyText.slice(0, 200).toLowerCase();
      if (preview.includes('<html') || preview.includes('<!doctype')) {
        throw new Error('Provided URL returned HTML instead of CSV. Use a Google Sheets CSV export or Publish-to-web CSV link.');
      }
      // Some hosts send text/plain without proper CSV content-type; allow if it is not HTML
    }

    const rawData = parseCSVData(bodyText);
    
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
