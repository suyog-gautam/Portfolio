import { Switch, Route } from "wouter";
import { useEffect, useState } from "react";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import { ThemeProvider } from "./context/ThemeContext";
import ThemeToggle from "./components/ThemeToggle";
import LoadingAnimation from "./components/LoadingAnimation";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [loading, setLoading] = useState(true);
  const [fontLoaded, setFontLoaded] = useState(false);
  
  // Wait for Poppins font to load before showing animation
  useEffect(() => {
    document.fonts.ready.then(() => {
      setFontLoaded(true);
    });
    
    // Set a backup timeout in case font loading takes too long
    const timeout = setTimeout(() => {
      setFontLoaded(true);
    }, 2000);
    
    return () => clearTimeout(timeout);
  }, []);
  
  // Handle completion of the loading animation
  const handleAnimationComplete = () => {
    setLoading(false);
  };
  
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider>
          <Toaster />
          {fontLoaded && loading && (
            <LoadingAnimation onAnimationComplete={handleAnimationComplete} />
          )}
          <ThemeToggle />
          <div className={loading ? 'invisible' : 'visible'}>
            <Router />
          </div>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
