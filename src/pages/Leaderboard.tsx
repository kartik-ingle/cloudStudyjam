import { BottomNav } from "@/components/BottomNav";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useLeaderboardData } from "@/hooks/useLeaderboardData";
import { Award, BarChart3, Download, Medal, RefreshCw, RotateCcw, Search, Trophy } from "lucide-react";
import { useMemo, useState } from "react";

const Leaderboard = () => {
  const { data, loading, error, lastUpdated, refreshData } = useLeaderboardData();

  const [searchTerm, setSearchTerm] = useState("");
  const [filterLevel, setFilterLevel] = useState("All");
  const [sortBy, setSortBy] = useState("rank");



  const filteredData = useMemo(() => {
    let filtered = data.filter(entry => {
      const matchesSearch = entry.userName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           entry.userEmail.toLowerCase().includes(searchTerm.toLowerCase());
      
      const totalCompleted = entry.skillBadgesCompleted + entry.arcadeGamesCompleted;
      let matchesFilter = true;
      
      switch (filterLevel) {
        case "Beginner":
          matchesFilter = totalCompleted < 5;
          break;
        case "Advanced":
          matchesFilter = totalCompleted >= 5 && totalCompleted < 15;
          break;
        case "Complete (20/20)":
          matchesFilter = totalCompleted === 20;
          break;
        case "✔ Access Code":
          matchesFilter = entry.accessCodeStatus === "Yes";
          break;
        default:
          matchesFilter = true;
      }
      
      return matchesSearch && matchesFilter;
    });

    // Sort the data
    switch (sortBy) {
      case "rank":
        filtered.sort((a, b) => a.rank - b.rank);
        break;
      case "name":
        filtered.sort((a, b) => a.userName.localeCompare(b.userName));
        break;
      case "progress":
        filtered.sort((a, b) => b.progress - a.progress);
        break;
      case "badges":
        filtered.sort((a, b) => b.skillBadgesCompleted - a.skillBadgesCompleted);
        break;
    }

    return filtered;
  }, [data, searchTerm, filterLevel, sortBy]);

  const getRankIcon = (rank: number) => {
    if (rank === 1) return <Trophy className="w-6 h-6 text-yellow-500" />;
    if (rank === 2) return <Medal className="w-6 h-6 text-gray-400" />;
    if (rank === 3) return <Award className="w-6 h-6 text-orange-500" />;
    return <span className="text-lg font-bold text-muted-foreground">#{rank}</span>;
  };

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  const getProgressColor = (progress: number) => {
    if (progress >= 80) return "bg-green-500";
    if (progress >= 50) return "bg-yellow-500";
    if (progress >= 25) return "bg-orange-500";
    return "bg-red-500";
  };

  return (
    <div className="min-h-screen bg-background pb-36">
      <Header />
      
      <main className="container max-w-7xl mx-auto px-4 py-8">
        {/* Header Section */}
        <Card className="mb-6 bg-gradient-to-r from-blue-600 via-cyan-500 to-green-500 rounded-xl">
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <BarChart3 className="w-8 h-8 text-white" />
                <h1 className="text-3xl font-bold text-white">All Students Progress</h1>
              </div>
              <button
                onClick={refreshData}
                disabled={loading}
                className="flex items-center gap-2 px-4 py-2 bg-white/20 text-white rounded-lg hover:bg-white/30 disabled:opacity-50 transition-colors"
              >
                <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
                {loading ? 'Refreshing...' : 'Refresh'}
              </button>
            </div>
            <div className="text-center">
              <p className="text-white/90 text-lg">See where you stand! Find your name and track your progress 👋</p>
              {lastUpdated && (
                <p className="text-white/70 text-sm mt-2">
                  Last updated: {lastUpdated.toLocaleTimeString()}
                </p>
              )}
            </div>
          </div>
        </Card>

        {error && (
          <div className="mb-6 p-4 bg-destructive/10 border border-destructive/20 rounded-lg">
            <p className="text-destructive">Error loading data: {error}</p>
            <button
              onClick={refreshData}
              className="mt-2 text-sm text-destructive hover:underline"
            >
              Try again
            </button>
          </div>
        )}

        {/* Search and Filter Section */}
        <Card className="mb-6 p-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search by name or email..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-2">
              {["All", "Beginner", "Advanced", "Complete (20/20)", "✔ Access Code"].map((filter) => (
                <Button
                  key={filter}
                  variant={filterLevel === filter ? "default" : "outline"}
                  size="sm"
                  onClick={() => setFilterLevel(filter)}
                  className={filterLevel === filter ? "bg-blue-600 hover:bg-blue-700" : ""}
                >
                  {filter}
                </Button>
              ))}
            </div>

            {/* Sort Dropdown */}
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Sort by Rank" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="rank">Sort by Rank</SelectItem>
                <SelectItem value="name">Sort by Name</SelectItem>
                <SelectItem value="progress">Sort by Progress</SelectItem>
                <SelectItem value="badges">Sort by Badges</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2 mt-4">
            <Button variant="outline" size="sm">
              <Download className="w-4 h-4 mr-2" />
              CSV
            </Button>
            <Button variant="outline" size="sm">
              <Download className="w-4 h-4 mr-2" />
              PDF
            </Button>
            <Button variant="outline" size="sm" onClick={() => {
              setSearchTerm("");
              setFilterLevel("All");
              setSortBy("rank");
            }}>
              <RotateCcw className="w-4 h-4 mr-2" />
              Reset
            </Button>
          </div>

          {/* Participant Count */}
          <div className="mt-4 text-sm text-muted-foreground">
            Showing {filteredData.length} participants
          </div>
        </Card>

        {/* Leaderboard Table */}
        <Card className="p-0">
          {/* Mobile: stacked cards */}
          <div className="md:hidden divide-y divide-border">
            {filteredData.map((participant) => (
              <div key={participant.rank} className="p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 min-w-0">
                    <Avatar className="w-10 h-10">
                      <AvatarFallback className="bg-orange-500 text-white font-semibold">
                        {getInitials(participant.userName)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="min-w-0">
                      <div className="font-semibold text-foreground truncate">{participant.userName}</div>
                      <div className="text-sm text-muted-foreground truncate">{participant.userEmail}</div>
                    </div>
                  </div>
                  <div>
                    {getRankIcon(participant.rank)}
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2 min-w-[220px]">
                    <Progress value={participant.progress} className="h-2 flex-1" />
                    <span className="text-sm font-medium min-w-[3rem]">{participant.progress}%</span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2 text-center">
                  <div>
                    <div className="text-xs text-muted-foreground">Skill Badges</div>
                    <div className="text-blue-600 font-semibold">{participant.skillBadgesCompleted}</div>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">Arcade</div>
                    <div className="text-green-600 font-semibold">{participant.arcadeGamesCompleted}</div>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">Total</div>
                    <div className="font-semibold">{participant.skillBadgesCompleted + participant.arcadeGamesCompleted}/20</div>
                  </div>
                </div>

                <div className="flex justify-end">
                  <Badge 
                    variant={participant.accessCodeStatus === "Yes" ? "default" : "destructive"}
                    className={participant.accessCodeStatus === "Yes" ? "bg-green-500 hover:bg-green-600" : ""}
                  >
                    {participant.accessCodeStatus === "Yes" ? "Access Code: Yes" : "Access Code: No"}
                  </Badge>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop: grid table */}
          <div className="hidden md:block">
            <div className="overflow-x-auto">
              <div className="min-w-[960px]">
          {/* Table Header */}
          <div className="bg-gradient-to-r from-blue-600 via-cyan-500 to-green-500 p-4">
            <div className="grid [grid-template-columns:80px_2fr_2fr_1fr_1fr_1fr_1fr] gap-4 text-white font-bold text-sm uppercase">
              <div>Rank</div>
              <div>Participant</div>
              <div>Progress</div>
              <div className="text-center">
                <div>Skill Badges</div>
                <div className="text-xs font-normal">(19)</div>
              </div>
              <div className="text-center">
                <div>Arcade</div>
                <div className="text-xs font-normal">(1)</div>
              </div>
              <div className="text-center">
                <div>Total Courses</div>
                <div className="text-xs font-normal">(20)</div>
              </div>
              <div className="text-center">Access Code</div>
            </div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-border">
            {filteredData.map((participant) => (
              <div key={participant.rank} className="p-4 hover:bg-muted/50 transition-colors">
                <div className="grid [grid-template-columns:80px_2fr_2fr_1fr_1fr_1fr_1fr] gap-4 items-center">
                  {/* Rank */}
                  <div className="flex items-center justify-center">
                    {getRankIcon(participant.rank)}
                  </div>

                  {/* Participant */}
                  <div className="flex items-center gap-3 min-w-0">
                    <Avatar className="w-10 h-10">
                      <AvatarFallback className="bg-orange-500 text-white font-semibold">
                        {getInitials(participant.userName)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="min-w-0">
                      <div className="font-semibold text-foreground truncate">{participant.userName}</div>
                      <div className="text-sm text-muted-foreground truncate">{participant.userEmail}</div>
                    </div>
                  </div>

                  {/* Progress */}
                  <div className="flex items-center gap-2 min-w-[240px]">
                    <div className="flex-1">
                      <Progress 
                        value={participant.progress} 
                        className="h-2"
                      />
                    </div>
                    <span className="text-sm font-medium min-w-[3rem]">{participant.progress}%</span>
                  </div>

                  {/* Skill Badges */}
                  <div className="text-center">
                    <span className="text-blue-600 font-semibold">{participant.skillBadgesCompleted}</span>
                  </div>

                  {/* Arcade */}
                  <div className="text-center">
                    <span className="text-green-600 font-semibold">{participant.arcadeGamesCompleted}</span>
                  </div>

                  {/* Total Courses */}
                  <div className="text-center">
                    <span className="font-semibold">
                      {participant.skillBadgesCompleted + participant.arcadeGamesCompleted}/20
                    </span>
                  </div>

                  {/* Access Code */}
                  <div className="text-center">
                    <Badge 
                      variant={participant.accessCodeStatus === "Yes" ? "default" : "destructive"}
                      className={participant.accessCodeStatus === "Yes" ? "bg-green-500 hover:bg-green-600" : ""}
                    >
                      {participant.accessCodeStatus === "Yes" ? "Yes" : "No"}
                    </Badge>
                  </div>
                </div>
              </div>
            ))}
          </div>
            </div>
          </div>
          </div>
        </Card>
      </main>

      <Footer />
      <BottomNav />
    </div>
  );
};

export default Leaderboard;
