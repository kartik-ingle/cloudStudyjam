import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface StatCardProps {
  icon: ReactNode;
  title: string;
  value: string | number;
  subtitle?: string;
  iconBg?: string;
  highlight?: boolean;
}

export const StatCard = ({ icon, title, value, subtitle, iconBg = "bg-gradient-card", highlight = false }: StatCardProps) => {
  return (
    <Card className={cn(
      "relative overflow-hidden border-border/50 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 hover:scale-105 hover:-translate-y-1 group cursor-pointer",
      highlight && "border-warning/50 ring-2 ring-warning/20"
    )}>
      <div className="p-6 space-y-4">
        <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-3", iconBg)}>
          {icon}
        </div>
        <div className="space-y-1">
          <div className="text-3xl font-bold text-foreground transition-colors duration-300 group-hover:text-primary">{value}</div>
          <div className="text-sm font-medium text-foreground/90 transition-colors duration-300 group-hover:text-foreground">{title}</div>
          {subtitle && <div className="text-xs text-muted-foreground transition-colors duration-300 group-hover:text-muted-foreground/80">{subtitle}</div>}
        </div>
      </div>
      {/* Subtle gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </Card>
  );
};
