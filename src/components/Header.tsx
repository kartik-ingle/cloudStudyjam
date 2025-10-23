import { MessageCircle } from "lucide-react";

export const Header = () => {
  return (
    <>
      {/* Fixed Join Group Button on Left Side */}
      <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50">
        <a
          target="_blank"
          href="https://chat.whatsapp.com/CGmX2Ca1B5sAagg93ixtEr?mode=wwt"
          className="bg-success hover:bg-success/90 text-background shadow-lg rounded-full p-3 flex items-center justify-center"
          aria-label="Join WhatsApp group"
        >
          <MessageCircle className="w-6 h-6" />
        </a>
      </div>

      <header className="sticky top-0 z-40 w-full border-b border-border/50 bg-background/95 backdrop-blur-lg mb-16">
        <div className="container max-w-7xl mx-auto px-4 py-4 flex items-center justify-center lg:justify-start">
          {/* Logo - Responsive */}
          <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0">
            <img className="rounded-xl w-full h-full object-cover" src="/logo.png" alt="GDG Logo" />
          </div>
          
          {/* Text Content - Responsive */}
          <div className="flex flex-col gap-2 lg:gap-4 ml-3 lg:ml-4">
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-foreground text-center lg:text-left">
              Google Cloud Study Jam Leaderboard
            </h1>
            <p className="text-sm sm:text-base lg:text-xl text-muted-foreground font-semibold text-center lg:text-left">
              GDG on Campus BPIT
            </p>
          </div>
        </div>
        <div className="h-1 bg-gradient-primary" />
      </header>
    </>
  );
};
