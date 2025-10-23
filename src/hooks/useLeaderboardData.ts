import { calculateStats, fetchCSVData, LeaderboardEntry } from '@/lib/csvReader';
import { useCallback, useEffect, useState } from 'react';

export function useLeaderboardData() {
  const initial = (() => {
    try {
      const raw = localStorage.getItem('leaderboardData');
      const ts = localStorage.getItem('leaderboardDataUpdatedAt');
      if (raw) {
        return {
          data: JSON.parse(raw) as LeaderboardEntry[],
          lastUpdated: ts ? new Date(parseInt(ts, 10)) : null,
        };
      }
    } catch {}
    return { data: [] as LeaderboardEntry[], lastUpdated: null as Date | null };
  })();

  const [data, setData] = useState<LeaderboardEntry[]>(initial.data);
  const [loading, setLoading] = useState(initial.data.length === 0);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(initial.lastUpdated);

  const refreshData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const newData = await fetchCSVData();
      setData(newData);
      const now = new Date();
      setLastUpdated(now);
      try {
        localStorage.setItem('leaderboardData', JSON.stringify(newData));
        localStorage.setItem('leaderboardDataUpdatedAt', String(now.getTime()));
      } catch {}
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load data');
      console.error('Error refreshing data:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    refreshData();
    
    // Set up automatic refresh every 30 seconds
    const interval = setInterval(refreshData, 30000);
    
    return () => clearInterval(interval);
  }, [refreshData]);

  const stats = calculateStats(data);

  return {
    data,
    stats,
    loading,
    error,
    lastUpdated,
    refreshData
  };
}
