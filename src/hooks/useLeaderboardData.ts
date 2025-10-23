import { calculateStats, fetchCSVData, LeaderboardEntry } from '@/lib/csvReader';
import { useCallback, useEffect, useState } from 'react';

export function useLeaderboardData() {
  const [data, setData] = useState<LeaderboardEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

  const refreshData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const newData = await fetchCSVData();
      setData(newData);
      setLastUpdated(new Date());
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
