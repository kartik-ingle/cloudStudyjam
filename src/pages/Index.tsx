import { BottomNav } from "@/components/BottomNav";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { StatCard } from "@/components/StatCard";
import { useLeaderboardData } from "@/hooks/useLeaderboardData";
import { Award as AwardIcon, CheckCircle, Clock, Gamepad2, RefreshCw, Smile, Star, TrendingUp, UserCheck, UserPlus, Users } from "lucide-react";

const Index = () => {
  const { stats, loading, error, lastUpdated, refreshData } = useLeaderboardData();
  
  return (
    <div className="min-h-screen bg-background pb-36">
      <Header />
      
      <main className="container max-w-7xl mx-auto px-4 py-8">
        {/* Header with refresh button */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
            <p className="text-muted-foreground">
              {lastUpdated ? `Last updated: ${lastUpdated.toLocaleTimeString()}` : 'Loading...'}
            </p>
          </div>
          <button
            onClick={refreshData}
            disabled={loading}
            className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 disabled:opacity-50 transition-colors"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
            {loading ? 'Refreshing...' : 'Refresh Data'}
          </button>
        </div>

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard
            icon={<Users className="w-6 h-6 text-gradient-blue" />}
            title="Average Progress"
            value={stats.averageProgress}
            subtitle="Badges / Person"
            iconBg="bg-gradient-accent"
          />
          
          <StatCard
            icon={<Star className="w-6 h-6 text-gradient-orange" />}
            title="Total Badges Earned"
            value={stats.totalBadges.toLocaleString()}
            iconBg="bg-gradient-card"
          />
          
          <StatCard
            icon={<CheckCircle className="w-6 h-6 text-gradient-cyan" />}
            title="Average Completion"
            value={`${stats.averageCompletion}%`}
            iconBg="bg-gradient-accent"
          />
          
          <StatCard
            icon={<TrendingUp className="w-6 h-6 text-gradient-pink" />}
            title="Top Performer"
            value={stats.topPerformer.userName}
            subtitle={`${stats.topPerformer.skillBadgesCompleted + stats.topPerformer.arcadeGamesCompleted} Badges`}
            iconBg="bg-gradient-card"
          />
          
          <StatCard
            icon={<AwardIcon className="w-6 h-6 text-gradient-yellow" />}
            title="✅ Completed 20 Courses"
            value={stats.completedAll}
            subtitle="Winners"
            iconBg="bg-gradient-primary"
            highlight={true}
          />
          
          <StatCard
            icon={<UserCheck className="w-6 h-6 text-gradient-pink" />}
            title="Active Participants"
            value={stats.activeParticipants}
            subtitle="Started Their Journey"
            iconBg="bg-gradient-card"
          />
          
          <StatCard
            icon={<TrendingUp className="w-6 h-6 text-gradient-cyan" />}
            title="Completion Rate"
            value={`${stats.averageCompletion}%`}
            subtitle="Overall Progress"
            iconBg="bg-gradient-accent"
          />
          
          <StatCard
            icon={<Clock className="w-6 h-6 text-gradient-orange" />}
            title="Avg Time/Badge"
            value="2-4 hrs"
            subtitle="Estimated Duration"
            iconBg="bg-gradient-card"
          />
          
          <StatCard
            icon={<UserPlus className="w-6 h-6 text-gradient-blue" />}
            title="Total Participants"
            value={stats.totalParticipants}
            subtitle="Users Enrolled"
            iconBg="bg-gradient-accent"
          />
          
          <StatCard
            icon={<Smile className="w-6 h-6 text-gradient-green" />}
            title="Credits Redeemed"
            value={stats.accessCodeRedeemed}
            subtitle="Cloud Skill Boost"
            iconBg="bg-gradient-accent"
          />
          
          <StatCard
            icon={<Star className="w-6 h-6 text-gradient-yellow" />}
            title="All 19 Badges Done"
            value={stats.skillBadgeMasters}
            subtitle="Skill Badge Masters"
            iconBg="bg-gradient-primary"
          />
          
          <StatCard
            icon={<Gamepad2 className="w-6 h-6 text-gradient-cyan" />}
            title="Arcade Completed"
            value={stats.arcadeWinners}
            subtitle="Game Winners"
            iconBg="bg-gradient-accent"
          />
        </div>
      </main>

      <Footer />
      <BottomNav />
    </div>
  );
};

export default Index;
