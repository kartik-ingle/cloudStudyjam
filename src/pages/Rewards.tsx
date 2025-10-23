import { BottomNav } from "@/components/BottomNav";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { useLeaderboardData } from "@/hooks/useLeaderboardData";
import { Award, Gift, Star, Trophy } from "lucide-react";

// Count how many students have completed 20/20 from the CSV text
function countCompleted20(csv: string): number {
  const lines = csv.trim().split("\n");
  if (lines.length <= 1) return 0;
  return lines.slice(1).reduce((acc, line) => {
    const values = line.split(",").map((v) => v.replace(/"/g, ""));
    const skill = parseInt(values[6]) || 0;
    const arcade = parseInt(values[8]) || 0;
    return acc + (skill + arcade === 20 ? 1 : 0);
  }, 0);
}

const rewardTiers = [
  {
    tier: "Tier 1",
    title: "Ultimate Prize Pack",
    target: "First 100 Students",
    progress: "0/100", // will be overridden dynamically
    icon: Trophy,
    color: "text-gradient-yellow",
    bgColor: "bg-gradient-yellow/10",
    borderColor: "border-gradient-yellow/30",
    rewards: [
      "🎒 Google Cloud Bag",
      "👕 Google Cloud T-Shirt",
      "💧 Google Cloud Bottle",
      "✨ Stickers & Goodies",
      "📜 Certificate of Participation",
      "🎯 Digital Badges",
      "🎉 Easy Access to All GDG OC Events",
    ],
  },
  {
    tier: "Tier 2",
    title: "Advanced Rewards",
    target: "First 70 Students",
    progress: "0/70", // will be overridden dynamically
    icon: Award,
    color: "text-gradient-cyan",
    bgColor: "bg-gradient-cyan/10",
    borderColor: "border-gradient-cyan/30",
    rewards: [
      "👕 Google Cloud T-Shirt",
      "💧 Google Cloud Bottle",
      "✨ Stickers & Goodies",
      "📜 Certificate of Participation",
      "🎯 Digital Badges",
      "🎉 Easy Access to All GDG OC Events",
    ],
  },
  {
    tier: "Tier 3",
    title: "Essential Pack",
    target: "All Completers",
    progress: "Open",
    icon: Star,
    color: "text-gradient-orange",
    bgColor: "bg-gradient-orange/10",
    borderColor: "border-gradient-orange/30",
    rewards: [
      "✨ Stickers & Goodies",
      "📜 Certificate of Participation",
      "🎯 Digital Badges",
      "🎉 Easy Access to All GDG OC Events",
    ],
  },
];

const Rewards = () => {
  const { data } = useLeaderboardData();
  const completed20 = data.filter(e => (e.skillBadgesCompleted + e.arcadeGamesCompleted) === 20).length;

  const tiersWithProgress = rewardTiers.map((t, idx) => {
    if (idx === 0) return { ...t, progress: `${completed20}/100` };
    if (idx === 1) return { ...t, progress: `${completed20}/70` };
    return t;
  });
  return (
    <div className="min-h-screen bg-background pb-36">
      <Header />
      
      <main className="container max-w-6xl mx-auto px-4 py-8">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30">
              <Gift className="w-5 h-5 text-primary" />
              <span className="text-sm font-semibold text-primary">REWARDS INFO</span>
            </div>
            <h2 className="text-4xl font-bold text-foreground">What You Can Win! 🏆</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Complete the Google Cloud Study Jam and earn exclusive Google Cloud swags based on your tier!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {tiersWithProgress.map((tier, index) => {
              const Icon = tier.icon;
              return (
                <Card 
                  key={index} 
                  className={`p-6 border ${tier.borderColor} ${tier.bgColor} hover:shadow-lg hover:shadow-primary/10 transition-all duration-200`}
                >
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <Badge variant="secondary" className={`${tier.bgColor} ${tier.color} border-0 text-2xl`}>
                          {tier.tier}
                        </Badge>
                        <Icon className={`w-8 h-8 ${tier.color}`} />
                      </div>
                      
                      {/* Image/Preview Panel */}
                      <div className="rounded-xl bg-muted/20 p-3 border border-border/50">
                        <div className="rounded-t-lg bg-emerald-500 text-white text-xs font-semibold px-3 py-1 inline-block mb-2">
                          Participant Rewards
                        </div>
                        <div className="rounded-lg bg-background p-2 shadow-sm">
                          {index === 0 ? (
                            <img
                              src="/tier1.jpg"
                              alt="Tier 1 Rewards"
                              className="w-full h-40 object-cover rounded-md border border-border/50"
                              loading="lazy"
                            />
                          ) : (
                            <div className="w-full h-40 grid place-items-center rounded-md border border-dashed border-border/70 text-muted-foreground text-sm">
                              Will be announced soon
                            </div>
                          )}
                        </div>
                      </div>

                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-2">{tier.title}</h3>
                        <div className="space-y-1">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-muted-foreground">🎯 Target:</span>
                            <span className="font-semibold text-foreground">{tier.target}</span>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-muted-foreground">Progress:</span>
                            <span className={`font-bold ${tier.color}`}>{tier.progress}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <p className="text-xs font-semibold text-muted-foreground uppercase">Rewards Include:</p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {tier.rewards.map((reward, idx) => (
                          <li key={idx} className="text-sm text-foreground">
                            <div className="w-full rounded-md border border-border/60 bg-background/60 px-3 py-2 shadow-sm hover:shadow md:hover:translate-y-0.5 transition-all">
                              {reward}
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 border-t border-border/50">
                      <p className="text-xs text-muted-foreground">
                        Complete all 20 courses
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          
        </div>
      </main>

      <Footer />
      <BottomNav />
    </div>
  );
};

export default Rewards;
