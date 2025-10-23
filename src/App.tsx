import { ScrollToTop } from "@/components/ScrollToTop";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Guide from "./pages/Guide";
import Index from "./pages/Index";
import Leaderboard from "./pages/Leaderboard";
import NotFound from "./pages/NotFound";
import Rewards from "./pages/Rewards";
import Syllabus from "./pages/Syllabus";
import Winners from "./pages/Winners";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/syllabus" element={<Syllabus />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/winners" element={<Winners />} />
          <Route path="/guide" element={<Guide />} />
          <Route path="/rewards" element={<Rewards />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
