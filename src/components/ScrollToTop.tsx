import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Scrolls window to top whenever the route path changes
export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Use smooth behavior only if supported; fallback to instant
    try {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
    } catch {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
};
