import { Instagram, Linkedin, MessageCircle } from "lucide-react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const Footer = () => {
  const year = new Date().getFullYear();
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  const go = (path: string) => {
    if (!path) return;
    
    // If already on the same page, just scroll to top
    if (location.pathname === path) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    
    setLoading(true);
    setTimeout(() => {
      navigate(path);
      setLoading(false);
    }, 800);
  };

  return (
    <footer className="mt-12 border-t border-border/50 bg-card/60">
      <div className="container max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand */}
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="GDG" className="w-10 h-10 rounded-md" />
            <h3 className="text-xl font-bold text-foreground">Google Cloud Study Jam</h3>
          </div>
          <p className="text-sm text-muted-foreground">
            Empowering students with Google Cloud & AI skills
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-sm font-semibold text-muted-foreground uppercase mb-3">Quick Links</h4>
          <ul className="space-y-2 text-foreground">
            <li>
              <button onClick={() => go('/')} className="hover:text-blue-500 transition-colors">Home</button>
            </li>
            <li>
              <button onClick={() => go('/rewards')} className="hover:text-blue-500 transition-colors">Rewards</button>
            </li>
            <li>
              <button onClick={() => go('/syllabus')} className="hover:text-blue-500 transition-colors">Syllabus</button>
            </li>
            <li>
              <button onClick={() => go('/leaderboard')} className="hover:text-blue-500 transition-colors">Leaderboard</button>
            </li>
            <li>
              <button onClick={() => go('/guide')} className="hover:text-blue-500 transition-colors">Rules & Guidelines</button>
            </li>
          </ul>
        </div>

        {/* Connect With Us */}
        <div>
          <h4 className="text-sm font-semibold text-muted-foreground uppercase mb-3">Connect With Us</h4>
          <ul className="space-y-2 text-foreground">
            <li className="flex items-center gap-2">
              <MessageCircle className="w-4 h-4 text-muted-foreground" />
              <a target="_blank" href="https://chat.whatsapp.com/CGmX2Ca1B5sAagg93ixtEr?mode=wwt" className="hover:text-blue-500 transition-colors">WhatsApp</a>
            </li>
            <li className="flex items-center gap-2">
              <Linkedin className="w-4 h-4 text-muted-foreground" />
              <a target="_blank" href="https://www.linkedin.com/company/gdg-bpit-chapter/posts/?feedView=all" className="hover:text-blue-500 transition-colors">LinkedIn</a>
            </li>
            <li className="flex items-center gap-2">
              <Instagram className="w-4 h-4 text-muted-foreground" />
              <a target="_blank" href="https://www.instagram.com/gdg_bpit?igsh=MXNxbHlpZDdsamwwMA==" className="hover:text-blue-500 transition-colors">Instagram</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border/40">
        <div className="container max-w-7xl mx-auto px-4 py-4 text-center text-xs text-muted-foreground space-y-1">
          <div> {year} Google Cloud Study Jams. All rights reserved.</div>
          <div>
            Made with <span className="text-red-500">♡</span> by GDG Community
          </div>
        </div>
      </div>

      {loading && (
        <div className="fixed inset-0 z-[60] grid place-items-center bg-background/70 backdrop-blur-sm">
          <div className="h-10 w-10 border-4 border-primary border-t-transparent rounded-full animate-spin" />
        </div>
      )}
    </footer>
  );
};
