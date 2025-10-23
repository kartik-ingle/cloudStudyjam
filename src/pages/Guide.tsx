import { BottomNav } from "@/components/BottomNav";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Card } from "@/components/ui/card";
import { ArrowRight, CheckCircle2, Clock, CreditCard, Eye, Globe, Lightbulb, Target, X } from "lucide-react";

const steps = [
  {
    title: "Create Your Google Cloud Skills Boost Account",
    description: "Sign up using your institutional email address to get started with the learning platform.",
  },
  {
    title: "Enroll in the Learning Pathway",
    description: "Access the Gen AI Study Jams pathway and enroll in all 20 courses to begin your journey.",
  },
  {
    title: "Complete Each Course Module",
    description: "Watch videos, complete labs, and earn badges for each course you finish. Take your time to understand each concept.",
  },
  {
    title: "Track Your Progress",
    description: "Monitor your completion status on this leaderboard. Your progress updates automatically as you complete courses.",
  },
  {
    title: "Earn All 20 Badges",
    description: "Complete all courses and collect all 20 skill badges to qualify for rewards and recognition.",
  },
  {
    title: "Submit Proof of Completion",
    description: "Share your completion certificate and badge profile in the WhatsApp group to claim your tier-based rewards.",
  },
  {
    title: "Claim Your Rewards",
    description: "Based on your completion tier (1, 2, or 3), you'll receive exclusive Google Cloud swag and certificates!",
  },
];

