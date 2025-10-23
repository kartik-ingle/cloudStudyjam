import { Header } from "@/components/Header";
import { BottomNav } from "@/components/BottomNav";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2 } from "lucide-react";

const winners = [
  { name: "Krish Gupta", badges: 55, tier: "Tier 1" },
  { name: "Priya Sharma", badges: 48, tier: "Tier 1" },
  { name: "Rahul Kumar", badges: 45, tier: "Tier 1" },
  { name: "Ananya Singh", badges: 42, tier: "Tier 2" },
  { name: "Arjun Patel", badges: 40, tier: "Tier 2" },
  { name: "Sneha Reddy", badges: 38, tier: "Tier 2" },
  { name: "Vikram Mehta", badges: 35, tier: "Tier 2" },
  { name: "Divya Nair", badges: 33, tier: "Tier 3" },
  { name: "Rohan Das", badges: 30, tier: "Tier 3" },
  { name: "Pooja Verma", badges: 28, tier: "Tier 3" },
];

const Winners = () => {
  return (
    <div className="min-h-screen bg-background pb-24">
      <Header />
      
      <main className="container max-w-4xl mx-auto px-4 py-8">
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold text-foreground">🎉 Winners Gallery</h2>
            <p className="text-muted-foreground">Participants who completed all 20 courses!</p>
          </div>

          <Card className="p-6 bg-gradient-card border-primary/50">
            <div className="text-center space-y-2">
              <div className="text-5xl font-bold text-foreground">55</div>
              <div className="text-lg font-semibold text-foreground">Total Winners</div>
              <div className="text-sm text-muted-foreground">Successfully completed all courses</div>
            </div>
          </Card>

          <div className="space-y-3">
            {winners.map((winner, index) => (
              <Card key={index} className="p-4 border-border/50 hover:border-primary/50 transition-all duration-200">
                <div className="flex items-center gap-4">
                  <Avatar className="w-12 h-12">
                    <AvatarFallback className="bg-primary/20 text-primary font-semibold">
                      {winner.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-foreground">{winner.name}</h3>
                      <CheckCircle2 className="w-4 h-4 text-success" />
                    </div>
                    <p className="text-sm text-muted-foreground">All {winner.badges} badges earned</p>
                  </div>
                  
                  <Badge 
                    variant="secondary" 
                    className={
                      winner.tier === "Tier 1" ? "bg-gradient-yellow/20 text-gradient-yellow border-gradient-yellow/30" :
                      winner.tier === "Tier 2" ? "bg-gradient-cyan/20 text-gradient-cyan border-gradient-cyan/30" :
                      "bg-gradient-orange/20 text-gradient-orange border-gradient-orange/30"
                    }
                  >
                    {winner.tier}
                  </Badge>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <BottomNav />
    </div>
  );
};

export default Winners;
