
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import BoxCovid from "./pages/BoxCovid";
import RobotArm from "./pages/RobotArm";
import PanTiltRobot from "./pages/PanTiltRobot";
import RoboticsCompetition from "./pages/RoboticsCompetition";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/box-covid" element={<BoxCovid />} />
          <Route path="/robot-arm" element={<RobotArm />} />
          <Route path="/pan-tilt-robot" element={<PanTiltRobot />} />
          <Route path="/robotics-competition" element={<RoboticsCompetition />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