const Guide = () => {
  return (
    <div className="min-h-screen bg-background pb-36">
      <Header />
      
      <main className="container max-w-4xl mx-auto px-4 py-8">
        <div className="space-y-6">
          {/* Google Cloud Credits Redemption Section */}
          <Card className="group relative overflow-hidden border-2 border-yellow-500/60 bg-gradient-to-br from-slate-800/95 to-slate-900/95 backdrop-blur-sm transition-all duration-500 hover:border-yellow-400/80 hover:shadow-2xl hover:shadow-yellow-500/20">
            {/* Animated border gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 via-orange-500/20 to-red-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
            
            {/* Animated border lines */}
            <div className="absolute inset-0 rounded-lg">
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100"></div>
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 delay-300"></div>
              <div className="absolute top-0 left-0 w-0.5 h-full bg-gradient-to-b from-transparent via-yellow-400 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 delay-200"></div>
              <div className="absolute top-0 right-0 w-0.5 h-full bg-gradient-to-b from-transparent via-yellow-400 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 delay-400"></div>
            </div>

            {/* Pulsing corner effects */}
            <div className="absolute top-2 left-2 w-3 h-3 bg-yellow-400/60 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-500"></div>
            <div className="absolute top-2 right-2 w-3 h-3 bg-orange-400/60 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-500 delay-100"></div>
            <div className="absolute bottom-2 left-2 w-3 h-3 bg-yellow-400/60 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-500 delay-200"></div>
            <div className="absolute bottom-2 right-2 w-3 h-3 bg-orange-400/60 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-500 delay-300"></div>

            {/* Enhanced background pattern */}
            <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/30 via-orange-500/20 to-red-500/30"></div>
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.15),transparent_50%)]"></div>
              <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.1),transparent_50%)]"></div>
              <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,rgba(255,255,255,0.05)_90deg,transparent_180deg,rgba(255,255,255,0.05)_270deg,transparent_360deg)] opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
          </div>

            <div className="relative p-6 md:p-8">
              <div className="flex items-center gap-4">
                {/* Enhanced Credit Card Icon */}
                <div className="flex-shrink-0 group/card">
                  <div className="w-16 h-12 rounded-lg bg-gradient-to-br from-yellow-400 via-yellow-500 to-orange-500 shadow-lg flex items-center justify-center relative overflow-hidden transition-all duration-300 group-hover:scale-110 group-hover:rotate-2 group-hover:shadow-xl group-hover:shadow-yellow-500/30">
                    {/* Card shimmer effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-white/10 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover/card:translate-x-[100%] transition-transform duration-1000"></div>
                    
                    {/* Card design */}
                    
                    <CreditCard className="w-6 h-6 text-white/90 relative z-10 transition-transform duration-300 group-hover/card:scale-110" />
                  </div>
                </div>

                {/* Enhanced Content */}
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2 transition-all duration-300 group-hover:text-yellow-100">
                    Haven't Redeemed Your Google Cloud Credits?
                  </h3>
                  <p className="text-white/80 text-sm md:text-base transition-all duration-300 group-hover:text-white/90">
                    If you haven't redeemed your Google Cloud credits yet, click below to get started!
                  </p>
                </div>

                {/* Enhanced Redeem Button */}
                  <div className="flex-shrink-0">
                  <a
                    href="https://www.cloudskillsboost.google/quests/120"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn relative inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-bold rounded-lg shadow-lg transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-500/40 hover:scale-110 hover:from-yellow-400 hover:to-orange-400 transform hover:-translate-y-2 overflow-hidden"
                  >
                    {/* Button shimmer effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700"></div>
                    
                    {/* Button glow effect */}
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-yellow-400 to-orange-400 opacity-0 group-hover/btn:opacity-30 transition-opacity duration-300 blur-sm"></div>
                    
                    <a target="_blank" href="https://docs.google.com/document/d/1e4pKLEfAqCcRl5LmHLaO4f3vKAvDjelm85IUTiaN_no/edit?tab=t.0#heading=h.g7dr31dq0zf5" className="relative z-10">Redeem Now</a>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:scale-110 relative z-10" />
                    
                    {/* Pulsing effect */}
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-yellow-400 to-orange-400 opacity-0 group-hover/btn:opacity-20 group-hover/btn:animate-pulse transition-opacity duration-300"></div>
                  </a>
                </div>
              </div>
            </div>
          </Card>

          {/* Important Rules to Follow Section */}
          <div className="space-y-6">
            {/* Header Section */}
            <div className="text-center space-y-4">
              {/* MUST READ Button */}
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-green-500 text-white font-bold rounded-lg shadow-lg mt-10">
                <div className="w-3 h-3 bg-yellow-400 rounded-sm"></div>
                <span>MUST READ</span>
              </div>
              
              {/* Title */}
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Important Rules to Follow
              </h2>
              
              {/* Subtitle */}
              <p className="text-white/80 text-lg">
                Keep these in mind to avoid any issues and ensure success! 🎓
              </p>
            </div>

            {/* Rules Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 1: Minimum 6 Minutes */}
              <Card className="group relative overflow-hidden border-2 border-slate-600 bg-gradient-to-br from-slate-800/95 to-slate-900/95 backdrop-blur-sm transition-all duration-300 hover:border-blue-400/60 hover:shadow-xl hover:shadow-blue-500/20 hover:scale-105">
                <div className="p-6 text-center space-y-4">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center shadow-lg">
                    <Clock className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Minimum 6 Minutes</h3>
                  <p className="text-white/80">Spend at least 6 minutes on each lab before ending it</p>
                  <div className="bg-red-900/50 border border-red-700/50 rounded-lg p-3">
                    <p className="text-white text-sm">
                      <span className="font-semibold">Why?</span> Labs completed too quickly may be flagged as suspicious
                    </p>
                  </div>
                </div>
              </Card>

              {/* Card 2: One Lab at a Time */}
              <Card className="group relative overflow-hidden border-2 border-orange-500/60 bg-gradient-to-br from-slate-800/95 to-slate-900/95 backdrop-blur-sm transition-all duration-300 hover:border-orange-400/80 hover:shadow-xl hover:shadow-orange-500/20 hover:scale-105">
                <div className="p-6 text-center space-y-4">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                    <X className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">One Lab at a Time</h3>
                  <p className="text-white/80">Don't start two labs at once or simultaneously</p>
                  <div className="bg-red-900/50 border border-red-700/50 rounded-lg p-3">
                    <p className="text-white text-sm">
                      <span className="font-semibold">Why?</span> Multiple concurrent labs can cause errors and confuse the system
                    </p>
                  </div>
                </div>
              </Card>

              {/* Card 3: Complete 100% Score */}
              <Card className="group relative overflow-hidden border-2 border-slate-600 bg-gradient-to-br from-slate-800/95 to-slate-900/95 backdrop-blur-sm transition-all duration-300 hover:border-green-400/60 hover:shadow-xl hover:shadow-green-500/20 hover:scale-105">
                <div className="p-6 text-center space-y-4">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center shadow-lg">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Complete 100% Score</h3>
                  <p className="text-white/80">Don't end the lab before getting all 100 points</p>
                  <div className="bg-red-900/50 border border-red-700/50 rounded-lg p-3">
                    <p className="text-white text-sm">
                      <span className="font-semibold">Why?</span> Incomplete labs won't count toward your final completion score
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Second Row - 2 Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {/* Card 4: Incognito Mode */}
              <Card className="group mb-16 relative overflow-hidden border-2 border-slate-600 bg-gradient-to-br from-slate-800/95 to-slate-900/95 backdrop-blur-sm transition-all duration-300 hover:border-purple-400/60 hover:shadow-xl hover:shadow-purple-500/20 hover:scale-105">
                <div className="p-6 text-center space-y-4">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full flex items-center justify-center shadow-lg">
                    <Eye className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Incognito Mode</h3>
                  <p className="text-white/80">Open all labs in incognito window only</p>
                  <p className="text-white/60 text-sm">(Google Cloud Console Student Emails)</p>
                  <div className="bg-slate-700/50 border border-slate-600/50 rounded-lg p-3">
                    <p className="text-white text-sm">
                      <span className="font-semibold">Setup:</span> Lab page → Normal tab | Google Cloud Console → Incognito window
                    </p>
                  </div>
                    </div>
              </Card>

              {/* Card 5: Use Chrome Browser */}
              <Card className="group mb-16 relative overflow-hidden border-2 border-slate-600 bg-gradient-to-br from-slate-800/95 to-slate-900/95 backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/60 hover:shadow-xl hover:shadow-cyan-500/20 hover:scale-105">
                <div className="p-6 text-center space-y-4">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center shadow-lg">
                    <Globe className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Use Chrome Browser</h3>
                  <p className="text-white/80">Preferably use Chrome browser only, not other browsers</p>
                  <div className="bg-red-900/50 border border-red-700/50 rounded-lg p-3">
                    <p className="text-white text-sm">
                      <span className="font-semibold">Why?</span> Google Cloud Console works best with Chrome for optimal compatibility
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Pro Tips for Success Section */}
          <Card className="group/outer relative overflow-hidden border-2 border-green-500/60 bg-gradient-to-br from-slate-800/40 to-slate-900/50 backdrop-blur-sm transition-all duration-500 hover:border-green-400/80 hover:shadow-2xl hover:shadow-green-500/30 hover:scale-[1.02]">
            {/* Animated border gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 via-emerald-500/20 to-green-500/20 opacity-0 group-hover/outer:opacity-100 transition-opacity duration-500 rounded-lg "></div>
            
            {/* Animated border lines */}
            <div className="absolute inset-0 rounded-lg">
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-green-400 to-transparent opacity-0 group-hover/outer:opacity-100 transition-all duration-700 delay-100"></div>
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-green-400 to-transparent opacity-0 group-hover/outer:opacity-100 transition-all duration-700 delay-300"></div>
              <div className="absolute top-0 left-0 w-0.5 h-full bg-gradient-to-b from-transparent via-green-400 to-transparent opacity-0 group-hover/outer:opacity-100 transition-all duration-700 delay-200"></div>
              <div className="absolute top-0 right-0 w-0.5 h-full bg-gradient-to-b from-transparent via-green-400 to-transparent opacity-0 group-hover/outer:opacity-100 transition-all duration-700 delay-400"></div>
            </div>

            {/* Pulsing corner effects */}
            <div className="absolute top-2 left-2 w-3 h-3 bg-green-400/60 rounded-full opacity-0 group-hover/outer:opacity-100 group-hover/outer:animate-ping transition-opacity duration-500"></div>
            <div className="absolute top-2 right-2 w-3 h-3 bg-emerald-400/60 rounded-full opacity-0 group-hover/outer:opacity-100 group-hover/outer:animate-ping transition-opacity duration-500 delay-100"></div>
            <div className="absolute bottom-2 left-2 w-3 h-3 bg-green-400/60 rounded-full opacity-0 group-hover/outer:opacity-100 group-hover/outer:animate-ping transition-opacity duration-500 delay-200"></div>
            <div className="absolute bottom-2 right-2 w-3 h-3 bg-emerald-400/60 rounded-full opacity-0 group-hover/outer:opacity-100 group-hover/outer:animate-ping transition-opacity duration-500 delay-300"></div>

            {/* Enhanced background pattern */}
            <div className="absolute inset-0 opacity-20 group-hover/outer:opacity-30 transition-opacity duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-green-400/30 via-emerald-500/20 to-green-500/30"></div>
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.15),transparent_50%)]"></div>
              <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.1),transparent_50%)]"></div>
              <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,rgba(255,255,255,0.05)_90deg,transparent_180deg,rgba(255,255,255,0.05)_270deg,transparent_360deg)] opacity-0 group-hover/outer:opacity-100 transition-opacity duration-1000"></div>
            </div>

            <div className="relative p-6 md:p-8 space-y-8">
              {/* Header Section */}
              <div className="flex items-center gap-4">
                {/* Lightbulb Icon with Glow Effect */}
                <div className="relative">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-400 to-green-500 flex items-center justify-center shadow-lg relative overflow-hidden">
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-300/50 to-green-400/50 rounded-full blur-sm"></div>
                    <Lightbulb className="w-8 h-8 text-white relative z-10" />
                  </div>
                </div>
                
                {/* Title */}
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  Pro Tips for Success
                </h2>
              </div>

              {/* Tips Grid - 2 rows of 3 cards each */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Row 1 */}
                <Card className="group relative overflow-hidden border-2 border-green-600/40 bg-gradient-to-br from-slate-700/30 to-slate-800/40 backdrop-blur-sm transition-all duration-300 hover:border-green-400/60 hover:shadow-xl hover:shadow-green-500/20 hover:scale-105 hover:-translate-y-1">
                  <div className="p-4 flex items-center gap-3">
                    <div className="flex-shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-green-400" />
                    </div>
                    <span className="text-white font-medium">Always verify lab code before starting</span>
                  </div>
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Card>

                <Card className="group relative overflow-hidden border-2 border-green-600/40 bg-gradient-to-br from-slate-700/30 to-slate-800/40 backdrop-blur-sm transition-all duration-300 hover:border-green-400/60 hover:shadow-xl hover:shadow-green-500/20 hover:scale-105 hover:-translate-y-1">
                  <div className="p-4 flex items-center gap-3">
                    <div className="flex-shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-green-400" />
                    </div>
                    <span className="text-white font-medium">Bookmark working video solutions</span>
                  </div>
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Card>

                <Card className="group relative overflow-hidden border-2 border-green-600/40 bg-gradient-to-br from-slate-700/30 to-slate-800/40 backdrop-blur-sm transition-all duration-300 hover:border-green-400/60 hover:shadow-xl hover:shadow-green-500/20 hover:scale-105 hover:-translate-y-1">
                  <div className="p-4 flex items-center gap-3">
                    <div className="flex-shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-green-400" />
                    </div>
                    <span className="text-white font-medium">Keep your Cloud Skills Boost account logged in</span>
                  </div>
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Card>

                {/* Row 2 */}
                <Card className="group relative overflow-hidden border-2 border-green-600/40 bg-gradient-to-br from-slate-700/30 to-slate-800/40 backdrop-blur-sm transition-all duration-300 hover:border-green-400/60 hover:shadow-xl hover:shadow-green-500/20 hover:scale-105 hover:-translate-y-1">
                  <div className="p-4 flex items-center gap-3">
                    <div className="flex-shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-green-400" />
                    </div>
                    <span className="text-white font-medium">Take breaks between labs to avoid fatigue</span>
                  </div>
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Card>

                <Card className="group relative overflow-hidden border-2 border-green-600/40 bg-gradient-to-br from-slate-700/30 to-slate-800/40 backdrop-blur-sm transition-all duration-300 hover:border-green-400/60 hover:shadow-xl hover:shadow-green-500/20 hover:scale-105 hover:-translate-y-1">
                  <div className="p-4 flex items-center gap-3">
                    <div className="flex-shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-green-400" />
                    </div>
                    <span className="text-white font-medium">Join WhatsApp group for help and updates</span>
                  </div>
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Card>

              
              </div>
            </div>
          </Card>
        </div>
      </main>

      <Footer />
      <BottomNav />
    </div>
  );
};

export default Guide;
