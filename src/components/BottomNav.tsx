import { cn } from "@/lib/utils";
import { BookOpen, FileText, Gift, Home, Trophy } from "lucide-react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const navItems = [
  { icon: Home, label: "Home", path: "/" },
  { icon: BookOpen, label: "Syllabus", path: "/syllabus" },
  { icon: Trophy, label: "Leaderboard", path: "/leaderboard" },
  
  { icon: FileText, label: "Guide", path: "/guide" },
  { icon: Gift, label: "Rewards", path: "/rewards" },
];

export const BottomNav = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  return (
    <>
      <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 bg-card/95 backdrop-blur-lg border border-border/50 rounded-2xl shadow-lg">
        <div className="px-2">
          <div className="flex items-center justify-around gap-1 py-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <button
                  key={item.path}
                  onClick={() => {
                    if (location.pathname === item.path) {
                      // If already on the same page, just scroll to top
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                      return;
                    }
                    setLoading(true);
                    setTimeout(() => {
                      navigate(item.path);
                      setLoading(false);
                    }, 800);
                  }}
                  className={cn(
                    "flex flex-col items-center gap-1 px-4 py-2 rounded-xl transition-all duration-200",
                    isActive 
                      ? "text-primary bg-primary/10" 
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                  )}
                >
                  <Icon className="w-5 h-5" />
                  <span className="text-xs font-medium">{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {loading && (
        <div className="fixed inset-0 z-[100] grid place-items-center bg-background/70 backdrop-blur-sm">
          <div className="h-10 w-10 border-4 border-primary border-t-transparent rounded-full animate-spin" />
        </div>
      )}
    </>
  );
};
